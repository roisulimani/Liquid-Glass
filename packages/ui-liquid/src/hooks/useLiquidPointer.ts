import { MutableRefObject, useEffect } from 'react';

export function useLiquidPointer<T extends HTMLElement>(params: {
  enabled?: boolean;
  ref: MutableRefObject<T | null>;
}) {
  const { enabled = true, ref } = params;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) {
      return;
    }

    let raf = 0;
    const state = { x: 50, y: 50, intensity: 0 };

    const flush = () => {
      el.style.setProperty('--lg-x', `${state.x}%`);
      el.style.setProperty('--lg-y', `${state.y}%`);
      el.style.setProperty('--lg-intensity', `${state.intensity}`);
      raf = 0;
    };

    const queue = () => {
      if (!raf) raf = requestAnimationFrame(flush);
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      state.x = ((event.clientX - rect.left) / rect.width) * 100;
      state.y = ((event.clientY - rect.top) / rect.height) * 100;
      state.intensity = 1;
      queue();
    };

    const onLeave = () => {
      state.x = 50;
      state.y = 50;
      state.intensity = 0;
      queue();
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, ref]);
}
