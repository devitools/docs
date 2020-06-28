const en = require('../en/setup')
const pt = require('../pt/setup')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Devitools',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4C80C9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Devitools',
      description: 'Create admin panels quickly, efficiently and standardized'
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Devitools',
      description: 'Crie painéis de controle de forma rápida, eficiente e padronizada'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/devitools/docs',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: true,
    locales: {
      '/en/': en,
      '/pt/': pt
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
