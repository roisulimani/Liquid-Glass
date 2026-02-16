export type LiquidIntensity = 'low' | 'medium' | 'high';

export type AccessibilityMode = 'auto' | 'standard' | 'enhanced';

export type PerformanceMode = 'adaptive' | 'quality' | 'balanced' | 'performance';

export interface LiquidSurfaceProps {
  depth?: number;
  blurStrength?: number;
  distortionStrength?: number;
  noiseLevel?: number;
  intensity?: LiquidIntensity;
  interactive?: boolean;
  adaptiveContrast?: boolean;
  accessibilityMode?: AccessibilityMode;
  performanceMode?: PerformanceMode;
}
