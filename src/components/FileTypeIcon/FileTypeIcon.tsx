import * as React from "react";
import { cn } from "../../utils/cn";
import { fileTypeSvgData } from "./data";
import type { FileTypeIconProps, FileTypeFormat } from "./FileTypeIcon.types";

const ALIASES: Record<string, string> = {
  // Document
  pdf: "Document / PDF",
  doc: "Document / DOC",
  docx: "Document / DOCX",
  txt: "Document / TXT",
  csv: "Document / CSV",
  xls: "Document / XLS",
  xlsx: "Document / XLSX",
  ppt: "Document / PPT",
  pptx: "Document / PPTX",
  // Image
  png: "Image / PNG",
  jpg: "Image / JPG",
  jpeg: "Image / JPEG",
  webp: "Image / WebP",
  svg: "Image / SVG",
  gif: "Image / GIF",
  eps: "Image / EPS",
  tiff: "Image / TIFF",
  tif: "Image / TIFF",
  img: "Image / IMG",
  // Design
  fig: "Design / FIG (Figma)",
  figma: "Design / FIG (Figma)",
  ai: "Design / AI (Illustrator)",
  illustrator: "Design / AI (Illustrator)",
  psd: "Design / PSD (Photoshop)",
  photoshop: "Design / PSD (Photoshop)",
  indd: "Design / INDD (InDesign)",
  indesign: "Design / INDD (InDesign)",
  aep: "Design / AEP (After Effects)",
  aftereffects: "Design / AEP (After Effects)",
  // Media
  mp3: "Media / MP3",
  wav: "Media / WAV",
  mp4: "Media / MP4",
  avi: "Media / AVI",
  mkv: "Media / MKV",
  mpeg: "Media / MPEG",
  // Development
  html: "Development / HTML",
  css: "Development / CSS",
  js: "Development / JS",
  javascript: "Development / JS",
  json: "Development / JSON",
  java: "Development / JAVA",
  sql: "Development / SQL",
  xml: "Development / XML",
  rss: "Development / RSS",
  exe: "Development / EXE",
  dmg: "Development / DMG",
  // Archive
  zip: "Archive / ZIP",
  rar: "Archive / RAR",
  // Simple
  folder: "Simple / Folder",
  empty: "Simple / Empty",
  image: "Simple / Image",
  video: "Simple / Video 01",
  audio: "Simple / Audio",
  document: "Simple / Document",
  spreadsheet: "Simple / Spreadsheet",
  code: "Simple / Code",
};

function resolveKey(format: FileTypeFormat): string {
  if (fileTypeSvgData[format]) return format;
  const lower = format.toLowerCase().trim();
  if (ALIASES[lower]) return ALIASES[lower];
  // Case-insensitive key lookup
  const found = Object.keys(fileTypeSvgData).find(
    (k) => k.toLowerCase() === lower
  );
  return found ?? "Simple / Empty";
}

export const FileTypeIcon = React.forwardRef<SVGSVGElement, FileTypeIconProps>(
  ({ format, variant = "default", size = 40, className, ...props }, ref) => {
    const key = resolveKey(format);
    const item = fileTypeSvgData[key] ?? fileTypeSvgData["Simple / Empty"];
    const content = item ? item[variant] || item.default : "";

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block shrink-0 align-middle select-none", className)}
        dangerouslySetInnerHTML={{ __html: content }}
        aria-label={`${format} file icon`}
        role="img"
        {...props}
      />
    );
  }
);

FileTypeIcon.displayName = "FileTypeIcon";
