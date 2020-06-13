const path = require('path');

module.exports = {
  mode: 'universal',
  plugins: ['~plugins/vuetify.js', '~plugins/ymap.js'],
  modules: ['@nuxtjs/markdownit'],

  css: [{src: path.join(__dirname, 'assets/css/app.styl'), lang: 'styl'}],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    typographer: true,
    use: ['markdown-it-container', 'markdown-it-attrs', 'markdown-it-anchor']
  },

  /*
  ** Headers of the page
  */
  head: {
    title:
        'DNSCrypt v2 - Official Project Home Page - Improving DNS security since 2011',
    htmlAttrs: {lang: 'en'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {
        hid: 'description',
        name: 'description',
        content:
            'Download our free DNS encryption software, discover DoH and DNSCrypt servers, and read more about our DNS improvements for privacy and security.'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
