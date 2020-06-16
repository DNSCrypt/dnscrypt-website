const path = require("path");

module.exports = {
  mode: "universal",
  plugins: ["~plugins/vuetify.js", "~plugins/ymap.js"],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/sitemap"],

  sitemap: {
    hostname: "https://dnscrypt.info",
    gzip: true
  },

  css: [{
    src: path.join(__dirname, "assets/css/app.styl"),
    lang: "styl"
  }],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    html: true,
    typographer: true,
    use: ["markdown-it-container", "markdown-it-attrs", "markdown-it-anchor"]
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "DNSCrypt version 2 - Official Project Home Page",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "New home of the DNSCrypt project, now implementing multiple protocols to improve DNS security. Download official DNSCrypt & DoH servers and clients here."
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
