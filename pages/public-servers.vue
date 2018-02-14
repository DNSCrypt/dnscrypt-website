<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    :rows-per-page-items='[10,25,50,{"text":"All","value":-1}]'
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>
        <v-badge>
          {{ props.item.name }}
          <span slot="badge" v-if=props.item.ipv6>v6</span>
        </v-badge>
      </td>
      <td>{{ props.item.description }}</td>
      <td><v-icon color=blue v-if=props.item.dnssec>lock</v-icon></td>
      <td><v-icon color=red v-if="!props.item.nolog">warning</v-icon></td>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get(
        "https://download.dnscrypt.info/dnscrypt-resolvers/json/public-resolvers.json"
      )
      .then(response => {
        this.loading = false;
        this.items = response.data;
      })
      .catch(e => {
        this.loading = false;
        this.errors.push(e);
      });
  },
  data() {
    return {
      loading: true,
      items: [],
      errors: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Description", sortable: false, value: "description" },
        { text: "DNSSEC", sortable: true, value: "dnssec" },
        { text: "Logging", sortable: true, value: "nolog" }
      ]
    };
  }
};
</script>