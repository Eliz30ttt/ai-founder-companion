import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to AI Founder Companion</h1>
      <p>Your AI-powered companion for founders and entrepreneurs.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Getting Started</h2>
        <p>This application is equipped with Vercel Web Analytics to track user interactions and page views.</p>
        
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Analytics Enabled</h3>
        <p>
          This application uses Vercel Web Analytics to understand how visitors interact with your site.
          Analytics data is automatically collected and can be viewed in your Vercel dashboard.
        </p>
      </section>
    </main>
  );
}
