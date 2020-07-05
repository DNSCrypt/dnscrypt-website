<template>
  <v-container>
    <DNSStamp />
    <p>
      <nuxt-link to="/stamps-specifications">DNS Stamps</nuxt-link> encode all the parameters required to connect to a secure DNS server as a single string.
    </p>
    <p>Think about stamps as QR code, but for DNS.</p>
    <p>Useful links for DNS operators:</p>
    <ul>
      <li>
        <a
          href="https://github.com/jedisct1/encrypted-dns-server"
        >Recommended DNSCrypt server implementation</a>
      </li>
      <li>
        <a href="https://github.com/jedisct1/doh-server">Recommended DoH server implementation</a>
      </li>
      <li>
        <a
          href="https://github.com/jedisct1/doh-server#operational-recommendations"
        >Operational recommendations for running DoH servers</a>
      </li>
      <li>
        <a
          href="https://github.com/jedisct1/doh-server#dns-stamp-and-certificate-hashes"
        >Certificate hashes for DoH servers</a>
      </li>
      <li>
        <a
          href="https://github.com/dnscrypt/dnscrypt-resolvers"
        >Lists of public DNSCrypt and DoH servers</a>
      </li>
    </ul>
  </v-container>
</template>

<script>
import DNSStamp from "~/components/DNSStamp.vue";

export default {
  components: {
    DNSStamp
  }
};
</script>
