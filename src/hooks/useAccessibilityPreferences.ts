import { useEffect, useState } from 'react';

interface AccessibilityPreferences {
  reduceMotion: boolean;
  reduceTransparency: boolean;
}

function getInitialPreferences(): AccessibilityPreferences {
  if (typeof window === 'undefined') {
    return { reduceMotion: false, reduceTransparency: false };
  }

  return {
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    reduceTransparency: window.matchMedia('(prefers-reduced-transparency: reduce)').matches,
  };
}

export function useAccessibilityPreferences(): AccessibilityPreferences {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(getInitialPreferences);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const transparencyQuery = window.matchMedia('(prefers-reduced-transparency: reduce)');

    const update = () => {
      setPreferences({
        reduceMotion: motionQuery.matches,
        reduceTransparency: transparencyQuery.matches,
      });
    };

    motionQuery.addEventListener('change', update);
    transparencyQuery.addEventListener('change', update);

    return () => {
      motionQuery.removeEventListener('change', update);
      transparencyQuery.removeEventListener('change', update);
    };
  }, []);

  return preferences;
}
