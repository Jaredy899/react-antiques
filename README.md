# Vite Antiques

This is the Vite version of the Abingdon Antiques and More website, converted from Next.js.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📱 Responsive design
- 🗺️ Google Maps integration
- 📸 Image gallery with lightbox
- 🎯 React Router for navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Development

The development server will start on `http://localhost:3000`.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format:write` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── styles/        # Global styles
├── utils/         # Utility functions
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Key Changes from Next.js

- Replaced Next.js `Image` component with custom `OptimizedImage`
- Replaced Next.js `Link` with React Router `Link`
- Replaced Next.js routing with React Router
- Removed `'use client'` directives
- Updated font loading to use Google Fonts directly in HTML
- Converted to standard React app structure

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
pnpm build
```

The built files will be in the `dist` directory. 