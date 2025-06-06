<template>
  <v-container>
    <DNSStamp />
    <p>
      <nuxt-link to="/stamps-specifications">DNS Stamps</nuxt-link> encode all
      the parameters required to connect to a secure DNS server as a single
      string.
    </p>
    <p>Think about stamps as QR code, but for DNS.</p>
    <p>Useful links for DNS operators:</p>
    <ul>
      <li>
        <a href="https://github.com/DNSCrypt/encrypted-dns-server"
          >Recommended DNSCrypt server implementation</a
        >
      </li>
      <li>
        <a href="https://github.com/DNSCrypt/doh-server"
          >Recommended DoH server implementation</a
        >
      </li>
      <li>
        <a
          href="https://github.com/DNSCrypt/doh-server#operational-recommendations"
          >Operational recommendations for running DoH servers</a
        >
      </li>
      <li>
        <a
          href="https://github.com/DNSCrypt/doh-server#dns-stamp-and-certificate-hashes"
          >Certificate hashes for DoH servers</a
        >
      </li>
      <li>
        <a href="https://github.com/dnscrypt/dnscrypt-resolvers"
          >Lists of public DNSCrypt and DoH servers</a
        >
      </li>
    </ul>
  </v-container>
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
