# Vantair — Decisions

1. Why this ingestion strategy over the obvious alternative you rejected?
I went with this approach because it was easier to implement and gave me enough control over the data flow. I did consider the other approach, but it seemed like more setup and complexity than I needed for this assignment. Since the main goal was to get a working solution within the given time, I chose the simpler approach rather than adding complexity that wasn't really necessary.

2. One trade-off you made under the time limit, and what you’d do with a real week.
The biggest trade-off was that I focused more on getting the main functionality working instead of spending a lot of time on edge cases and polishing. I wanted to make sure the complete flow was working first. If I had a full week, I would test it with more types of inputs, improve the error handling, optimize a few parts, and spend more time cleaning up the code and UI.

3. Where did you use AI tools, and what did you personally verify or change afterward?
I used AI mainly when I was stuck with implementation or needed help understanding an approach. I also used it for some debugging and to get ideas for improving the solution. But I didn't just copy everything it suggested. I ran the code myself, checked whether the output was actually correct, and changed parts that didn't fit my implementation. The final decisions about how I structured and used the solution were mine.

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
