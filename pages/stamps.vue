<template>
  <div class="stamps-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>DNS Stamp Calculator</h1>
      <p>Generate and decode DNS stamps for secure DNS server configuration.</p>
    </div>

    <v-card class="stamp-calculator-card">
      <v-card-text>
        <DNSStamp />
      </v-card-text>
    </v-card>

    <div class="info-section">
      <v-card class="about-card">
        <v-card-text>
          <h2>What are DNS Stamps?</h2>
          <p>
            <nuxt-link to="/stamps-specifications">DNS Stamps</nuxt-link> encode all
            the parameters required to connect to a secure DNS server as a single
            string. Think of stamps as QR codes, but for DNS configuration.
          </p>
        </v-card-text>
      </v-card>
    </div>

    <h2>Resources for DNS Operators</h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 pa-2>
        <v-card class="resource-card" height="100%">
          <v-card-text>
            <v-icon class="resource-icon">dns</v-icon>
            <h3>DNSCrypt Server</h3>
            <p>Recommended DNSCrypt server implementation in Rust.</p>
            <a href="https://github.com/DNSCrypt/encrypted-dns-server">View Project</a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 pa-2>
        <v-card class="resource-card" height="100%">
          <v-card-text>
            <v-icon class="resource-icon">http</v-icon>
            <h3>DoH Server</h3>
            <p>Recommended DNS-over-HTTPS server implementation.</p>
            <a href="https://github.com/DNSCrypt/doh-server">View Project</a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 pa-2>
        <v-card class="resource-card" height="100%">
          <v-card-text>
            <v-icon class="resource-icon">settings</v-icon>
            <h3>Operations Guide</h3>
            <p>Best practices for running DoH servers in production.</p>
            <a href="https://github.com/DNSCrypt/doh-server#operational-recommendations">Read Guide</a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 pa-2>
        <v-card class="resource-card" height="100%">
          <v-card-text>
            <v-icon class="resource-icon">verified_user</v-icon>
            <h3>Certificate Hashes</h3>
            <p>How to generate certificate hashes for DoH servers.</p>
            <a href="https://github.com/DNSCrypt/doh-server#dns-stamp-and-certificate-hashes">Learn More</a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 pa-2>
        <v-card class="resource-card" height="100%">
          <v-card-text>
            <v-icon class="resource-icon">public</v-icon>
            <h3>Server Lists</h3>
            <p>Public DNSCrypt and DoH server listings.</p>
            <a href="https://github.com/dnscrypt/dnscrypt-resolvers">Browse Servers</a>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import DNSStamp from "~/components/DNSStamp.vue";

export default {
  head() {
    return {
      title: "DNS Stamp Calculator - Generate DNSCrypt and DoH Stamps",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Generate and decode DNS stamps for DNSCrypt and DNS-over-HTTPS (DoH) servers. DNS stamps encode server parameters as a single string for easy configuration.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "DNS Stamp Calculator - Generate DNSCrypt and DoH Stamps | DNSCrypt",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Generate and decode DNS stamps for DNSCrypt and DNS-over-HTTPS (DoH) servers. DNS stamps encode server parameters as a single string for easy configuration.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://dnscrypt.info/stamps",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "DNS Stamp Calculator - Generate DNSCrypt and DoH Stamps | DNSCrypt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Generate and decode DNS stamps for DNSCrypt and DNS-over-HTTPS (DoH) servers. Easy configuration tool.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://dnscrypt.info/stamps",
        },
      ],
    };
  },
  components: {
    DNSStamp,
  },
};
</script>

<style lang="stylus" scoped>
.stamps-page
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

.stamp-calculator-card
  border-radius: 16px !important
  border: none !important
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important
  margin-bottom: 3rem

  .v-card__text
    padding: 2rem !important

.info-section
  margin-bottom: 3rem

.about-card
  border-radius: 16px !important
  background: linear-gradient(135deg, #f8fafc, #edf2f7) !important
  border: none !important
  box-shadow: none !important

  .v-card__text
    padding: 2rem !important

  h2
    font-size: 1.5rem
    font-weight: 600
    color: #1a202c
    margin: 0 0 1rem 0

  p
    color: #4a5568
    margin: 0
    line-height: 1.7
    font-size: 1.05rem

  a
    color: #0d47a1
    font-weight: 500

    &:hover
      color: #00bfa5

h2
  font-size: 1.75rem
  font-weight: 600
  color: #1a202c
  margin: 0 0 1.5rem 0

.resource-card
  border-radius: 16px !important
  border: none !important
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06) !important
  transition: all 0.3s ease !important
  text-align: center

  &:hover
    transform: translateY(-4px)
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important

  .v-card__text
    padding: 1.75rem !important

  .resource-icon
    font-size: 40px !important
    color: #00bfa5 !important
    margin-bottom: 1rem

  h3
    font-size: 1.15rem
    font-weight: 600
    color: #1a202c
    margin: 0 0 0.5rem 0

  p
    color: #718096
    margin: 0 0 1rem 0
    font-size: 0.9rem
    line-height: 1.5

  a
    color: #0d47a1
    font-weight: 500
    text-decoration: none
    font-size: 0.9rem

    &:hover
      color: #00bfa5
</style>
