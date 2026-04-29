# ⚡ React Starter Kit

A minimal, opinionated React starter template — skip boilerplate, start from something solid.

## Stack

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI library |
| [Vite](https://vitejs.dev) | 5 | Dev server & bundler |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety (strict mode) |
| [TailwindCSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [ESLint](https://eslint.org) | 8 | Linting |

## Quick start

```bash
# 1. Clone
git clone https://github.com/cole-ramer/react-starter-kit.git
cd react-starter-kit

# 2. Install
npm install

# 3. Run
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Type-check + build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project structure

```
src/
├── components/       # UI components
│   └── ui/           # Primitive/shared UI pieces
├── hooks/            # Custom React hooks
├── lib/              # Pure utility functions
├── types/            # Shared TypeScript types
├── App.tsx
├── main.tsx
└── index.css
```

## Design system

The Tailwind config ships with a custom dark design system:

- **Fonts** — `Syne` (display), `DM Sans` (body), `JetBrains Mono` (code)
- **Colors** — `surface`, `accent` (electric yellow-green), `ink`
- **Animations** — `fade-up`, `fade-in`

## Included utilities

### Hooks
- `useLocalStorage<T>` — synced, typed localStorage with cross-tab support
- `useMediaQuery` — reactive media query matching

### Lib
- `cn(...classes)` — lightweight classname helper
- `formatNumber`, `clamp`, `debounce`, `sleep`

### Types
- `ApiResponse<T>`, `Paginated<T>`, `RequiredKeys`, `DeepPartial`

## License

MIT
