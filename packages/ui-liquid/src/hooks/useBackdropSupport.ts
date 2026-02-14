import { useEffect, useState } from 'react';

export function useBackdropSupport() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const css = window.CSS;
    const ok =
      typeof css?.supports === 'function' &&
      (css.supports('backdrop-filter: blur(1px)') || css.supports('-webkit-backdrop-filter: blur(1px)'));
    setSupported(ok);
  }, []);

  return supported;
}
