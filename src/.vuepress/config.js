module.exports = {
    // Site metadata
    title: "Recap Time",
    description: "Recaps, the Medium newsletters, streams and more!",

    /*
        When forked the website, make sure to define the
        VUEPRESS_PROD_BUILD_BASE into your GH Pages build URL
        (e.g: https://yourusername.github.io/recaptime.github.io should be
            recaptime.github.io).
    */
    base: process.env.VUEPRESS_PROD_BUILD_BASE || "/",

    // https://vuepress.vuejs.org/plugin/official for list
    plugins: ['@vuepress/back-to-top'],

    // Theme config
    themeConfig: {
        repo: 'RecapTime/recaptime.github.io',
        editLinks: true,

        locales: {
            '/': {
                label: "English",
                nav: require("./nav/en")
            }
        }
  }
}