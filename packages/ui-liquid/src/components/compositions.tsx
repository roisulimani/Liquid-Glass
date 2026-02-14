import React from 'react';
import { LiquidSurface, LiquidSurfaceProps } from './LiquidSurface';

type BasicProps = Omit<LiquidSurfaceProps<'div'>, 'as'>;

export function LiquidTopBar(props: BasicProps) {
  return <LiquidSurface as="header" variant="bar" blur={2} radius="md" {...props} />;
}

export function LiquidTabBar(props: BasicProps) {
  return <LiquidSurface as="nav" variant="bar" blur={2} radius="lg" {...props} />;
}

export function LiquidSidebar(props: BasicProps) {
  return <LiquidSurface as="aside" variant="bar" blur={1} radius="lg" {...props} />;
}

export function LiquidCard(props: BasicProps) {
  return <LiquidSurface variant="surface" elevation={1} radius="md" {...props} />;
}

export function LiquidPanel(props: BasicProps) {
  return <LiquidSurface variant="surface" elevation={2} radius="lg" {...props} />;
}

export function LiquidPopover(props: BasicProps) {
  return <LiquidSurface variant="popover" blur={2} elevation={2} radius="md" {...props} />;
}

export function LiquidModal(props: BasicProps) {
  return <LiquidSurface variant="overlay" blur={3} elevation={3} radius="lg" {...props} />;
}

type ButtonProps = Omit<LiquidSurfaceProps<'button'>, 'as'>;

export function LiquidButton(props: ButtonProps) {
  return <LiquidSurface as="button" type="button" interactive variant="surface" elevation={1} {...props} />;
}

export function LiquidIconButton(props: ButtonProps) {
  return <LiquidSurface as="button" type="button" interactive variant="surface" radius="sm" {...props} />;
}

export function LiquidInput(props: Omit<LiquidSurfaceProps<'label'>, 'as'> & { inputProps?: React.InputHTMLAttributes<HTMLInputElement> }) {
  const { inputProps, children, ...rest } = props;
  return (
    <LiquidSurface as="label" variant="surface" elevation={0} radius="sm" {...rest}>
      {children}
      <input {...inputProps} data-liquid-input />
    </LiquidSurface>
  );
}

export function LiquidSegmentedControl(props: BasicProps) {
  return <LiquidSurface variant="surface" elevation={1} radius="sm" interactive {...props} />;
}

export function LiquidToggle(props: ButtonProps) {
  return <LiquidSurface as="button" type="button" variant="surface" radius="sm" interactive {...props} />;
}

export function LiquidSlider(props: Omit<LiquidSurfaceProps<'label'>, 'as'> & { inputProps?: React.InputHTMLAttributes<HTMLInputElement> }) {
  const { inputProps, children, ...rest } = props;
  return (
    <LiquidSurface as="label" variant="surface" radius="sm" {...rest}>
      {children}
      <input type="range" {...inputProps} data-liquid-slider />
    </LiquidSurface>
  );
}
