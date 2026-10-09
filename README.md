# 🎨 Divy's Sketchbook Portfolio

A developer portfolio designed to feel like a colorful, hand-drawn sketchbook brought to life. Built with React, Vite, TypeScript, Motion for React, and an Express TypeScript backend.

---

## 📖 Visual Direction & Palette
- **Warm Paper**: `#F8F4EB` (subtle notebook stipple pattern)
- **Lavender**: `#D6C5FF`
- **Soft Pink**: `#FFC9C7`
- **Mint Green**: `#B9F2C3`
- **Butter Yellow**: `#FFE99A`
- **Ink**: `#29252B`
- **Muted Text**: `#625C62`

---

## 🛠️ Tech Stack
- **Frontend (`client/`)**:
  - React 19 + TypeScript + Vite
  - Motion for React (`motion`) for physics and scroll interactions
  - Lucide React for UI icons
  - Tailwind CSS configured with custom sketchbook borders, shadows, and handwritten typography (`Patrick Hand`, `Caveat`, `Plus Jakarta Sans`)
  - ESLint 9 + TypeScript-ESLint
- **Backend (`server/`)**:
  - Node.js + Express 4 + TypeScript
  - CORS, Dotenv, TSX watch runner
  - ESLint 9 + TypeScript-ESLint

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
# In the root directory:
npm install

# In client and server:
npm install --prefix client
npm install --prefix server
```

### 2. Start Development Servers
Run both frontend and backend concurrently:
```bash
npm run dev
```

Or start them individually:
```bash
# Frontend (http://localhost:5173)
npm run dev:client

# Backend (http://localhost:5000)
npm run dev:server
```

### 3. Build & Lint
```bash
# Build both client and server
npm run build

# Lint both client and server
npm run lint
```

---

## 🗺️ Project Structure
```
divy-sketchbook-portfolio/
├── package.json              # Root scripts (dev, build, lint via concurrently)
├── .gitignore                # Root gitignore rules
├── README.md
├── client/                   # Frontend React + TypeScript + Vite
│   ├── index.html            # Google Fonts & warm sketchbook theme
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js    # Sketchbook colors, drop shadows, hand fonts
│   ├── eslint.config.js      # ESLint configuration
│   ├── .env.example
│   ├── public/
│   │   └── favicon.svg       # Hand-drawn notebook favicon
│   └── src/
│       ├── main.tsx
│       ├── App.tsx           # App shell and active section tracking
│       ├── index.css         # Paper dot-grid pattern & hand-drawn box utilities
│       ├── config/
│       │   └── siteConfig.ts # Verified profile information & navigation items
│       ├── components/
│       │   ├── Navbar.tsx           # Hand-drawn banner navbar & mobile drawer
│       │   ├── SketchDoodles.tsx    # Reusable SVGs (underlines, arrows, stars, washi tape)
│       │   ├── SketchButton.tsx     # Tactile hand-drawn button with physics
│       │   ├── CharacterMascot.tsx  # Illustrated sketchbook mascot with quotes
│       │   └── Footer.tsx           # Hand-drawn notebook footer
│       └── sections/
│           ├── HeroSection.tsx          # Full notebook hero page (Phase 3)
│           └── SectionPlaceholders.tsx  # Previews for Work, About, and Contact
└── server/                   # Backend Express + TypeScript
    ├── package.json
    ├── tsconfig.json
    ├── eslint.config.js      # Server ESLint configuration
    ├── .env.example
    └── src/
        ├── index.ts          # Express server with CORS & root routing
        └── routes/
            └── api.ts        # Health check and profile API endpoints
```

---

## 🧭 Implementation Status
- [x] **Phase 1**: Workspace inspection & directory architecture
- [x] **Phase 2**: React/Vite TypeScript frontend & Express/TypeScript backend setup with ESLint and scripts
- [x] **Phase 3**: Navigation and Hero section with illustrated character mascot and hand-drawn doodles
- [x] **Phase 4**: Verification of dev servers, endpoints, builds, and linting
- [ ] **Phase 5**: Refine spacing, typography, colors, and sketch-like outlines
- [ ] **Phase 6**: Illustrated project cards (ResumeIQ, RouteRush, StudyNotion, Sign Language)
- [ ] **Phase 7**: About ("Why I Build") & Contact sections
- [ ] **Phase 8**: Motion & interactive polish
- [ ] **Phase 9**: Persistent storage integration (MongoDB) where applicable
- [ ] **Phase 10**: Production build verification & mobile responsiveness audits
