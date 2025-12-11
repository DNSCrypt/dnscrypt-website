<template>
<v-app light>
  <header>
    <TopMenu />
  </header>
  <v-content class="main-content">
    <v-container class="content-container">
      <nuxt/>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import TopMenu from "~/components/TopMenu.vue";

export default {
  components: {
    TopMenu
  }
};
</script>

<style lang="stylus" scoped>
.main-content
  padding-top: 70px !important
  min-height: 100vh
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)

.content-container
  padding-top: 24px
  padding-bottom: 48px
  max-width: 1200px
</style>
