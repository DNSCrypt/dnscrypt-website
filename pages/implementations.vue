<template>
  <div>
    <h2 id="client-implementations">Client Implementations</h2>
    <v-card>
      <v-card-title>
        Client Implementations
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :disable-initial-sort="true" :headers="clientHeaders" :items="clientImplementations" :search="search" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
            <tr :title="props.item.description">
              <td>
                <a v-if="props.item.url" :href="props.item.url">{{ props.item.name }}</a>
                <span v-else>{{ props.item.name }}</span>
              </td>
              <td>{{ props.item.Author }}</td>
              <td>
                <span v-for="(protocol, index) in props.item.protocols" :key="index">
                  {{ protocol }}<span v-if="index == props.item.protocols.length-2"> and </span><span v-if="index < props.item.protocols.length-2">, </span>
                </span>
              </td>
              <td>
                <span v-for="(platform, index) in props.item.platforms" :key="index">
                  {{ platform }}<span v-if="index == props.item.platforms.length-2"> and </span><span v-if="index < props.item.platforms.length-2">, </span>
                </span>
              </td>
              <td>{{ props.item.language }}</td>
            </tr>
        </template>
      </v-data-table>
    </v-card>

    <h2 id="server-implementations">Server Implementations</h2>
    <v-card>
      <v-card-title>
        Server Implementations
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="serverHeaders" :items="serverImplementations" :search="search" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
            <tr :title="props.item.description">
              <td><a :href="props.item.url">{{ props.item.name }}</a></td>
              <td>{{ props.item.author }}</td>
              <td>
                <span v-for="(protocol, index) in props.item.protocols" :key="index">
                  {{ protocol }}<span v-if="index == props.item.protocols.length-2"> and </span><span v-if="index < props.item.protocols.length-2">, </span>
                </span>
              </td>
              <td>{{ props.item.language }}</td>
            </tr>
        </template>
      </v-data-table>
    </v-card>

    <h2>Server Setup Guides</h2>
    <p><a href="https://github.com/jedisct1/dnscrypt-proxy/wiki/How-to-setup-your-own-DNSCrypt-server-in-less-than-10-minutes">How to setup your own DNSCrypt server in less than 10 minutes</a></p>
    <p><a href="https://github.com/jedisct1/dnscrypt-proxy/wiki/DNSCrypt-server-with-vultr.com">How to setup your own DNSCrypt server on Vultr</a></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        clientHeaders: [
          { text: 'Name', value: 'name' },
          { text: 'Author', value: 'Author' },
          { text: 'Protocols', value: 'protocols' },
          { text: 'Platforms', value: 'platforms' },
          { text: 'Language', value: 'language' },
        ], clientImplementations: [
          {
            name: "DNSCrypt-Proxy",
            Author: "Frank Denis (@jedisct1)",
            url: "https://github.com/jedisct1/dnscrypt-proxy",
            protocols: ["DNSCrypt", "DoH"],
            platforms: ["Linux", "BSD", "Windows", "macOS", "Android", "more"],
            language: "Golang",
            description: "DNSCrypt-Proxy is a command-line proxy for Linux, BSD, Windows, MacOS, Android and more. It bridges applications expecting regular DNS with servers supporting encrypted DNS (DNSCrypt and DoH). DNSCrypt-Proxy can also display the DNS activity, cache results to improve speed, and locally block unwanted content."
          }, {
            name: "DoH-proxy",
            Author: "Facebook",
            url: "https://facebookexperimental.github.io/doh-proxy/",
            protocols: ["DoH"],
            platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
            language: "Python",
            description: "DoH-proxy by Facebook, supports DNS-over-HTTP/2 (DoH)"
          }, {
            name: "Pcap_DNSProxy",
            Author: "",
            url: "https://github.com/chengr28/Pcap_DNSProxy",
            protocols: ["DNSCrypt"],
            platforms: ["Windows", "Linux", "macOS", "OpenWrt/LEDE"],
            language: "C++",
            description: "Pcap_DNSCrypt is a local DNS proxy based on WinPcap and LibPcap"
          }, {
            name: "YourFriendlyDNS",
            Author: "",
            url: "https://github.com/softwareengineer1/YourFriendlyDNS",
            protocols: ["DNSCrypt"],
            platforms: ["Linux", "Windows", "macOS", "Android"],
            language: "C++",
            description: "YourFriendlyDNS is a local, multi-platform (Linux, Windows, macOS, Android) caching DNS proxy written in C++"
          }, {
            name: "Simple DNSCrypt",
            Author: "",
            url: "https://simplednscrypt.org/",
            protocols: ["DNSCrypt", "DoH"],
            platforms: ["Windows"],
            language: "C#",
            description: "Simple DNSCrypt is a simple management tool to configure dnscrypt-proxy on windows based systems."
          }, {
            name: "dnscrypt-proxy switcher",
            Author: "",
            url: "https://github.com/jedisct1/bitbar-dnscrypt-proxy-switcher/",
            protocols: ["DNSCrypt"],
            platforms: ["macOS"],
            language: "Shell",
            description: "dnscrypt-proxy switcher is a plugin for BitBar."
          }, {
            name: "DNSCloak",
            Author: "",
            url: "https://itunes.apple.com/us/app/dnscloak-dnscrypt-client/id1452162351",
            protocols: ["DNSCrypt"],
            platforms: ["iOS"],
            language: "",
            description: "DNSCloak is a full-featured DNSCrypt client for iOS, with filtering, logging, caching, password protection and more. No jailbreak required."
          }, {
            name: "DNSCrypt proxy on Android",
            Author: "",
            url: "https://github.com/jedisct1/dnscrypt-proxy/issues/41",
            protocols: ["DNSCrypt"],
            platforms: ["Android"],
            language: "",
            description: "Official pre-compiled binaries are available for Android. A Magisk module is also available. See thread on running DNSCrypt proxy on Android for more information."
          }, {
            name: "Other platforms",
            Author: "",
            url: "",
            protocols: [],
            platforms: [],
            language: "",
            description: "Be a hero and develop free, open-source clients for your favourite platform!"
          }
        ],
        serverHeaders: [
          { text: 'Name', value: 'name' },
          { text: 'Author', value: 'author' },
          { text: 'Protocols', value: 'protocols' },
          { text: 'Language', value: 'language' },
        ], serverImplementations: [
          {
            name: "Encrypted DNS Server",
            author: "Frank Denis (@jedisct1)",
            url: "https://github.com/jedisct1/encrypted-dns-server",
            protocols: [ "DNSCrypt", "DoH" ],
            language: "Rust",
            description: "DNSCrypt, Anonymized DNSCrypt, DoH server in Rust"
          },
          {
            name: "DNSCrypt-Wrapper",
            author: "Yecheng Fu (@cofyc)",
            url: "https://github.com/cofyc/dnscrypt-wrapper",
            protocols: [ "DNSCrypt" ],
            language: "C",
            description: "DNSCrypt-Wrapper is a DNSCrypt proxy."
          },{
            name: "Official Docker container (DNSCrypt-Wrapper and Unbound)",
            author: "",
            url: "https://github.com/DNSCrypt/dnscrypt-server-docker",
            protocols: [ "DNSCrypt" ],
            language: "",
            description: ""
          }, {
            name: "Unbound",
            author: "NLnet Labs",
            url: "https://nlnetlabs.nl/projects/unbound/about/",
            protocols: [ "DNSCrypt", "DoT" ],
            language: "C",
            description: "Unbound by NLnetLabs, supports both DNS-over-TLS and DNSCrypt."
          }, {
            name: "dnsdist",
            author: "PowerDNS",
            url: "https://dnsdist.org/",
            protocols: [ "DNSCrypt", "DoH", "DoT" ],
            language: "C++",
            description: "dnsdist by PowerDNS, supports both DNS-over-TLS and DNSCrypt."
          }, {
            name: "DoH-proxy",
            author: "Facebook",
            url: "https://facebookexperimental.github.io/doh-proxy/",
            protocols: [ "DoH" ],
            language: "Python",
            description: "DoH-proxy by Facebook, supports DNS-over-HTTP/2 (DoH)"
          }, {
            name: "Rust-DoH",
            author: "Frank Denis (@jedisct1)",
            url: "https://github.com/jedisct1/rust-doh",
            protocols: [ "DoH" ],
            language: "Rust",
            description: "rust-DoH supports DNS-over-HTTP/2 (DoH)"
          }, {
            name: "dnss",
            author: "Alberto Bertogli (@albertito)",
            url: "https://github.com/albertito/dnss",
            protocols: [ "DoH" ],
            language: "Go",
            description: "A daemon for using DNS over HTTPS"
          }
        ]
      }
    }
  }
</script>
