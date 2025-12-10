<template>
  <v-toolbar fixed dark class="blue darken-2">
    <v-toolbar-title>
      <v-btn flat class="primary nav-img-btn" nuxt to="/">
        <img src="~/assets/dnscrypt-small.png" alt="DNSCrypt" height="42" />
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y open-on-hover>
      <v-list>
        <v-list-tile nuxt to="/">
          <v-list-tile-title>Encrypted DNS</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/implementations">
          <v-list-tile-title>Software</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/public-servers">
          <v-list-tile-title>DNSCrypt &amp; DoH servers</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/map">
          <v-list-tile-title>Map</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/faq">
          <v-list-tile-title>FAQ</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/protocol">
          <v-list-tile-title>Protocol</v-list-tile-title>
        </v-list-tile>
        <v-list-tile nuxt to="/stamps">
          <v-list-tile-title>DNS Stamps</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="https://status.dnscrypt.info/">
          <v-list-tile-title>Network Status</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-toolbar-side-icon
        slot="activator"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-menu>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat nuxt to="/implementations">Software</v-btn>
      <v-btn flat nuxt to="/public-servers">DNSCrypt &amp; DoH servers</v-btn>
      <v-btn flat nuxt to="/map">Map</v-btn>
      <v-btn flat nuxt to="/faq">FAQ</v-btn>
      <v-btn flat nuxt to="/protocol">Protocol</v-btn>
      <v-btn flat nuxt to="/stamps">DNS Stamps</v-btn>
      <v-btn flat href="https://status.dnscrypt.info/">Network Status</v-btn>
    </v-toolbar-items>
    <v-btn
      flat
      class="primary nav-img-btn"
      href="https://github.com/dnscrypt"
      title="DNSCrypt GitHub Organisation"
    >
      <img src="~/assets/github-light.svg" alt="GitHub" height="42" />
    </v-btn>
  </v-toolbar>
</template>
