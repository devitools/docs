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
  algolia: {},
  nav: [
    {
      text: 'Guide',
      link: '/en/guide/',
    },
    {
      text: 'Frontend',
      items: [
        {
          text: 'Get Started',
          link: '/en/frontend/'
        },
        {
          text: 'Vue.js',
          items: [
            {
              text: 'Quasar',
              link: '/en/frontend/quasar'
            },
            {
              text: 'Material UI',
              link: '/en/frontend/material-ui'
            }
          ]
        },
        {
          text: 'React',
          items: [
            {
              text: 'Vuetify',
              link: '/en/frontend/vuetify'
            }
          ]
        }
      ]
    },
    {
      text: 'Backend',
      items: [
        {
          text: 'Get Started',
          link: '/en/backend/'
        },
        {
          text: 'PHP',
          items: [
            {
              text: 'Laravel',
              link: '/en/backend/laravel'
            },
            {
              text: 'Symfony',
              link: '/en/backend/symfony'
            }
          ]
        },
        {
          text: 'Node',
          items: [
            {
              text: 'Express',
              link: '/en/backend/express'
            },
            {
              text: 'Fastify',
              link: '/en/backend/fastify'
            },
            {
              text: 'Restify',
              link: '/en/backend/restify'
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
      title: 'Guide',
      collapsable: false,
      children: [
        '/en/guide/',
        '/en/guide/general-concepts',
        '/en/guide/under-the-hood',
        '/en/guide/how-to-contribute',
      ]
    },
    {
      title: 'Frontend',
      collapsable: false,
      children: [
        '/en/frontend/',
        {
          title: 'Structure',
          path: '/en/frontend/structure/',
          children: [
            '/en/frontend/structure/',
            '/en/frontend/structure/creating-layouts',
            '/en/frontend/structure/setup',
            '/en/frontend/structure/domain',
            '/en/frontend/structure/settings',
            '/en/frontend/structure/services',
            '/en/frontend/structure/schemas',
            '/en/frontend/structure/views',
            '/en/frontend/structure/routes',
            '/en/frontend/structure/scopes-and-positions',
            '/en/frontend/structure/fields',
            '/en/frontend/structure/actions',
          ]
        },
        '/en/frontend/getting-started/',
        '/en/frontend/customize/',
      ]
    }
  ]
}

module.exports = locale
