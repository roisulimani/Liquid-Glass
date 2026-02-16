import type { PerformanceMode } from '../types';

export interface QualityProfile {
  renderScale: number;
  distortionEnabled: boolean;
  animationRate: number;
}

export function resolveQualityProfile(mode: PerformanceMode): QualityProfile {
  switch (mode) {
    case 'quality':
      return { renderScale: 1, distortionEnabled: true, animationRate: 1 };
    case 'balanced':
      return { renderScale: 0.85, distortionEnabled: true, animationRate: 0.75 };
    case 'performance':
      return { renderScale: 0.65, distortionEnabled: false, animationRate: 0.5 };
    case 'adaptive':
    default:
      return { renderScale: 0.8, distortionEnabled: true, animationRate: 0.7 };
  }
}
