# Vantair — Decisions

## 1. Why this approach?
I chose a React + Vite single-page implementation because the product preview contains interactive UI states (switching between metrics, expanding an AI Insight anomaly detail pane, and flipping active automations) that benefit greatly from declarative rendering.

For the visual design, I established a custom, HSL-based styling system rather than Tailwind to maintain full fine-grained control over spacing, typography (`Outfit` display font for geometric strength, `Inter` for legibility), and theme synchronization. Light and dark modes are completely unified using HSL custom variables. 

To satisfy the "show the product" requirement, the page demonstrates real-world scenario data: a mobile conversion drop issue where the UI traces the pipeline from **Signal** (Mobile conversion drop) → **Explanation** (iOS vs Android Safari latency checkouts) → **Action** (rolling back styles optimizations).

## 2. Trade-off under the time limit
I prioritized front-end polish, responsive layout resilience (testing extensively at 390px mobile and 1440px desktop to ensure zero horizontal scroll), keyboard focus contrast, and interactive animations (spline drawing and floating card reveal) over implementing a full SaaS backend. Rather than a static mock screenshot, the dashboard contains fully active tabs and toggles. Given a real week, I would write automated visual regression tests and integrate a mock WebSocket client to feed live business signals to the bento-grid decision stream.

## 3. AI usage
AI was used to bootstrap CSS structures, generate the core spline math coordinate layout for the SVG charts, and scaffold the boilerplate canvas drawing for the falling characters inside the retro Easter egg command-line interface. 

I manually reviewed, structured, and customized the code line-by-line:
- Rewrote layout grids to enforce strict constraints preventing horizontal overflows.
- Designed HSL pairings to meet contrast standards.
- Designed custom, honest copy focusing solely on Vantair's functionality (eliminating all fake reviews or founder badges).
- Built the Konami keyboard detector and linked it to the diagnostic CLI terminal.

Every line of code in this repository can be explained and defended during the interview.
