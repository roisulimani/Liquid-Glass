import React from 'react';
import { useAccessibilityPreferences } from '../hooks/useAccessibilityPreferences';
import { resolveQualityProfile } from '../system/quality';
import type { LiquidSurfaceProps } from '../types';

interface Props extends LiquidSurfaceProps {
  className?: string;
  children?: React.ReactNode;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function LiquidSurface({
  depth = 2,
  blurStrength = 0.35,
  distortionStrength = 0.2,
  noiseLevel = 0.08,
  interactive = false,
  adaptiveContrast = true,
  accessibilityMode = 'auto',
  performanceMode = 'adaptive',
  className,
  children,
}: Props): JSX.Element {
  const { reduceMotion, reduceTransparency } = useAccessibilityPreferences();
  const quality = resolveQualityProfile(performanceMode);

  const transparencyRestricted = accessibilityMode === 'enhanced' || reduceTransparency;
  const motionRestricted = accessibilityMode === 'enhanced' || reduceMotion;

  const computedBlur = transparencyRestricted ? 0 : clamp(blurStrength * 24, 0, 30);
  const computedDistortion =
    transparencyRestricted || motionRestricted || !quality.distortionEnabled
      ? 0
      : clamp(distortionStrength, 0, 1);

  const style: React.CSSProperties = {
    backdropFilter: computedBlur > 0 ? `blur(${computedBlur}px)` : 'none',
    WebkitBackdropFilter: computedBlur > 0 ? `blur(${computedBlur}px)` : 'none',
    borderRadius: `${12 + depth * 2}px`,
    border: '1px solid rgba(255, 255, 255, 0.26)',
    background: transparencyRestricted
      ? 'rgba(20, 24, 30, 0.92)'
      : 'linear-gradient(140deg, rgba(255,255,255,0.24), rgba(255,255,255,0.09))',
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,${adaptiveContrast ? 0.35 : 0.2}),
      inset 0 -10px 20px rgba(255,255,255,0.04),
      0 ${6 + depth * 3}px ${18 + depth * 6}px rgba(0,0,0,0.25)
    `,
    transition: motionRestricted ? 'none' : 'transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    transform: interactive && !motionRestricted ? 'translateZ(0)' : undefined,
    ['--liquid-distortion' as string]: computedDistortion.toString(),
    ['--liquid-noise-level' as string]: clamp(noiseLevel * quality.animationRate, 0, 1).toString(),
  };

  return (
    <div className={className} style={style} data-liquid-surface="true">
      {children}
    </div>
  );
}
