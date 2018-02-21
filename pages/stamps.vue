<template>
  <v-container>
    <DNSStamp />
    <p>
      <a href="https://github.com/jedisct1/dnscrypt-proxy/wiki/stamps">DNS Stamps</a> encode all the parameters required to connect to a secure DNS server as a single string.
    </p>
    <p>
      Think about stamps as QR code, but for DNS.
    </p>
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
