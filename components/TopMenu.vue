<template>
    <v-toolbar fixed dark class="blue darken-2">
        <v-toolbar-title><v-btn flat class="primary nav-img-btn" nuxt to="/"><img src="~/assets/dnscrypt-small.png" alt="DNSCrypt" height="42"/></v-btn></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y open-on-hover>
            <v-list>
                <v-list-tile nuxt to="/">
                    <v-list-tile-title>Encrypted DNS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile nuxt to="/implementations">
                    <v-list-tile-title>Implementations</v-list-tile-title>
                </v-list-tile>
                <v-list-tile nuxt to="/public-servers">
                    <v-list-tile-title>Public DNS servers</v-list-tile-title>
                </v-list-tile>
                <v-list-tile nuxt to="/faq">
                    <v-list-tile-title>FAQ</v-list-tile-title>
                </v-list-tile>
                <v-list-tile nuxt to="/protocol">
                    <v-list-tile-title>Protocol</v-list-tile-title>
                </v-list-tile>
                <v-list-tile nuxt to="/stamps">
                    <v-list-tile-title>Stamps</v-list-tile-title>
                </v-list-tile>
            </v-list>
            <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
        </v-menu>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat nuxt to="/implementations">Implementations</v-btn>
            <v-btn flat nuxt to="/public-servers">Public DNS servers</v-btn>
            <v-btn flat nuxt to="/faq">FAQ</v-btn>
            <v-btn flat nuxt to="/protocol">Protocol</v-btn>
            <v-btn flat nuxt to="/stamps">Stamps</v-btn>
        </v-toolbar-items>
        <v-btn flat class="primary nav-img-btn" href="https://github.com/dnscrypt" title="DNSCrypt GitHub Organisation"><img src="~/assets/github-light.svg" alt="GitHub" height="42"/></v-btn>
    </v-toolbar>
</template>
