<template>
  <div class="servers-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>Public DNS Servers</h1>
      <p>Free DNSCrypt and DoH servers from around the world. Click on a server name for details.</p>
    </div>

    <v-card class="table-card">
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :rows-per-page-items="[50, 25, 10, { text: 'All', value: -1 }]"
      >
        <template slot="items" slot-scope="props">
          <td>
            <v-dialog v-model="dialog" width="600">
              <template v-slot:activator="{ on }">
                <v-badge>
                  <span v-on="on" class="server-name">{{
                    props.item.name
                  }}</span>
                  <span slot="badge" title="IPv6" v-if="props.item.ipv6" class="ipv6-badge">v6</span>
                </v-badge>
              </template>
              <v-card class="dialog-card">
                <v-card-title class="dialog-header">{{
                  props.item.name
                }}</v-card-title>
                <v-card-text class="dialog-content">
                  <p class="server-description">{{ props.item.description }}</p>
                  <v-simple-table class="details-table">
                    <tbody>
                      <tr>
                        <th>Protocol</th>
                        <td>{{ props.item.proto }}</td>
                      </tr>
                      <tr>
                        <th>Addresses</th>
                        <td>{{ props.item.addrs }}</td>
                      </tr>
                      <tr>
                        <th>Ports</th>
                        <td>{{ props.item.ports }}</td>
                      </tr>
                      <tr>
                        <th>DNSSEC</th>
                        <td>
                          <v-icon v-if="props.item.dnssec" color="green" small>check_circle</v-icon>
                          <v-icon v-else color="grey" small>remove_circle</v-icon>
                          {{ props.item.dnssec ? 'Yes' : 'No' }}
                        </td>
                      </tr>
                      <tr>
                        <th>No filters</th>
                        <td>
                          <v-icon v-if="props.item.nofilter" color="green" small>check_circle</v-icon>
                          <v-icon v-else color="orange" small>filter_list</v-icon>
                          {{ props.item.nofilter ? 'Yes' : 'Filtering enabled' }}
                        </td>
                      </tr>
                      <tr>
                        <th>No logs</th>
                        <td>
                          <v-icon v-if="props.item.nolog" color="green" small>check_circle</v-icon>
                          <v-icon v-else color="red" small>warning</v-icon>
                          {{ props.item.nolog ? 'Yes' : 'May log queries' }}
                        </td>
                      </tr>
                      <tr>
                        <th>Stamp</th>
                        <td class="stamp-cell">{{ props.item.stamp }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-dialog>
          </td>
          <td class="hidden-xs-only description-cell">
            {{ props.item.description }}
            <v-icon
              title="Filtering enabled"
              color="orange"
              small
              v-if="!props.item.nofilter"
              class="ml-1"
            >filter_list</v-icon>
          </td>
          <td class="hidden-sm-and-down" align="center">
            <v-chip small class="protocol-chip">{{ props.item.proto }}</v-chip>
          </td>
          <td align="center">
            <v-icon v-if="props.item.nolog" color="green" title="No logging">check_circle</v-icon>
            <v-icon v-else color="red" title="May log queries">warning</v-icon>
          </td>
          <td class="hidden-sm-and-down" align="center">
            <v-icon v-if="props.item.dnssec" color="blue" title="DNSSEC enabled">verified_user</v-icon>
          </td>
        </template>
      </v-data-table>
    </v-card>

    <div class="info-section">
      <v-layout row wrap>
        <v-flex xs12 md6 pa-2>
          <v-card class="info-card">
            <v-card-text>
              <v-icon class="info-icon">list</v-icon>
              <h3>Server List</h3>
              <p>This server list is maintained on GitHub. You can contribute or report issues there.</p>
              <a href="https://github.com/dnscrypt/dnscrypt-resolvers">View on GitHub</a>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 pa-2>
          <v-card class="info-card">
            <v-card-text>
              <v-icon class="info-icon">dns</v-icon>
              <h3>Run Your Own Server</h3>
              <p>Want to run your own DNSCrypt or DoH server? Check out our server implementations.</p>
              <a href="https://github.com/dnscrypt/encrypted-dns-server">DNSCrypt Server</a>
              <span class="mx-2">|</span>
              <a href="https://github.com/dnscrypt/doh-server">DoH Server</a>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      title: "Free Public DNSCrypt & DoH Servers List",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Comprehensive list of free public DNSCrypt and DNS-over-HTTPS (DoH) servers with DNSSEC support, no-logging policies, and global locations. Updated regularly.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Free Public DNSCrypt & DoH Servers List | DNSCrypt",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Comprehensive list of free public DNSCrypt and DNS-over-HTTPS (DoH) servers with DNSSEC support, no-logging policies, and global locations.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://dnscrypt.info/public-servers",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Free Public DNSCrypt & DoH Servers List | DNSCrypt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Comprehensive list of free public DNSCrypt and DNS-over-HTTPS (DoH) servers with DNSSEC support and no-logging policies.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://dnscrypt.info/public-servers",
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
      dialog: false,
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
          text: "No Logs",
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

<style lang="stylus" scoped>
.servers-page
  padding-bottom: 3rem

.page-header
  text-align: center
  margin-bottom: 3rem

  h1
    font-size: 2.5rem
    font-weight: 700
    color: #1a202c
    margin: 0 0 1rem 0

  p
    color: #718096
    font-size: 1.15rem
    margin: 0

.table-card
  border-radius: 16px !important
  overflow: hidden
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important
  border: none !important
  margin-bottom: 3rem

.server-name
  color: #0d47a1
  font-weight: 500
  cursor: pointer
  transition: color 0.2s ease

  &:hover
    color: #00bfa5

.ipv6-badge
  background: linear-gradient(135deg, #e3f2fd, #bbdefb) !important
  color: #1565c0 !important

.description-cell
  color: #4a5568
  font-size: 0.9rem

.protocol-chip
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9) !important
  color: #2e7d32 !important
  font-size: 0.75rem !important
  border-radius: 6px !important

.dialog-card
  border-radius: 16px !important
  overflow: hidden

.dialog-header
  background: linear-gradient(135deg, #1a237e, #0d47a1) !important
  color: white !important
  font-size: 1.25rem !important
  font-weight: 600 !important

.dialog-content
  padding: 1.5rem !important

.server-description
  color: #4a5568
  margin-bottom: 1.5rem
  line-height: 1.6

.details-table
  width: 100%

  th
    text-align: right
    padding: 0.75rem 1rem 0.75rem 0
    color: #718096
    font-weight: 500
    width: 120px
    vertical-align: top

  td
    padding: 0.75rem 0
    color: #1a202c

.stamp-cell
  word-break: break-all
  font-family: monospace
  font-size: 0.85rem
  background: #f7fafc
  padding: 0.5rem !important
  border-radius: 4px

.info-section
  margin-top: 2rem

.info-card
  border-radius: 16px !important
  border: none !important
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06) !important
  text-align: center
  height: 100%

  .v-card__text
    padding: 2rem !important

  .info-icon
    font-size: 48px !important
    color: #00bfa5 !important
    margin-bottom: 1rem

  h3
    font-size: 1.25rem
    font-weight: 600
    color: #1a202c
    margin: 0 0 0.75rem 0

  p
    color: #718096
    margin: 0 0 1rem 0
    font-size: 0.95rem

  a
    color: #0d47a1
    font-weight: 500
    text-decoration: none

    &:hover
      color: #00bfa5
</style>
