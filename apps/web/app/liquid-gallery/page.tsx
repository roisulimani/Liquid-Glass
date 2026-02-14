'use client';

import {
  LiquidButton,
  LiquidCard,
  LiquidIconButton,
  LiquidInput,
  LiquidModal,
  LiquidPanel,
  LiquidPopover,
  LiquidSegmentedControl,
  LiquidSidebar,
  LiquidSlider,
  LiquidTabBar,
  LiquidToggle,
  LiquidTopBar,
  useTheme,
} from '@repo/ui-liquid';

export default function LiquidGalleryPage() {
  const { theme, setTheme } = useTheme('light');

  return (
    <main className="gallery">
      <LiquidTopBar interactive className="row" role="banner">
        <strong>Liquid Top Bar</strong>
        <LiquidToggle onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Theme: {theme}
        </LiquidToggle>
      </LiquidTopBar>

      <div className="row">
        <LiquidSidebar className="stack" style={{ width: '260px' }}>
          <span>Sidebar chrome</span>
          <LiquidButton>New item</LiquidButton>
        </LiquidSidebar>

        <div className="stack" style={{ flex: 1 }}>
          <LiquidTabBar className="row">
            <LiquidSegmentedControl>Overview</LiquidSegmentedControl>
            <LiquidSegmentedControl>Activity</LiquidSegmentedControl>
            <LiquidSegmentedControl>Settings</LiquidSegmentedControl>
          </LiquidTabBar>

          <LiquidCard interactive>
            <span>Surface card with pointer-reactive specular highlight.</span>
          </LiquidCard>

          <LiquidPanel>
            <LiquidInput inputProps={{ placeholder: 'Type inside glass input' }}>Input</LiquidInput>
            <LiquidSlider inputProps={{ defaultValue: 30 }}>
              <span>Volume</span>
            </LiquidSlider>
          </LiquidPanel>

          <div className="row">
            <LiquidButton>Primary Action</LiquidButton>
            <LiquidIconButton aria-label="Favorite">★</LiquidIconButton>
            <LiquidPopover>Popover Layer</LiquidPopover>
            <LiquidModal>Modal Layer</LiquidModal>
          </div>
        </div>
      </div>
    </main>
  );
}
