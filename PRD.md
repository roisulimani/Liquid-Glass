# Liquid Glass UI Library – Product Requirements Document

Version: 1.1  
Date: 2026-02-16

## 1) Vision

Create a production-grade React component library that simulates liquid material behavior (depth, refraction, edge scattering, inertia) rather than static "glassmorphism" styling.

## 2) Product pillars

1. **Material realism**: physically-inspired optics and motion
2. **Performance discipline**: adaptive quality and frame stability
3. **Accessibility first**: contrast, transparency, and motion adaptation
4. **Composable API**: reusable primitives with typed configuration
5. **Enterprise readiness**: SSR-safe, tree-shakeable, testable

## 3) Rendering architecture

### Mode A — Full Shader Mode

- WebGL pipeline with offscreen framebuffer
- Distortion + refraction sampling
- Animated low-amplitude noise field
- Fresnel-informed edge highlights

### Mode B — Optimized Mode

- Lower render target scale
- Cached distortion maps
- Reduced animation frequency and quality tiers

### Mode C — Accessibility Mode

- Solid adaptive surfaces
- No distortion or animated blur
- Preserved component shape, spacing, and semantics

## 4) Runtime adaptation strategy

- Motion reduction: disable micro-distortion/parallax and use gentler springs
- Transparency reduction: force solid adaptive materials
- Contrast enforcement: strengthen overlays and edge tint for AA thresholds
- Device adaptation: cap resolution and effect stack on constrained GPUs

## 5) Component roadmap (Phase 1)

- `LiquidSurface`
- `LiquidCard`
- `LiquidButton`
- `LiquidTabs`
- `LiquidNavbar`
- `LiquidModal`
- `LiquidPopover`
- `LiquidSheet`
- `LiquidSegmentedControl`
- `LiquidDock`

## 6) Performance targets

- 120fps target on high-end devices
- 60fps baseline on mid-tier devices
- Frame budget target: < 3ms render work on M1-class hardware

## 7) API baseline

```tsx
<LiquidSurface
  depth={3}
  blurStrength={0.3}
  distortionStrength={0.2}
  noiseLevel={0.1}
  adaptiveContrast
  accessibilityMode="auto"
  performanceMode="adaptive"
  interactive
/>
```

## 8) Implementation phases

1. **Core**: renderer orchestration, quality manager, accessibility controller
2. **Primitives**: `LiquidSurface` + shared interaction hooks
3. **Components**: Phase 1 suite
4. **Validation**: perf harness, visual regression, a11y audits
5. **Release**: docs, playground, versioned migration notes

## 9) Non-goals

- Decorative blur-only UI kits
- Heavy general-purpose 3D runtime
- Unbounded shader experimentation without production constraints
