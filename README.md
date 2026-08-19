# Vantair — Premium Home Page

Vantair is a premium, AI-powered Business Intelligence Workspace that turns scattered business data into clear signals, plain-English explanations, and recommended next actions.

This project was built for the **Acdyon Technologies Frontend Challenge**.

## Live Demo
- **URL**: [Vercel Deployment URL will be placed here]

## Technical Stack
- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Vanilla CSS (using HSL variables for synchronized Light/Dark mode styling)
- **Icons**: Lucide React
- **Design Tokens**: Geometric display headings (`Outfit` font), highly readable sans body copy (`Inter` font), subtle glassmorphic sheets, and custom shadow properties.

## Interactive Features
1. **Interactive Dashboard**: Tabbed preview displaying:
   - **Overview**: Custom SVG spline charts and metric cards.
   - **AI Insights**: Tracing a specific anomaly scenario: conversion drops, Safari browser details, and actionable rollback options.
   - **Automations**: Live toggle switches to control alerts.
2. **Double-Theme System**: Click the theme toggle icon in the navigation bar to shift the entire page between dark and light themes seamlessly.
3. **Secret Easter Egg**:
   - **Desktop**: Enter the legendary **Konami Code** sequence on your keyboard: `↑` `↑` `↓` `↓` `←` `→` `←` `→` `b` `a`.
   - **Mobile**: Click the Vantair logo (header or footer) **5 times** consecutively.
   - **Action**: Opens a retro green-screen command shell terminal. Type `help` to see commands (`matrix` mode, `diagnostics` info, or `exit`).

## Verification & Responsive Support
Tested and fully optimized for zero horizontal scroll at the following breakpoints:
- **390px** (Mobile)
- **430px** (Large Mobile)
- **768px** (Tablet)
- **1024px** (Desktop small)
- **1280px** (Desktop medium)
- **1440px** (Desktop large)

## Run Locally

To spin up the local hot-reloading development server:

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

To run a production-ready compilation:

```bash
# Verify Vite build output
npm run build
```
