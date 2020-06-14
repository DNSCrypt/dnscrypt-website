<template>
  <pre>{{ProtoText}}</pre>
</template>

<script>
import ProtoText from "raw-loader!~/assets/DNSCRYPT-V2-PROTOCOL.txt";

export default {
  head() {
    return {
      title: "DNSCrypt - Protocol specificaton",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Specification of the DNSCrypt protocol version 2"
        }
      ]
    };
  },
  data() {
    return {
      ProtoText
    };
  }
};
</script>