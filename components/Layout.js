import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import mintlifyConfig from '../mint.json';

export default function Layout({ children }) {
  const { 
    name, 
    logo, 
    favicon, 
    colors, 
    topbarLinks, 
    topbarCtaButton, 
    tabs,
    anchors 
  } = mintlifyConfig;

  return (
    <div className="min-h-screen" style={{
      '--primary-color': colors.primary,
      '--light-color': colors.light,
      '--dark-color': colors.dark,
    }}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href={favicon} />
        <style>{`
          :root {
            --primary-color: ${colors.primary};
            --light-color: ${colors.light};
            --dark-color: ${colors.dark};
          }
        `}</style>
      </Head>

      {/* Topbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img 
              src={logo.dark} 
              alt={`${name} Logo`} 
              className="h-10 mr-4" 
            />
            <div className="flex space-x-4">
              {tabs.map((tab, index) => (
                <Link 
                  key={index} 
                  href={tab.url} 
                  className="text-gray-700 hover:text-primary"
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {topbarLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-700 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            {topbarCtaButton && (
              <a 
                href={topbarCtaButton.url} 
                className="bg-primary text-white px-4 py-2 rounded"
              >
                {topbarCtaButton.name}
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer with Anchors */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto flex justify-center space-x-8">
          {anchors.map((anchor, index) => (
            <a 
              key={index} 
              href={anchor.url} 
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <span className="mr-2">{anchor.name}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
