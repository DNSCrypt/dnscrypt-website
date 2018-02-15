const path = require("path");

module.exports = {
  mode: "universal",
  plugins: ["~plugins/vuetify.js"],
  modules: ["@nuxtjs/markdownit"],

  css: [
    {
      src: path.join(__dirname, "assets/css/app.styl"),
      lang: "styl"
    }
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    html: true,
    typographer: true,
    use: ["markdown-it-container", "markdown-it-attrs" ,"markdown-it-anchor"]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "Official DNSCrypt website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Tools and protocols to improve DNS privacy, security and reliability." }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["~/plugins/vuetify.js"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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
