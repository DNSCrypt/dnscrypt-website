<template>
    <pre>{{ProtoText}}</pre>
</template>

<script>
import ProtoText from "raw-loader!~/assets/DNSCRYPT-V2-PROTOCOL.txt";

export default {
  data() {
    return {
      ProtoText
    };
  }
};
</script>