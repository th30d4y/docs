import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'th30d4y Docs',
      description: 'Documentation for th30d4y open-source projects.',
      logo: {
        src: './src/assets/logo.png',
        alt: 'th30d4y',
      },
      favicon: '/favicon.png',
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
            { label: 'website (0d4y.dev)', slug: 'projects/website' },
            { label: 'ExecuTrace', slug: 'projects/executrace' },
            { label: 'BURP-AI', slug: 'projects/burp-ai' },
            { label: 'OpenLearnX', slug: 'projects/openlearnx' },
            { label: 'HAST-CMS', slug: 'projects/hast-cms' },
            { label: 'Aval', slug: 'projects/aval' },
            { label: 'IOT-Malware', slug: 'projects/iot-malware' },
            { label: 'IP', slug: 'projects/ip' },
            { label: 'Report', slug: 'projects/report' },
            {
              label: 'Archived',
              collapsed: true,
              items: [
                { label: 'automation-hub', slug: 'projects/automation-hub' },
                { label: '0Commits', slug: 'projects/0commits' },
              ],
            },
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
