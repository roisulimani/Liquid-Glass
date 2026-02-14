import '@repo/ui-liquid/styles/liquid.tokens.css';
import '@repo/ui-liquid/styles/liquid.base.css';
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
