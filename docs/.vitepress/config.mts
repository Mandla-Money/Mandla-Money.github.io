import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mandla Money Wallet",
  description: "Mandla Money digital wallet",
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
          {text: 'Wallet General Info', link: '/general'},
          {text: 'Wallet Setup and Usage', link: '/setup'},
          {text: 'Wallet Commands', link: '/commands'},
          {text: 'Troubleshooting', link: '/troubleshooting'},
          {text: 'Glossary of Terms', link: '/glossary'}
        ]
      },
      {
        text: 'Mandla Dashboard',
        base: '/admin',
        items: [
          {text: 'Overview', link: '/intro'},
          {text: 'Admin Menu', link: '/admin-menu'},
          {text: 'User Stats', link: '/user-stats'},
          {text: 'XRPL Operations', link: '/xrpl-operations'},
          {
            text: 'XRPL DEX',
            base: '/admin/dex',
            items: [
              {text: 'XRPL DEX', link: '/xrpl-dex'},
              {text: 'XRPL DEX Liquidity', link: '/xrpl-dex-liquidity'}
            ]
          },
          {
            text: 'Asset Limits',
            base: '/admin/asset-limits',
            items: [
              {text: 'Configuration', link: '/configuration'},
              {text: 'Notifications', link: '/notifications'},
            ]
          }

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
