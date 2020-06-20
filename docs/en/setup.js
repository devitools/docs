const locale = {
  // text for the language dropdown
  selectText: 'Languages',
  // label for this locale in the language dropdown
  label: 'English',
  // Aria Label for locale in the dropdown
  ariaLabel: 'Languages',
  // text for the edit-on-github link
  editLinkText: 'Edit this page on GitHub',
  // config for Service Worker
  serviceWorker: {
    updatePopup: {
      message: 'New content is available.',
      buttonText: 'Refresh'
    }
  },
  // algolia docsearch options for current locale
  algolia: {},
  nav: [
    {
      text: 'Guide',
      link: '/en/guide/',
    },
    {
      text: 'Config',
      link: '/en/config/'
    },
    {
      text: 'Devitools',
      link: 'https://devi.tools'
    }
  ],
  sidebar: {
    '/en/guide/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'using-vue',
        ]
      }
    ],
  },
}

module.exports = locale
