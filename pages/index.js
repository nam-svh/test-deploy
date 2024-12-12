import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Mintlify Documentation</title>
        <meta name="description" content="Comprehensive documentation for your project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your Documentation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive guides and get started quickly
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p className="text-gray-600 mb-4">Learn the basics and set up your project</p>
              <Link href="/introduction" className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <p className="text-gray-600 mb-4">Detailed documentation for all API endpoints</p>
              <Link href="/api" className="text-blue-600 hover:underline">
                Explore API
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <p className="text-gray-600 mb-4">Real-world use cases and code snippets</p>
              <Link href="/examples" className="text-blue-600 hover:underline">
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600">
          {new Date().getFullYear()} Your Project. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
