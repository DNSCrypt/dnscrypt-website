<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      class="elevation-1"
      :rows-per-page-items="[50, 25, 10, { text: 'All', value: -1 }]"
    >
      <template slot="items" slot-scope="props">
        <td>
          <v-dialog v-model="dialog" width="50%">
            <template v-slot:activator="{ on }">
              <v-badge>
                <span v-on="on" :style="{ cursor: 'pointer' }">{{
                  props.item.name
                }}</span>
                <span slot="badge" title="IPv6" v-if="props.item.ipv6">v6</span>
              </v-badge>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>{{
                props.item.name
              }}</v-card-title>
              <v-card-text>{{ props.item.description }}</v-card-text>
              <v-card-text>
                <v-simple-table>
                  <tbody>
                    <tr>
                      <th class="text-right">Protocol</th>
                      <td>{{ props.item.proto }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">Addresses</th>
                      <td>{{ props.item.addrs }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">Ports</th>
                      <td>{{ props.item.ports }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">DNSSEC</th>
                      <td>{{ props.item.dnssec }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">No filters</th>
                      <td>{{ props.item.nofilter }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">No logs</th>
                      <td>{{ props.item.nolog }}</td>
                    </tr>
                    <tr>
                      <th class="text-right">Stamp</th>
                      <td>{{ props.item.stamp }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-dialog>
        </td>
        <td class="hidden-xs-only">
          {{ props.item.description }}
          <v-icon
            title="Filtering"
            color="pink"
            small
            v-if="!props.item.nofilter"
            >block</v-icon
          >
        </td>
        <td class="hidden-sm-and-down" align="center">
          {{ props.item.proto }}
        </td>
        <td align="center">
          <v-icon color="red" v-if="!props.item.nolog">warning</v-icon>
        </td>
        <td class="hidden-sm-and-down" align="center">
          <v-icon color="blue" v-if="props.item.dnssec">lock</v-icon>
        </td>
      </template>
    </v-data-table>
    <p class="text-center headline">
      Click on a server name to view details -
      <a href="https://github.com/dnscrypt/dnscrypt-resolvers"
        >This server list is maintained on GitHub</a
      >
    </p>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      title: "DNSCrypt - List of public DoH and DNSCrypt servers",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "An extensive and constantly updated list of encrypted DNS servers (DoH and DNSCrypt) that are free and publicly accessible.",
        },
      ],
    };
  },
  created() {
    axios
      .get(
        "https://download.dnscrypt.info/dnscrypt-resolvers/json/public-resolvers.json"
      )
      .then((response) => {
        this.loading = false;
        this.items = response.data;
      })
      .catch((e) => {
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
        { text: "Name", align: "left", sortable: true, value: "name" },
        {
          text: "Description",
          sortable: false,
          value: "description",
          class: "hidden-xs-only",
        },
        {
          text: "Protocol",
          align: "center",
          sortable: true,
          value: "proto",
          class: "hidden-sm-and-down",
        },
        {
          text: "Logging",
          align: "center",
          sortable: true,
          value: "nolog",
        },
        {
          text: "DNSSEC",
          align: "center",
          sortable: true,
          value: "dnssec",
          class: "hidden-sm-and-down",
        },
      ],
    };
  },
};
</script>
