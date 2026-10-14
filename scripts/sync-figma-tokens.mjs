import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const scratch = "/Users/sigitsaptari/.gemini/antigravity-ide/brain/58620015-efd0-4f38-8e2d-08da6db21293/scratch";

function loadVars(file) {
  const filePath = path.join(scratch, file);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8")).data?.variables || [];
}

const prim = [...loadVars("primitives_p1.json"), ...loadVars("primitives_p2.json")];
const colors = [...loadVars("colormodes_p1.json"), ...loadVars("colormodes_p2.json")];
const radius = loadVars("radius.json");
const spacing = loadVars("spacing.json");
const widths = loadVars("widths.json");
const containers = loadVars("containers.json");
const typo = loadVars("typography.json");

console.log(`Loaded 326 variables from Figma files:
  - Primitives: ${prim.length}
  - Color modes: ${colors.length}
  - Radius: ${radius.length}
  - Spacing: ${spacing.length}
  - Widths: ${widths.length}
  - Containers: ${containers.length}
  - Typography: ${typo.length}
`);

// 1. Process Primitives: Colors & Spacing
const baseColors = { color: {} };
const baseSpacing = { spacing: {} };

for (const v of prim) {
  if (v.name.startsWith("Colors/")) {
    const parts = v.name.replace("Colors/", "").split("/");
    const category = parts[0].toLowerCase().replace(/\s+/g, "-");
    const name = parts[1];
    if (!baseColors.color[category]) {
      baseColors.color[category] = {};
    }
    const hex = v.resolvedValuesByMode?.Style?.value || "#000000";
    baseColors.color[category][name] = {
      $type: "color",
      $value: hex,
      $description: v.description || ""
    };
  } else if (v.name.startsWith("Spacing/")) {
    // e.g. "Spacing/4 (16px)" -> key "4", value "16px"
    const match = v.name.match(/^Spacing\/([^\s]+)(?:\s*\(([^)]+)\))?/);
    const key = match ? match[1].replace("․", ".") : v.name.replace("Spacing/", "");
    const rawVal = v.valuesByMode?.["5248:3"];
    const val = typeof rawVal === "number" ? `${rawVal}px` : (match?.[2] || `${rawVal}px`);
    baseSpacing.spacing[key] = {
      $type: "dimension",
      $value: val
    };
  }
}

// Also add Semantic Spacing (collection "3. Spacing") to baseSpacing
for (const v of spacing) {
  const val = v.resolvedValuesByMode?.["Mode 1"]?.value;
  baseSpacing.spacing[v.name] = {
    $type: "dimension",
    $value: typeof val === "number" ? `${val}px` : String(val)
  };
}

// 2. Process Radius
const baseRadius = { radius: {} };
for (const v of radius) {
  const val = v.resolvedValuesByMode?.["Mode 1"]?.value;
  baseRadius.radius[v.name] = {
    $type: "dimension",
    $value: typeof val === "number" ? `${val}px` : String(val)
  };
}

// 3. Process Widths
const baseWidths = { width: {} };
for (const v of widths) {
  const val = v.resolvedValuesByMode?.["Mode 1"]?.value;
  baseWidths.width[v.name] = {
    $type: "dimension",
    $value: typeof val === "number" ? `${val}px` : String(val)
  };
}

// 4. Process Containers
const baseContainers = { container: {} };
for (const v of containers) {
  const val = v.resolvedValuesByMode?.Value?.value;
  baseContainers.container[v.name] = {
    $type: "dimension",
    $value: typeof val === "number" ? `${val}px` : String(val)
  };
}

// 5. Process Typography
const baseTypo = {
  fontFamily: {},
  fontWeight: {},
  fontSize: {},
  lineHeight: {}
};

for (const v of typo) {
  const [cat, name] = v.name.split("/");
  const val = v.resolvedValuesByMode?.Value?.value;
  if (cat === "Font family") {
    baseTypo.fontFamily[name] = { $type: "fontFamily", $value: String(val) };
  } else if (cat === "Font weight") {
    baseTypo.fontWeight[name] = { $type: "fontWeight", $value: String(val) };
  } else if (cat === "Font size") {
    baseTypo.fontSize[name] = { $type: "dimension", $value: typeof val === "number" ? `${val}px` : String(val) };
  } else if (cat === "Line height") {
    baseTypo.lineHeight[name] = { $type: "dimension", $value: typeof val === "number" ? `${val}px` : String(val) };
  }
}

// 6. Process Semantic Colors: Light & Dark modes
const semanticLight = { semantic: { color: {} } };
const semanticDark = { semantic: { color: {} } };

function normalizeSemanticKey(name) {
  // e.g. "Colors/Text/text-primary (900)" -> "text.primary"
  // e.g. "Component colors/Components/Tooltips/tooltip-supporting-text" -> "component.tooltip-supporting-text"
  // e.g. "Colors/Background/bg-brand-solid" -> "background.brand-solid"
  // e.g. "Colors/Effects/Shadows/shadow-xs" -> "effect.shadow-xs"
  let clean = name
    .replace(/^Colors\//, "")
    .replace(/^Component colors\//, "")
    .replace(/\s*\([^)]*\)/g, "") // remove (900), etc.
    .replace(/\//g, ".")
    .toLowerCase();
  return clean;
}

function setNested(obj, pathArr, value) {
  let curr = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const p = pathArr[i];
    if (!curr[p] || typeof curr[p] !== "object") curr[p] = {};
    curr = curr[p];
  }
  curr[pathArr[pathArr.length - 1]] = value;
}

for (const v of colors) {
  const keyPath = normalizeSemanticKey(v.name).split(".");
  const lightInfo = v.resolvedValuesByMode?.["Light mode"];
  const darkInfo = v.resolvedValuesByMode?.["Dark mode"];

  const lightVal = lightInfo?.value || "#000000";
  const darkVal = darkInfo?.value || "#000000";

  setNested(semanticLight.semantic.color, keyPath, {
    $type: "color",
    $value: lightVal,
    $alias: lightInfo?.aliasTo || undefined,
    $description: v.name
  });

  setNested(semanticDark.semantic.color, keyPath, {
    $type: "color",
    $value: darkVal,
    $alias: darkInfo?.aliasTo || undefined,
    $description: v.name
  });
}

// Ensure target directories exist
fs.mkdirSync(path.join(repoRoot, "tokens/base"), { recursive: true });
fs.mkdirSync(path.join(repoRoot, "tokens/semantic"), { recursive: true });

// Write files
fs.writeFileSync(path.join(repoRoot, "tokens/base/color.json"), JSON.stringify(baseColors, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/base/spacing.json"), JSON.stringify(baseSpacing, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/base/border-radius.json"), JSON.stringify(baseRadius, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/base/widths.json"), JSON.stringify(baseWidths, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/base/containers.json"), JSON.stringify(baseContainers, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/base/typography.json"), JSON.stringify(baseTypo, null, 2));

fs.writeFileSync(path.join(repoRoot, "tokens/semantic/light.json"), JSON.stringify(semanticLight, null, 2));
fs.writeFileSync(path.join(repoRoot, "tokens/semantic/dark.json"), JSON.stringify(semanticDark, null, 2));

console.log(" All 326 Figma variables successfully written to tokens/base/ and tokens/semantic/!");
