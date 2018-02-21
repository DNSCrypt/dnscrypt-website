<template>
    <v-container fluid>
      <h1>Online DNS Stamp calculator</h1>
      <v-layout row wrap>
      <v-flex xs12 sm2>
        <v-select label="Protocol" :items='[{"text":"DNSCrypt", "value":"DNSCrypt"}, {"text":"DNS-over-HTTP/2", "value":"DoH"}]' v-model="proto" />
        <v-checkbox label="DNSSEC" v-model="dnssec"/>
        <v-checkbox label="No logs" v-model="nolog"/>
        <v-checkbox label="No filter" v-model="nofilter"/>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field label="IP Address" type="text" v-model="addr"/>
        <span v-if="proto==='DNSCrypt'">
          <v-text-field label="Provider public key" type="text" v-model="pk"/>
          <v-text-field label="Provider name" type="text" v-model="providerName"/>
        </span>
        <span v-if="proto==='DoH'">
          <v-text-field label="Host name (vhost+SNI) and optional port number" type="text" v-model="hostName"/>
          <v-text-field label="Hash" type="text" v-model="hash"/>
          <v-text-field label="Path" type="text" v-model="path"/>
        </span>
      </v-flex>
      <v-flex xs12 sm4>
        <v-text-field label="Stamp" type="text" :value="stamp" @input="stampUpdated"/>
      </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
const URLSafeBase64 = require("urlsafe-base64");

export default {
  name: "DNSStamp",
  data() {
    return {
      proto: "DNSCrypt",
      dnssec: true,
      nolog: true,
      nofilter: true,
      addr: "",
      pk: "",
      providerName: "2.dnscrypt-cert.",
      hostName: "",
      hash: "",
      path: "/dns-query"
    };
  },
  methods: {
    stampUpdated(e) {
      let stamp = e;
      if (stamp.substr(0, 7) !== "sdns://") {
        return;
      }
      let bin = URLSafeBase64.decode(stamp.substr(7));
      if (bin[0] === 0x01) {
        this.proto = "DNSCrypt";
      } else if (bin[0] === 0x02) {
        this.proto = "DoH";
      } else {
        return;
      }
      let props = bin[1];
      this.dnssec = !!((props >> 0) & 1);
      this.nolog = !!((props >> 1) & 1);
      this.nofilter = !!((props >> 2) & 1);
      let i = 9;
      let addrLen = bin[i++];
      this.addr = bin.slice(i, i + addrLen).toString("utf-8");
      i += addrLen;

      const dnscryptStamp = () => {
        let pkLen = bin[i++];
        this.pk = bin.slice(i, i + pkLen).toString("hex");
        i += pkLen;
        let providerNameLen = bin[i++];
        this.providerName = bin.slice(i, i + providerNameLen).toString("utf-8");
      };

      const dohStamp = () => {
        let hashLen = bin[i++];
        this.hash = bin.slice(i, i + hashLen).toString("hex");
        i += hashLen;
        let hostNameLen = bin[i++];
        this.hostName = bin.slice(i, i + hostNameLen).toString("utf-8");
        i += hostNameLen;
        let pathLen = bin[i++];
        this.path = bin.slice(i, i + pathLen).toString("utf-8");
      };

      if (this.proto === "DNSCrypt") {
        dnscryptStamp();
      } else if (this.proto === "DoH") {
        dohStamp();
      }
    }
  },
  computed: {
    stamp: function() {
      let props = (this.dnssec << 0) | (this.nolog << 1) | (this.nofilter << 2);
      let addr = this.addr.split("").map(c => c.charCodeAt());

      const dnscryptStamp = () => {
        let v = [0x01, props, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        v.push(addr.length, ...addr);
        let pk = Buffer.from(this.pk.replace(/[: \t]/g, ""), "hex");
        v.push(pk.length, ...pk);
        let providerName = this.providerName.split("").map(c => c.charCodeAt());
        v.push(providerName.length, ...providerName);
        return `sdns://${URLSafeBase64.encode(Buffer(v))}`;
      };

      const dohStamp = () => {
        let v = [0x02, props, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        v.push(addr.length, ...addr);
        let hash = Buffer.from(this.hash.replace(/[: \t]/g, ""), "hex");
        v.push(hash.length, ...hash);
        let hostName = this.hostName.split("").map(c => c.charCodeAt());
        v.push(hostName.length, ...hostName);
        let path = this.path.split("").map(c => c.charCodeAt());
        v.push(path.length, ...path);
        return `sdns://${URLSafeBase64.encode(Buffer(v))}`;
      };

      if (this.proto === "DNSCrypt") {
        return dnscryptStamp();
      } else {
        return dohStamp();
      }
    }
  }
};
</script>
