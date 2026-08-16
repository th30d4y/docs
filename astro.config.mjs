import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'th30d4y Docs',
      description: 'Documentation for th30d4y open-source projects.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/th30d4y',
        },
      ],
      sidebar: [
        { label: 'Introduction', slug: 'introduction' },
        { label: 'Getting Started', slug: 'getting-started' },
        { label: 'Installation', slug: 'installation' },
        { label: 'Usage', slug: 'usage' },
        {
          label: 'Projects',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'projects' },
            { label: 'ExecuTrace', slug: 'projects/executrace' },
            { label: 'BURP-AI', slug: 'projects/burp-ai' },
            { label: 'OpenLearnX', slug: 'projects/openlearnx' },
            { label: 'HAST-CMS', slug: 'projects/hast-cms' },
            { label: 'Aval', slug: 'projects/aval' },
          ],
        },
        { label: 'Development', slug: 'development' },
        { label: 'Contributing', slug: 'contributing' },
        { label: 'About', slug: 'about' },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
