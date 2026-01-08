export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">AI Founder Companion</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to your AI-powered startup companion. This project includes
          Vercel Web Analytics to help you track your application&apos;s performance
          and user behavior.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Analytics is automatically enabled with the{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              @vercel/analytics
            </code>{" "}
            package
          </li>
          <li>Deploy to Vercel to start collecting data</li>
          <li>View your analytics in the Vercel dashboard</li>
        </ul>
      </div>
    </main>
  );
}
