<template>
  <pre>{{ ProtoText }}</pre>
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
