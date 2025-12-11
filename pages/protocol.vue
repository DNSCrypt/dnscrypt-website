<template>
  <div class="protocol-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>Protocol Specification</h1>
      <p>Complete technical specification of the DNSCrypt protocol version 2.</p>
    </div>

    <v-card class="protocol-card">
      <v-card-text>
        <pre class="protocol-text">{{ ProtoText }}</pre>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ProtoText from "raw-loader!~/assets/dnscrypt-protocol/DNSCRYPT-V2-PROTOCOL.txt";

export default {
  head() {
    return {
      title: "DNSCrypt Protocol Specification Version 2",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Complete technical specification of the DNSCrypt protocol version 2. Learn about the cryptographic DNS encryption protocol designed for secure DNS communication.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "DNSCrypt Protocol Specification Version 2 | DNSCrypt",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Complete technical specification of the DNSCrypt protocol version 2. Learn about the cryptographic DNS encryption protocol designed for secure DNS communication.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://dnscrypt.info/protocol",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "DNSCrypt Protocol Specification Version 2 | DNSCrypt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Complete technical specification of the DNSCrypt protocol version 2. Learn about the cryptographic DNS encryption protocol.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://dnscrypt.info/protocol",
        },
      ],
    };
  },
  data() {
    return {
      ProtoText,
    };
  },
};
</script>

<style lang="stylus" scoped>
.protocol-page
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

.protocol-card
  border-radius: 16px !important
  border: none !important
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important
  overflow: hidden

  .v-card__text
    padding: 0 !important

.protocol-text
  background: #1a202c !important
  color: #e2e8f0
  padding: 2rem
  margin: 0
  border-radius: 0
  overflow-x: auto
  font-size: 0.875rem
  line-height: 1.7
  font-family: 'Roboto Mono', 'Consolas', 'Monaco', monospace
  white-space: pre-wrap
  word-wrap: break-word
</style>
