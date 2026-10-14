# Sisap Design System

Enterprise-grade Design System untuk Sisap — dibangun dengan React 19, TypeScript, Tailwind CSS v4, W3C DTCG Tokens, CVA, Radix UI Primitives, dan Storybook.

---

##  Architecture

```text
SisapDS/
├── tokens/                 # Source of Truth: Design Tokens (W3C DTCG Format)
│   ├── base/               # Primitives: color, typography, spacing, radius, shadow
│   ├── semantic/           # Light & Dark theme mappings
│   ├── component/          # Per-component tokens (button, textfield, dll)
│   └── build/              # Output build CSS (tokens.css & tailwind-theme.css)
│
├── scripts/
│   └── build-tokens.mjs    # Compiler token DTCG -> CSS Variables & Tailwind Theme
│
├── src/                    # Core React Library (@sisapds/react)
│   ├── components/         # Komponen UI (Button, dll)
│   ├── hooks/              # Reusable custom hooks
│   ├── utils/              # Helper utilities (cn.ts)
│   └── index.ts            # Entry point export library
│
├── apps/
│   └── storybook/          # Storybook 8 (Dokumentasi & Visual Testing)
│
├── package.json            # Workspaces: ["apps/*"]
├── tsconfig.json           # Base TypeScript config
└── tsconfig.build.json     # Build types config (dist/)
```

---

##  Cara Memulai

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Tokens
Setiap kali ada penambahan atau perubahan nilai token di folder `tokens/`:
```bash
npm run tokens:build
```
Ini akan meng-generate file `tokens/build/tokens.css` dan `tokens/build/tailwind-theme.css`.

### 3. Jalankan Storybook (Katalog Komponen)
```bash
npm run storybook
```
Buka browser di `http://localhost:6006` untuk melihat katalog komponen secara interaktif.

### 4. Typecheck & Build Library
```bash
npm run typecheck
npm run build
```

---

##  Figma & Design Tokens Workflow

1. Variabel dan style baru dari Figma dimasukkan ke dalam file JSON di folder `tokens/` mengikuti format **W3C DTCG** (`$type`, `$value`, `{alias}`).
2. Jalankan `npm run tokens:build` untuk memperbarui variabel CSS.
3. Komponen di `src/components/` mengonsumsi variabel CSS `--ds-*` tersebut secara konsisten, sehingga pergantian tema (Light/Dark) otomatis berjalan lancar tanpa re-render.
