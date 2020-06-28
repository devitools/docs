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
      link: '/pt/guide/',
    },
    {
      text: 'Frontend',
      items: [
        {
          text: 'Começar',
          link: '/pt/frontend/'
        },
        {
          text: 'Vue.js',
          items: [
            {
              text: 'Quasar',
              link: '/pt/frontend/quasar'
            },
            {
              text: 'Material UI',
              link: '/pt/frontend/material-ui'
            }
          ]
        },
        {
          text: 'React',
          items: [
            {
              text: 'Vuetify',
              link: '/pt/frontend/vuetify'
            }
          ]
        }
      ]
    },
    {
      text: 'Backend',
      items: [
        {
          text: 'Começar',
          link: '/pt/backend/'
        },
        {
          text: 'PHP',
          items: [
            {
              text: 'Laravel',
              link: '/pt/backend/laravel'
            },
            {
              text: 'Symfony',
              link: '/pt/backend/symfony'
            }
          ]
        },
        {
          text: 'Node',
          items: [
            {
              text: 'Express',
              link: '/pt/backend/express'
            },
            {
              text: 'Fastify',
              link: '/pt/backend/fastify'
            },
            {
              text: 'Restify',
              link: '/pt/backend/restify'
            }
          ]
        }
      ]
    },
    {
      text: 'Devitools',
      link: 'https://devi.tools'
    }
  ],
  sidebar: [
    {
      title: 'Guia',
      collapsable: false,
      children: [
        '/pt/guide/',
        '/pt/guide/general-concepts',
        '/pt/guide/under-the-hood',
        '/pt/guide/how-to-contribute',
      ]
    },
    {
      title: 'Frontend',
      collapsable: false,
      children: [
        '/pt/frontend/',
        {
          title: 'Estrutura',
          path: '/pt/frontend/structure/',
          children: [
            '/pt/frontend/structure/',
            '/pt/frontend/structure/creating-layouts',
            '/pt/frontend/structure/setup',
            '/pt/frontend/structure/domain',
            '/pt/frontend/structure/settings',
            '/pt/frontend/structure/services',
            '/pt/frontend/structure/schemas',
            '/pt/frontend/structure/views',
            '/pt/frontend/structure/routes',
            '/pt/frontend/structure/scopes-and-positions',
            '/pt/frontend/structure/fields',
            '/pt/frontend/structure/actions',
          ]
        },
        '/pt/frontend/getting-started/',
        '/pt/frontend/customize/',
      ]
    }
  ]
}

module.exports = locale
