# GU Path Master

A comprehensive educational platform for learning Genitourinary (GU) Pathology, designed for pathology residents and fellows.

## Features

### Educational Modules
- **Prostate Pathology**: Benign conditions, mimics, cancer patterns, IHC markers
- **Bladder & Urothelium**: Reactive vs neoplastic, CIS, papillary lesions
- **Kidney Tumors**: RCC subtypes, oncocytoma, IHC patterns, molecular concepts
- **Medical Kidney**: Glomerular patterns, tubulointerstitial, vascular lesions
- **Testis & Paratesticular**: Germ cell tumors, sex cord-stromal tumors, IHC
- **Penis & Urethra**: Squamous lesions, HPV patterns, urethral pathology
- **IHC Frameworks**: Marker panels, staining patterns, differential diagnosis
- **Molecular Concepts**: Genetic alterations, fusion genes, pathway concepts
- **Pitfalls & Mimics**: Common diagnostic challenges and how to avoid them
- **Case Bank**: 10 integrated synthetic cases with morphology, IHC, and molecular

### Interactive Features
- **Assessment Module**: 20 comprehensive questions with instant feedback
- **Session-Only Scoring**: Results displayed for current session only, not saved
- **Dark/Light Mode**: Toggle between themes (dark mode by default)
- **Mobile-First Design**: Optimized for all screen sizes
- **Offline Support**: PWA with service worker for offline access

### Privacy & Data
- No user tracking or analytics
- No data persistence (session-only)
- No personal information collected
- Theme preference stored locally only

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management (session-only)
- **React Router** - Client-side routing
- **Vite PWA** - Service worker for offline functionality
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Knowledgesynthesis/GU-PATH-MASTER.git
cd GU-PATH-MASTER
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
GU-PATH-MASTER/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (Card, Button, Badge)
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   ├── Navigation.tsx
│   │   └── ModuleTemplate.tsx
│   ├── pages/           # Route pages
│   │   ├── HomePage.tsx
│   │   ├── ProstatePage.tsx
│   │   ├── BladderPage.tsx
│   │   ├── KidneyTumorsPage.tsx
│   │   ├── MedicalKidneyPage.tsx
│   │   ├── TestisPage.tsx
│   │   ├── PenisPage.tsx
│   │   ├── IHCPage.tsx
│   │   ├── MolecularPage.tsx
│   │   ├── PitfallsPage.tsx
│   │   ├── CasesPage.tsx
│   │   ├── AssessmentPage.tsx
│   │   └── SettingsPage.tsx
│   ├── data/            # Educational content
│   │   ├── modules.ts
│   │   ├── cases.ts
│   │   └── questions.ts
│   ├── store/           # State management
│   │   ├── themeStore.ts
│   │   └── assessmentStore.ts
│   ├── types/           # TypeScript types
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Educational Content

All content in this app is:
- **Synthetic**: No real patient data or actual clinical cases
- **Educational**: Designed for learning and practice only
- **Not for clinical use**: Not intended for diagnosis or patient care
- **Conceptual**: Focuses on pattern recognition and systematic approach

## Disclaimers

### ⚠️ Educational Use Only
This platform is for educational purposes only. It is NOT intended for:
- Clinical diagnosis or patient care
- Medical decision-making
- Laboratory testing or reporting
- Treatment planning or recommendations

### Synthetic Content
All cases and scenarios are synthetic and created for educational purposes. They do not represent real patients or actual clinical cases.

### Not a Substitute for Training
This is a supplemental tool and does not replace formal pathology training, supervised experience, or standard references.

## License

This educational platform is provided for learning purposes. All rights reserved.

## Acknowledgments

Created to support pathology resident education in genitourinary pathology. Content based on standard pathology references and teaching practices.

---

**Version**: 1.0.0
**Built with**: React + TypeScript + Vite
**Last Updated**: December 2024
