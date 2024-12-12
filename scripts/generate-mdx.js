const fs = require('fs');
const path = require('path');

const pages = [
  'introduction',
  'quickstart', 
  'development',
  'essentials/markdown',
  'essentials/code',
  'essentials/images',
  'essentials/settings',
  'essentials/navigation',
  'essentials/reusable-snippets',
  'api-reference/introduction',
  'api-reference/endpoint/get',
  'api-reference/endpoint/create',
  'api-reference/endpoint/delete'
];

function createMDX(pagePath) {
  const fullPath = path.join(__dirname, '..', `${pagePath}.mdx`);
  const dirPath = path.dirname(fullPath);
  
  // Tạo thư mục nếu chưa tồn tại
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const mdxContent = `---
title: ${pagePath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
description: 'Documentation for ${pagePath.split('/').pop()}'
---

# ${pagePath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

This is a placeholder page for ${pagePath}. Replace this content with your actual documentation.

<CardGroup cols={2}>
  <Card
    title="Learn More"
    icon="book"
    href="/introduction"
  >
    Go back to introduction
  </Card>
  <Card
    title="Next Page"
    icon="arrow-right"
    href="/quickstart"
  >
    Continue to quickstart
  </Card>
</CardGroup>`;

  fs.writeFileSync(fullPath, mdxContent);
  console.log(`Created MDX: ${pagePath}.mdx`);
}

pages.forEach(createMDX);
console.log('All MDX files generated successfully!');
