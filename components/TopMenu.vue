<template>
  <v-toolbar fixed dark class="modern-toolbar" height="70">
    <v-toolbar-title>
      <v-btn flat class="nav-logo-btn" nuxt to="/">
        <img src="~/assets/dnscrypt-small.png" alt="DNSCrypt" height="42" />
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y open-on-hover>
      <v-list class="nav-dropdown">
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
        class="hidden-md-and-up mobile-menu-btn"
      ></v-toolbar-side-icon>
    </v-menu>
    <v-toolbar-items class="hidden-sm-and-down nav-items">
      <v-btn flat nuxt to="/implementations">Software</v-btn>
      <v-btn flat nuxt to="/public-servers">Servers</v-btn>
      <v-btn flat nuxt to="/map">Map</v-btn>
      <v-btn flat nuxt to="/faq">FAQ</v-btn>
      <v-btn flat nuxt to="/protocol">Protocol</v-btn>
      <v-btn flat nuxt to="/stamps">DNS Stamps</v-btn>
      <v-btn flat href="https://status.dnscrypt.info/">Status</v-btn>
    </v-toolbar-items>
    <v-btn
      flat
      class="nav-github-btn"
      href="https://github.com/dnscrypt"
      title="DNSCrypt GitHub Organisation"
    >
      <img src="~/assets/github-light.svg" alt="GitHub" height="28" />
    </v-btn>
  </v-toolbar>
</template>

<style lang="stylus" scoped>
.modern-toolbar
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%) !important
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important

.nav-logo-btn
  height: 50px !important
  padding: 0 8px !important
  margin: 0 !important
  background: transparent !important

  &:hover
    background: rgba(255, 255, 255, 0.1) !important

  img
    transition: transform 0.2s ease

  &:hover img
    transform: scale(1.05)

.nav-items .v-btn
  font-weight: 500
  letter-spacing: 0.3px
  text-transform: none !important
  font-size: 0.9rem
  height: 70px !important
  border-radius: 0 !important
  position: relative

  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 50%
    width: 0
    height: 3px
    background: #00bfa5
    transition: all 0.3s ease
    transform: translateX(-50%)

  &:hover::after
    width: 80%

  &.v-btn--active::after
    width: 80%
    background: #00bfa5

.nav-github-btn
  height: 50px !important
  min-width: 50px !important
  padding: 0 12px !important
  margin-left: 8px !important
  border-radius: 8px !important
  background: rgba(255, 255, 255, 0.1) !important

  &:hover
    background: rgba(255, 255, 255, 0.2) !important

  img
    transition: transform 0.2s ease

  &:hover img
    transform: scale(1.1)

.mobile-menu-btn
  margin-right: 0 !important

.nav-dropdown
  border-radius: 12px !important
  overflow: hidden
  margin-top: 8px

  .v-list-tile
    transition: background 0.2s ease

    &:hover
      background: rgba(0, 191, 165, 0.1)

    .v-list-tile__title
      font-weight: 500
      color: #1a202c
</style>
