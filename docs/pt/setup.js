const locale = {
  // text for the language dropdown
  selectText: 'Idiomas',
  // label for this locale in the language dropdown
  label: 'Português',
  // Aria Label for locale in the dropdown
  ariaLabel: 'Idiomas',
  // text for the edit-on-github link
  editLinkText: 'Edite esta página no GitHub',
  // config for Service Worker
  serviceWorker: {
    updatePopup: {
      message: 'Conteúdo novo disponível.',
      buttonText: 'Atualizar'
    }
  },
  algolia: {},
  nav: [
    {
      text: 'Guia',
      link: '/en/guide/',
    },
    {
      text: 'Configuração',
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
        title: 'Guia',
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
