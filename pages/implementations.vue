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
      <v-data-table
        :disable-initial-sort="true"
        :headers="clientHeaders"
        :items="clientImplementations"
        :search="search"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <tr :title="props.item.description">
            <td>
              <a v-if="props.item.url" :href="props.item.url">
                {{ props.item.name }}
              </a>
              <span v-else>{{ props.item.name }}</span>
            </td>
            <td>{{ props.item.Author }}</td>
            <td>
              <span
                v-for="(protocol, index) in props.item.protocols"
                :key="index"
              >
                {{ protocol }}
                <span v-if="index == props.item.protocols.length - 2">and</span>
                <span v-if="index < props.item.protocols.length - 2">,</span>
              </span>
            </td>
            <td>
              <span
                v-for="(platform, index) in props.item.platforms"
                :key="index"
              >
                {{ platform }}
                <span v-if="index == props.item.platforms.length - 2">and</span>
                <span v-if="index < props.item.platforms.length - 2">,</span>
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
      <v-data-table
        :headers="serverHeaders"
        :items="serverImplementations"
        :search="search"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <tr :title="props.item.description">
            <td>
              <a :href="props.item.url">{{ props.item.name }}</a>
            </td>
            <td>{{ props.item.author }}</td>
            <td>
              <span
                v-for="(protocol, index) in props.item.protocols"
                :key="index"
              >
                {{ protocol }}
                <span v-if="index == props.item.protocols.length - 2">and</span>
                <span v-if="index < props.item.protocols.length - 2">,</span>
              </span>
            </td>
            <td>{{ props.item.language }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <h2>Server Setup Guides</h2>
    <p>
      <a
        href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/How-to-setup-your-own-DNSCrypt-server-in-less-than-10-minutes"
        >How to setup your own DNSCrypt server in less than 10 minutes</a
      >
    </p>
    <p>
      <a
        href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/DNSCrypt-server-with-vultr.com"
        >How to setup your own DNSCrypt server on Vultr</a
      >
    </p>
    <p>
      <a href="https://github.com/jedisct1/encrypted-dns-server"
        >Encrypted DNS Server documentation</a
      >
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "DNSCrypt - Download clients and servers for DoH and DNSCrypt",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Applications to run and connect to encrypted DNS servers (DoH and DNSCrypt).",
        },
      ],
    };
  },
  data() {
    return {
      search: "",
      clientHeaders: [
        { text: "Name", value: "name" },
        { text: "Author", value: "Author" },
        { text: "Protocols", value: "protocols" },
        { text: "Platforms", value: "platforms" },
        { text: "Language", value: "language" },
      ],
      clientImplementations: [
        {
          name: "DNSCrypt-Proxy",
          Author: "Frank Denis (@jedisct1)",
          url: "https://github.com/DNSCrypt/dnscrypt-proxy",
          protocols: ["DNSCrypt", "DoH", "Anonymized DNSCrypt"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "Android", "more"],
          language: "Go",
          description:
            "Reference implementation - DNSCrypt-Proxy is a command-line proxy for Linux, BSD, Windows, MacOS, Android and more. It bridges applications expecting regular DNS with servers supporting encrypted DNS (DNSCrypt and DoH). DNSCrypt-Proxy can also display the DNS activity, cache results to improve speed, and locally block unwanted content.",
        },
        {
          name: "SecureDNS",
          Author: "Texnomic (@Texnomic)",
          url: "https://github.com/Texnomic/SecureDNS",
          protocols: [
            "DNSCrypt",
            "DoH",
            "DoT",
            "DoU",
            "ENS",
            "Anonymized DNSCrypt",
          ],
          platforms: ["Linux", "Windows", "macOS", "more"],
          language: "C#",
          description:
            "Secure, Modern, Fully-Featured Cross-Architecture & Cross-Platform DNS Server Using C# 8.0 & .NET Core 3.1.",
        },
        {
          name: "Trust DNS",
          Author: "Surfshark",
          url: "https://surfshark.com/trust-dns",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["iOS", "Android"],
          language: "Closed source",
          description: "A simple client for mobile devices",
        },
        {
          name: "DoH-proxy",
          Author: "Facebook",
          url: "https://facebookexperimental.github.io/doh-proxy/",
          protocols: ["DoH"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Python",
          description: "DoH-proxy by Facebook, supports DNS-over-HTTP/2 (DoH)",
        },
        {
          name: "YourFriendlyDNS",
          Author: "",
          url: "https://github.com/softwareengineer1/YourFriendlyDNS",
          protocols: ["DNSCrypt"],
          platforms: ["Linux", "Windows", "macOS", "Android"],
          language: "C++",
          description:
            "YourFriendlyDNS is a local, multi-platform (Linux, Windows, macOS, Android) caching DNS proxy written in C++",
        },
        {
          name: "Simple DNSCrypt",
          Author: "Christian Hermann",
          url: "https://simplednscrypt.org/",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Windows"],
          language: "C#",
          description:
            "Simple DNSCrypt is a simple management tool to configure dnscrypt-proxy on windows based systems.",
        },
        {
          name: "dnscrypt-proxy switcher",
          Author: "Frank Denis",
          url: "https://github.com/jedisct1/bitbar-dnscrypt-proxy-switcher/",
          protocols: ["DNSCrypt"],
          platforms: ["macOS"],
          language: "Shell",
          description: "dnscrypt-proxy switcher is a plugin for BitBar.",
        },
        {
          name: "DNSCloak",
          Author: "Sergey @s-s",
          url:
            "https://itunes.apple.com/us/app/dnscloak-dnscrypt-client/id1452162351",
          protocols: ["DNSCrypt"],
          platforms: ["iOS"],
          language: "Apache Cordova",
          description:
            "DNSCloak is a full-featured DNSCrypt client for iOS, with filtering, logging, caching, password protection and more. No jailbreak required.",
        },
        {
          name: "DNSCrypt proxy on Android",
          Author: "Multiple",
          url: "https://github.com/DNSCrypt/dnscrypt-proxy/issues/41",
          protocols: ["DNSCrypt"],
          platforms: ["Android"],
          language: "English",
          description:
            "Official pre-compiled binaries are available for Android. A Magisk module is also available. See thread on running DNSCrypt proxy on Android for more information.",
        },
        {
          name: "DNSLookup",
          Author: "Andrey Meshkov",
          url: "https://github.com/ameshkov/dnslookup",
          protocols: ["DNSCrypt", "DoH", "DoT"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Go",
          description:
            "A simple command-line tool to make DNS queries, with support for DNSCrypt and DoH.",
        },
        {
          name: "DNSProxy",
          Author: "Adguard team",
          url: "https://github.com/AdguardTeam/dnsproxy",
          protocols: ["DNSCrypt", "DoH", "DoT"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Go",
          description:
            "A simple client-side proxy with support for DoH, DoT and DNSCrypt.",
        },
        {
          name: "YogaDNS",
          Author: "Initex",
          url: "https://yogadns.com/",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Windows"],
          language: "Closed source",
          description: "An advanced DNS Client for Windows.",
        },
        {
          name: "RethinkDNS",
          Author: "Celzero",
          url: "https://www.rethinkdns.com/",
          protocols: ["DNSCrypt"],
          platforms: ["Android"],
          language: "Go, Kotlin",
          description: "A free and open source DNSCrypt v2 client for Android.",
        },
      ],
      serverHeaders: [
        { text: "Name", value: "name" },
        { text: "Author", value: "author" },
        { text: "Protocols", value: "protocols" },
        { text: "Language", value: "language" },
      ],
      serverImplementations: [
        {
          name: "Encrypted DNS Server",
          author: "Frank Denis (@jedisct1)",
          url: "https://github.com/jedisct1/encrypted-dns-server",
          protocols: ["DNSCrypt", "DoH", "Anonymized DNSCrypt"],
          language: "Rust",
          description:
            "Reference implementation - DNSCrypt, Anonymized DNSCrypt, DoH proxy in Rust. Current reference implementation.",
        },
        {
          name: "DNSCrypt-Wrapper",
          author: "Yecheng Fu (@cofyc)",
          url: "https://github.com/cofyc/dnscrypt-wrapper",
          protocols: ["DNSCrypt"],
          language: "C",
          description: "DNSCrypt-Wrapper is a DNSCrypt proxy.",
        },
        {
          name: "Official Docker container (Unbound+Encrypted DNS)",
          author: "DNSCrypt team",
          url: "https://github.com/DNSCrypt/dnscrypt-server-docker",
          protocols: ["DNSCrypt"],
          language: "Docker",
          description:
            "Ready-to-use Docker image to run your own secure DNS resolver",
        },
        {
          name: "Unbound",
          author: "NLnet Labs",
          url: "https://nlnetlabs.nl/projects/unbound/about/",
          protocols: ["DNSCrypt", "DoT"],
          language: "C",
          description:
            "Unbound by NLnetLabs, supports both DNS-over-TLS and DNSCrypt.",
        },
        {
          name: "dnsdist",
          author: "PowerDNS",
          url: "https://dnsdist.org/",
          protocols: ["DNSCrypt", "DoH", "DoT"],
          language: "C++",
          description:
            "dnsdist by PowerDNS, supports both DNS-over-TLS and DNSCrypt.",
        },
        {
          name: "DoH-proxy",
          author: "Facebook",
          url: "https://facebookexperimental.github.io/doh-proxy/",
          protocols: ["DoH"],
          language: "Python",
          description: "DoH-proxy by Facebook, supports DNS-over-HTTP/2 (DoH)",
        },
        {
          name: "doh-server",
          author: "Frank Denis (@jedisct1)",
          url: "https://github.com/jedisct1/doh-server",
          protocols: ["DoH"],
          language: "Rust",
          description: "Fast and secure DoH proxy server in Rust",
        },
        {
          name: "dnss",
          author: "Alberto Bertogli (@albertito)",
          url: "https://blitiri.com.ar/git/r/dnss/",
          protocols: ["DoH"],
          language: "Go",
          description: "A daemon for using DNS over HTTPS",
        },
        {
          name: "CoreDNS",
          author: "",
          url: "https://github.com/coredns/coredns",
          protocols: ["DoH", "DoT", "DNS over gRPC"],
          language: "Go",
          description: "A DNS server that chains plugins",
        },
      ],
    };
  },
};
</script>
