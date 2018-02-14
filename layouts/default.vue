<template>
<v-app light>
  <header>
    <TopMenu />
  </header>
  <v-content class=mt-5>
    <v-container class=mt-3>
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
