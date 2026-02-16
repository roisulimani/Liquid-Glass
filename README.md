# Liquid Glass UI

A fresh-start React UI library for iOS26-inspired Liquid Glass interfaces.

## Current status

This repository was intentionally reset to start from zero and now contains only a clean foundation:

- Vision and requirements baseline
- Rendering architecture plan (shader-first + accessibility-safe fallbacks)
- Initial TypeScript API contracts
- First `LiquidSurface` primitive with adaptive accessibility behavior

## Next milestones

1. WebGL renderer core with distortion and refraction maps
2. Shared interaction physics engine (spring/inertia)
3. Phase 1 components (`LiquidCard`, `LiquidButton`, `LiquidTabs`, etc.)
4. Benchmarks and accessibility audits

## Accessibility principles

- Respect `prefers-reduced-motion`
- Respect `prefers-reduced-transparency`
- Preserve semantic structure across rendering modes
- Maintain WCAG AA minimum contrast targets
