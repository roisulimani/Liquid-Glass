import React, { CSSProperties, ElementType, forwardRef, useMemo, useRef } from 'react';
import { useBackdropSupport } from '../hooks/useBackdropSupport';
import { useLiquidPointer } from '../hooks/useLiquidPointer';
import { useReducedMotion } from '../hooks/useReducedMotion';

type Blur = 1 | 2 | 3 | number;
type Radius = 'sm' | 'md' | 'lg' | number;

type TintValue = 'auto' | 'light' | 'dark' | { light: string; dark: string } | string;

export type LiquidSurfaceProps<C extends ElementType = 'div'> = {
  as?: C;
  variant?: 'surface' | 'popover' | 'bar' | 'overlay';
  elevation?: 0 | 1 | 2 | 3;
  interactive?: boolean;
  blur?: Blur;
  radius?: Radius;
  tint?: TintValue;
  border?: 'hairline' | 'highlight' | 'none';
  quality?: 'high' | 'medium' | 'low';
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'style' | 'children'>;

function blurValue(blur: Blur) {
  if (typeof blur === 'number' && blur > 3) return `${blur}px`;
  return `var(--lg-blur-${blur})`;
}

function radiusValue(radius: Radius) {
  if (typeof radius === 'number') return `${radius}px`;
  return `var(--lg-radius-${radius})`;
}

function tintStyle(tint: TintValue): CSSProperties {
  if (tint === 'auto') return {};
  if (tint === 'light') return { ['--lg-surface-tint' as string]: 'rgba(255,255,255,0.55)' };
  if (tint === 'dark') return { ['--lg-surface-tint' as string]: 'rgba(20,20,25,0.45)' };
  if (typeof tint === 'object') {
    return {
      ['--lg-surface-tint-light' as string]: tint.light,
      ['--lg-surface-tint-dark' as string]: tint.dark,
    };
  }
  return { ['--lg-surface-tint' as string]: tint };
}

const LiquidSurfaceBase = <C extends ElementType = 'div'>(
  {
    as,
    variant = 'surface',
    elevation = 1,
    interactive = false,
    blur = 1,
    radius = 'md',
    tint = 'auto',
    border = 'hairline',
    quality = 'high',
    className,
    style,
    children,
    ...rest
  }: LiquidSurfaceProps<C>,
  ref: React.Ref<Element>,
) => {
  const Comp = (as ?? 'div') as ElementType;
  const localRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const backdropSupported = useBackdropSupport();

  useLiquidPointer({
    ref: localRef,
    enabled: interactive && !reducedMotion && quality !== 'low',
  });

  const mergedStyle = useMemo(
    () => ({
      ...style,
      ...tintStyle(tint),
      ['--lg-blur' as string]: blurValue(blur),
      ['--lg-radius' as string]: radiusValue(radius),
    }),
    [blur, radius, style, tint],
  );

  return (
    <Comp
      {...rest}
      ref={(node: HTMLElement | null) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref && 'current' in ref) (ref as React.MutableRefObject<Element | null>).current = node;
      }}
      data-liquid="surface"
      data-variant={variant}
      data-elevation={elevation}
      data-interactive={interactive && !reducedMotion}
      data-quality={quality}
      data-border={border}
      data-backdrop={backdropSupported}
      className={className}
      style={mergedStyle}
    >
      <div data-layer="diffuse" />
      <div data-layer="specular" />
      <div data-layer="content">{children}</div>
    </Comp>
  );
};

export const LiquidSurface = forwardRef(LiquidSurfaceBase) as <C extends ElementType = 'div'>(
  props: LiquidSurfaceProps<C> & { ref?: React.Ref<Element> },
) => React.ReactElement;
