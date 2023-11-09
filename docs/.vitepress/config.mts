import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mandla Money",
  description: "Digital wallet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: 'https://mandla.money/web/'},
      {text: 'Docs', link: '/wallet/intro'}
    ],

    sidebar: [
      {
        text: 'Mandla Wallet',
        base: '/wallet',
        items: [
          {text: 'Wallet Overview', link: '/intro'},
          {text: 'Wallet Setup and Usage', link: '/setup'},
          {text: 'Wallet Commands', link: '/commands'},
          {text: 'Troubleshooting', link: '/troubleshooting'},
          {text: 'Glossary of Terms', link: '/glossary'}
        ]
      },
      {
        text: 'Mandla Wallet Admin',
        base: '/admin',
        items: [
          {text: 'Admin Overview', link: '/intro'},
          {text: 'User Statistics Dashboard', link: '/user-statistics-dashboard'},
          {text: 'XRPL Operations Dashboard', link: '/xrpl-operations-dashboard'},
          {text: 'XRPL DEX Dashboard', link: '/xrpl-dex-dashboard'},
          {text: 'XRPL DEX Liquidity Dashboard', link: '/xrpl-dex-liquidity-dashboard'}
        ]
      },
      {
        text: 'About Us',
        link: '/about'
      }, {
        text: 'Contact Us',
        link: '/contact-us'
      }, {
        text: 'FAQ',
        link: '/faq'
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Mandla-Money'}
    ]
  }
})
