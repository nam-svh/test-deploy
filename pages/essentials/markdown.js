import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Custom Mintlify-like components
const Card = ({ title, icon, href, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-2">
      <span className="mr-2">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-2">{children}</p>
    <a href={href} className="text-primary hover:underline">Learn More</a>
  </div>
);

const CardGroup = ({ cols = 2, children }) => (
  <div className={`grid grid-cols-${cols} gap-4 my-4`}>
    {children}
  </div>
);

const mdxComponents = {
  h1: (props) => <h1 className="text-4xl font-bold text-gray-900 mb-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
  p: (props) => <p className="text-gray-600 mb-4" {...props} />,
  a: (props) => <a className="text-primary hover:underline" {...props} />,
  code: (props) => <code className="bg-gray-100 p-1 rounded text-sm" {...props} />,
  img: (props) => (
    <Image 
      {...props} 
      width={800} 
      height={400} 
      alt={props.alt || 'Hero Image'} 
      className={`w-full h-auto ${props.className}`} 
    />
  ),
  Card,
  CardGroup,
};

export default async function Page() {
  // Read MDX content
  const pagePath = path.join(process.cwd(), `${pagePath}.mdx`);
  const pageContent = fs.readFileSync(pagePath, 'utf8');

  // Compile MDX
  const { content } = await compileMDX({
    source: pageContent,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        {content}
      </MDXProvider>
    </div>
  );
}