const path = require("path");

module.exports = {
  plugins: ["~plugins/vuetify.js", "~plugins/ymap.js"],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/sitemap"],

  target: 'static',

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
    titleTemplate: "%s | DNSCrypt",
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
    },
    // Open Graph meta tags
    {
      hid: "og:type",
      property: "og:type",
      content: "website"
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "DNSCrypt version 2 - Official Project Home Page"
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "New home of the DNSCrypt project, now implementing multiple protocols to improve DNS security. Download official DNSCrypt & DoH servers and clients here."
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://dnscrypt.info"
    },
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: "DNSCrypt"
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://dnscrypt.info/assets/dnscrypt.png"
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "1200"
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "630"
    },
    // Twitter Card meta tags
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "DNSCrypt version 2 - Official Project Home Page"
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "New home of the DNSCrypt project, now implementing multiple protocols to improve DNS security. Download official DNSCrypt & DoH servers and clients here."
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "https://dnscrypt.info/assets/dnscrypt.png"
    },
    // Additional SEO meta tags
    {
      name: "robots",
      content: "index, follow"
    },
    {
      name: "author",
      content: "DNSCrypt Project"
    },
    {
      name: "theme-color",
      content: "#3B8070"
    },
    {
      name: "keywords",
      content: "DNSCrypt, DNS-over-HTTPS, DoH, DNS-over-TLS, DoT, DNS encryption, secure DNS, DNS privacy, DNS security, encrypted DNS"
    },
    {
      name: "msapplication-TileColor",
      content: "#3B8070"
    }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://dnscrypt.info"
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
