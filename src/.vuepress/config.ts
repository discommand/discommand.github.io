import { defaultTheme } from 'vuepress'

export default {
  title: 'discommand',
  description: 'easy discord.js command handler.',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#b8ef7f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  theme: defaultTheme({
    repo: 'discommand/discommand',
    logo: '/logo.png',
    logoDark: '/logo.png',
    home: '/',
    editLink: true,
    docsDir: 'src',
    docsRepo: 'discommand/discommand.github.io',
    editLinkText: 'Edit this page',
    lastUpdated: true,
    navbar: [
      {
        text: 'Docs',
        link: '/docs/',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Docs',
          children: [
            '/docs/README.md',
            '/docs/Example.md',
            '/docs/types.md',
            '/docs/change-in-v11.md',
          ],
        },
      ],
    },
    sidebarDepth: 1,
  }),
}
