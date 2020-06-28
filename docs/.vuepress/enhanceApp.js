/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  router.beforeEach((to, from, next) => {
    if (to.path !== '/') {
      next()
      return
    }
    const pieces = from.path.split('/')
    let lang = '/pt'
    if (pieces.length > 2) {
      lang = `/${pieces[1]}`
    }
    next(lang)
  })
}
