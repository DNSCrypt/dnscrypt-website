<template>
    <v-toolbar fixed dark class="primary">
        <v-toolbar-title><v-btn flat class="primary" router nuxt to="/"><img src="~/assets/dnscrypt-small.png" height="42px" align="middle"/></v-btn></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y open-on-hover>
            <v-list>
                <v-list-tile router nuxt to="/">
                    <v-list-tile-title>Encrypted DNS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router nuxt to="/implementations">
                    <v-list-tile-title>Implementations</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router nuxt to="/public-servers">
                    <v-list-tile-title>Public DNS servers</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router nuxt to="/faq">
                    <v-list-tile-title>FAQ</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router nuxt to="/protocol">
                    <v-list-tile-title>Protocol</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router nuxt to="/stamps">
                    <v-list-tile-title>Stamps</v-list-tile-title>
                </v-list-tile>
            </v-list>
            <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
        </v-menu>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat router nuxt to="/implementations">Implementations</v-btn>
            <v-btn flat router nuxt to="/public-servers">Public DNS servers</v-btn>
            <v-btn flat router nuxt to="/faq">FAQ</v-btn>
            <v-btn flat router nuxt to="/protocol">Protocol</v-btn>
            <v-btn flat router nuxt to="/stamps">Stamps</v-btn>
        </v-toolbar-items>
        <v-btn flat class="primary" href="https://github.com/dnscrypt"><img src="~/assets/github-light.svg" align="middle" height="42px" /></v-btn>
    </v-toolbar>
</template>
