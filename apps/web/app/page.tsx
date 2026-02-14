import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Liquid Glass Demo</h1>
      <Link href="/liquid-gallery">Open liquid gallery</Link>
    </main>
  );
}
