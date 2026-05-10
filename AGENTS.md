# Repository Guidelines

## Project Structure & Module Organization
This is a React-based portfolio website built with **Vite** and **Tailwind CSS 4**. The project uses a flat directory structure for the source code, with a focus on component modularity.

- **`src/app/`**: Contains the core application logic and components.
  - **`components/ui/`**: Houses reusable **Shadcn UI** components.
  - **`components/figma/`**: Contains components potentially generated from Figma designs.
  - **`App.tsx`**: The main application entry point and layout definition.
- **`src/styles/`**: Manages styling with Tailwind CSS and theme definitions.
- **`src/assets/`**: Referenced by a custom `figma-asset-resolver` plugin in Vite.
- **`@` Alias**: The `@` symbol is aliased to the `src/` directory for cleaner imports.

## Build, Test, and Development Commands
The project uses `npm` as the primary package manager (though a `pnpm-workspace.yaml` exists for the root).

- **Development**: `npm run dev` - Starts the Vite development server.
- **Build**: `npm run build` - Creates a production build in the `dist/` directory.
- **Installation**: `npm install` - Installs project dependencies.

Note: No automated test suite or linting scripts are currently defined in `package.json`.

## Coding Style & Naming Conventions
- **Framework**: React 18 with TypeScript.
- **Styling**: Tailwind CSS 4 using utility-first classes.
- **UI Components**: Shadcn UI (Radix UI primitives).
- **Animations**: Framer Motion (`motion` package).
- **Icons**: Lucide React.
- **File Naming**: Components use `PascalCase.tsx`. Utility files use `kebab-case.ts`.

## Testing Guidelines
There is currently no testing framework configured in this repository.

## Commit & Pull Request Guidelines
This repository is not currently tracked by Git. If Git is initialized, follow standard feature-branch workflows with descriptive commit messages.
