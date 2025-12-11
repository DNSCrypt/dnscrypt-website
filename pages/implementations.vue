<template>
  <div class="implementations-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>Software Implementations</h1>
      <p>Download and configure DNSCrypt and DoH clients and servers for your platform.</p>
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search implementations..."
        single-line
        hide-details
        solo
        class="search-field"
      ></v-text-field>
    </div>

    <h2 id="client-implementations">Client Implementations</h2>
    <v-card class="table-card">
      <v-data-table
        :disable-initial-sort="true"
        :headers="clientHeaders"
        :items="clientImplementations"
        :search="search"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <tr :title="props.item.description" :class="{ 'official-row': props.item.official }">
            <td>
              <div class="impl-name-cell">
                <a v-if="props.item.url" :href="props.item.url" class="impl-link">
                  {{ props.item.name }}
                </a>
                <span v-else>{{ props.item.name }}</span>
                <v-chip v-if="props.item.official" small class="official-badge">Official</v-chip>
              </div>
            </td>
            <td class="text-muted">{{ props.item.Author }}</td>
            <td>
              <v-chip
                v-for="(protocol, index) in props.item.protocols"
                :key="index"
                small
                class="protocol-chip"
              >{{ protocol }}</v-chip>
            </td>
            <td>
              <span class="platform-list">
                <span
                  v-for="(platform, index) in props.item.platforms"
                  :key="index"
                >
                  {{ platform }}<span v-if="index < props.item.platforms.length - 1">, </span>
                </span>
              </span>
            </td>
            <td class="text-muted">{{ props.item.language }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <h2 id="server-implementations">Server Implementations</h2>
    <v-card class="table-card">
      <v-data-table
        :headers="serverHeaders"
        :items="serverImplementations"
        :search="search"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <tr :title="props.item.description" :class="{ 'official-row': props.item.official }">
            <td>
              <div class="impl-name-cell">
                <a :href="props.item.url" class="impl-link">{{ props.item.name }}</a>
                <v-chip v-if="props.item.official" small class="official-badge">Official</v-chip>
              </div>
            </td>
            <td class="text-muted">{{ props.item.author }}</td>
            <td>
              <v-chip
                v-for="(protocol, index) in props.item.protocols"
                :key="index"
                small
                class="protocol-chip"
              >{{ protocol }}</v-chip>
            </td>
            <td class="text-muted">{{ props.item.language }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <h2>Server Setup Guides</h2>
    <v-layout row wrap>
      <v-flex xs12 md4 pa-2>
        <v-card class="guide-card" height="100%">
          <v-card-text>
            <v-icon class="guide-icon">schedule</v-icon>
            <h3>Quick Setup</h3>
            <p>Set up your own DNSCrypt server in less than 10 minutes.</p>
            <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/How-to-setup-your-own-DNSCrypt-server-in-less-than-10-minutes">
              Read Guide
            </a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 pa-2>
        <v-card class="guide-card" height="100%">
          <v-card-text>
            <v-icon class="guide-icon">cloud</v-icon>
            <h3>Vultr Setup</h3>
            <p>Deploy your DNSCrypt server on Vultr cloud hosting.</p>
            <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/DNSCrypt-server-with-vultr.com">
              Read Guide
            </a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 pa-2>
        <v-card class="guide-card" height="100%">
          <v-card-text>
            <v-icon class="guide-icon">description</v-icon>
            <h3>Full Documentation</h3>
            <p>Complete Encrypted DNS Server documentation and configuration.</p>
            <a href="https://github.com/jedisct1/encrypted-dns-server">
              Read Docs
            </a>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Download DNSCrypt & DoH Clients and Servers",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Download free DNSCrypt and DNS-over-HTTPS (DoH) client and server software for Windows, macOS, Linux, Android, and iOS. Secure your DNS traffic with encryption.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Download DNSCrypt & DoH Clients and Servers | DNSCrypt",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Download free DNSCrypt and DNS-over-HTTPS (DoH) client and server software for Windows, macOS, Linux, Android, and iOS. Secure your DNS traffic with encryption.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://dnscrypt.info/implementations",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Download DNSCrypt & DoH Clients and Servers | DNSCrypt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Download free DNSCrypt and DNS-over-HTTPS (DoH) client and server software for Windows, macOS, Linux, Android, and iOS.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://dnscrypt.info/implementations",
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
          protocols: [
            "DNSCrypt",
            "DoH",
            "Anonymized DNSCrypt",
            "Oblivious DoH",
          ],
          platforms: ["Linux", "BSD", "Windows", "macOS", "Android", "more"],
          language: "Go",
          official: true,
          description:
            "Reference implementation - DNSCrypt-Proxy is a command-line proxy for Linux, BSD, Windows, MacOS, Android and more. It bridges applications expecting regular DNS with servers supporting encrypted DNS (DNSCrypt and DoH). DNSCrypt-Proxy can also display the DNS activity, cache results to improve speed, and locally block unwanted content.",
        },
        {
          name: "DNSProxy",
          Author: "AdGuard Team",
          url: "https://github.com/AdguardTeam/dnsproxy",
          protocols: ["DNSCrypt", "DoH", "DoQ"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Go",
          description:
            "A simple DNS proxy with DoH, DoT, DoQ and DNSCrypt support. Supports HTTP/3, DNS caching, and multiple upstream selectors.",
        },
        {
          name: "Simple DNSCrypt",
          Author: "instantsc (fork)",
          url: "https://github.com/instantsc/SimpleDnsCrypt",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Windows"],
          language: "C#",
          description:
            "A simple management tool to configure dnscrypt-proxy on Windows. Actively maintained fork of the original bitbeans/SimpleDnsCrypt.",
        },
        {
          name: "DNSveil",
          Author: "MSasanMH",
          url: "https://github.com/msasanmh/DNSveil",
          protocols: ["DNSCrypt", "DoH", "Anonymized DNSCrypt"],
          platforms: ["Windows"],
          language: "C#",
          description:
            "DNS client with SNI hiding capabilities. Supports DNSCrypt, Anonymized DNSCrypt, DoH, and plain DNS. Can bypass SNI/DNS-based website blocks. Successor to SecureDNSClient.",
        },
        {
          name: "RethinkDNS",
          Author: "Celzero",
          url: "https://github.com/celzero/rethink-app",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Android"],
          language: "Kotlin",
          description:
            "DNS over HTTPS / DNS over Tor / DNSCrypt client with blocklists, WireGuard proxifier, firewall, and connection tracker for Android. No root required.",
        },
        {
          name: "InviZible Pro",
          Author: "Gedsh",
          url: "https://github.com/Gedsh/InviZible",
          protocols: ["DNSCrypt"],
          platforms: ["Android"],
          language: "Java, Kotlin",
          description:
            "Android application combining DNSCrypt, Tor, and I2P for privacy and security. Includes ad-blocking, firewall capabilities, and access to hidden networks.",
        },
        {
          name: "DNSCloak",
          Author: "s-s",
          url: "https://github.com/s-s/dnscloak",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["iOS"],
          language: "Swift",
          description:
            "Full-featured DNSCrypt client for iOS with filtering, logging, caching, and password protection. No jailbreak required. GUI wrapper for dnscrypt-proxy.",
        },
        {
          name: "dnscrypt-proxy-android",
          Author: "d3cim",
          url: "https://github.com/d3cim/dnscrypt-proxy-android",
          protocols: ["DNSCrypt", "DoH", "Anonymized DNSCrypt", "Oblivious DoH"],
          platforms: ["Android"],
          language: "Go",
          description:
            "Hardened dnscrypt-proxy Magisk module for Android. Requires root. Supports all dnscrypt-proxy features including anonymized DNS.",
        },
        {
          name: "Pcap_DNSProxy",
          Author: "chengr28",
          url: "https://github.com/koolshare/Pcap_DNSProxy",
          protocols: ["DNSCrypt"],
          platforms: ["Windows", "Linux", "macOS", "OpenWrt"],
          language: "C++",
          description:
            "Local DNS server based on packet capturing. Filters DNS poisoning with DNSCrypt/DNSCurve support, parallel requests, and regex-based hosts filtering.",
        },
        {
          name: "SecureDNS",
          Author: "Texnomic",
          url: "https://github.com/Texnomic/SecureDNS",
          protocols: [
            "DNSCrypt",
            "DoH",
            "Anonymized DNSCrypt",
          ],
          platforms: ["Linux", "Windows", "macOS"],
          language: "C#",
          description:
            "Secure, modern, fully-featured cross-platform DNS server using .NET. Implements DNSCrypt v2, DoH, and reverse proxy for standard DNS.",
        },
        {
          name: "DNSLookup",
          Author: "Andrey Meshkov",
          url: "https://github.com/ameshkov/dnslookup",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Go",
          description:
            "A simple command-line tool to make DNS queries, with support for DNSCrypt and DoH.",
        },
        {
          name: "dns-over-https",
          Author: "m13253",
          url: "https://github.com/m13253/dns-over-https",
          protocols: ["DoH"],
          platforms: ["Linux", "BSD", "Windows", "macOS", "more"],
          language: "Go",
          description:
            "DNS-over-HTTPS client and server. Supports IETF RFC 8484, EDNS0, and DNSSEC.",
        },
        {
          name: "YogaDNS",
          Author: "Initex",
          url: "https://yogadns.com/",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Windows"],
          language: "Closed source",
          description: "An advanced DNS client for Windows with flexible rules and multiple upstream server support.",
        },
        {
          name: "Pingbar",
          Author: "Frank Denis (@jedisct1)",
          url: "https://github.com/jedisct1/pingbar",
          protocols: [],
          platforms: ["macOS"],
          language: "Swift",
          description: "A native macOS menu bar application to quickly check the status of remote hosts.",
        },
        {
          name: "doggo",
          Author: "Karan Sharma",
          url: "https://github.com/mr-karan/doggo",
          protocols: ["DNSCrypt", "DoH"],
          platforms: ["Linux", "Windows", "macOS"],
          language: "Go",
          description: "Command-line DNS client with support for DoH, DoT, DoQ, and DNSCrypt. Features human-readable and JSON output.",
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
          url: "https://github.com/DNSCrypt/encrypted-dns-server",
          protocols: ["DNSCrypt", "Anonymized DNSCrypt"],
          language: "Rust",
          official: true,
          description:
            "Reference implementation - High-performance DNSCrypt and Anonymized DNSCrypt server with built-in caching and metrics.",
        },
        {
          name: "doh-server",
          author: "Frank Denis (@jedisct1)",
          url: "https://github.com/DNSCrypt/doh-server",
          protocols: ["DoH", "Oblivious DoH"],
          language: "Rust",
          official: true,
          description: "Fast, mature, secure DoH and ODoH server proxy. Battle-tested in production since 2018.",
        },
        {
          name: "DNSCrypt Server Docker",
          author: "DNSCrypt team",
          url: "https://github.com/DNSCrypt/dnscrypt-server-docker",
          protocols: ["DNSCrypt"],
          language: "Docker",
          official: true,
          description:
            "Ready-to-use Docker image for a non-censoring, non-logging, DNSSEC-capable DNSCrypt server with Unbound resolver.",
        },
        {
          name: "AdGuard Home",
          author: "AdGuard Team",
          url: "https://github.com/AdguardTeam/AdGuardHome",
          protocols: ["DNSCrypt", "DoH"],
          language: "Go",
          description:
            "Network-wide ads and trackers blocking DNS server. Features web interface, DHCP, per-client configuration, and supports encrypted DNS upstream and downstream.",
        },
        {
          name: "dnscrypt (Go library)",
          author: "Andrey Meshkov (@ameshkov)",
          url: "https://github.com/ameshkov/dnscrypt",
          protocols: ["DNSCrypt"],
          language: "Go",
          description:
            "DNSCrypt v2 protocol implementation in Go. Can be used as a library or command-line server. Supports XSalsa20Poly1305 and XChacha20Poly1305.",
        },
        {
          name: "DNSCrypt-Wrapper",
          author: "Yecheng Fu (@cofyc)",
          url: "https://github.com/cofyc/dnscrypt-wrapper",
          protocols: ["DNSCrypt"],
          language: "C",
          description: "Server-side DNSCrypt proxy to add DNSCrypt support to any DNS resolver. Supports XChaCha20 and key rotation.",
        },
        {
          name: "Unbound",
          author: "NLnet Labs",
          url: "https://nlnetlabs.nl/projects/unbound/about/",
          protocols: ["DNSCrypt", "DoH"],
          language: "C",
          description:
            "Validating, recursive, caching DNS resolver with DNSCrypt and DoH support. Widely used in production environments.",
        },
        {
          name: "dnsdist",
          author: "PowerDNS",
          url: "https://dnsdist.org/",
          protocols: ["DNSCrypt", "DoH"],
          language: "C++",
          description:
            "Highly DNS-, DoS- and abuse-aware loadbalancer. Supports DNSCrypt, DoH, and advanced traffic policies.",
        },
        {
          name: "CoreDNS",
          author: "CNCF",
          url: "https://github.com/coredns/coredns",
          protocols: ["DoH", "DNS over gRPC"],
          language: "Go",
          description: "Flexible, plugin-based DNS server. Default DNS server for Kubernetes. Supports DoH via plugins.",
        },
        {
          name: "dnss",
          author: "Alberto Bertogli (@albertito)",
          url: "https://github.com/albertito/dnss",
          protocols: ["DoH"],
          language: "Go",
          description: "A daemon for DNS over HTTPS, acting as either server or client proxy.",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.implementations-page
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

.search-container
  max-width: 500px
  margin: 0 auto 3rem auto

.search-field
  border-radius: 12px !important

h2
  font-size: 1.75rem
  font-weight: 600
  color: #1a202c
  margin: 2.5rem 0 1.5rem 0
  padding-bottom: 0.5rem
  border-bottom: 2px solid #e2e8f0

.table-card
  border-radius: 16px !important
  overflow: hidden
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important
  border: none !important
  margin-bottom: 2rem

  .v-datatable
    border-radius: 0 !important
    box-shadow: none !important

.impl-name-cell
  display: flex
  align-items: center
  gap: 8px
  flex-wrap: wrap

.impl-link
  color: #0d47a1
  font-weight: 500
  text-decoration: none

  &:hover
    color: #00bfa5

.official-row
  background: linear-gradient(90deg, rgba(0, 191, 165, 0.08), transparent) !important

.official-badge
  background: linear-gradient(135deg, #1a237e, #0d47a1) !important
  color: white !important
  font-size: 0.7rem !important
  font-weight: 600 !important
  height: 20px !important
  border-radius: 4px !important
  padding: 0 8px !important

.text-muted
  color: #718096

.protocol-chip
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9) !important
  color: #2e7d32 !important
  font-size: 0.75rem !important
  margin: 2px !important
  border-radius: 6px !important

.platform-list
  font-size: 0.9rem
  color: #4a5568

.guide-card
  border-radius: 16px !important
  border: none !important
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06) !important
  transition: all 0.3s ease !important
  text-align: center

  &:hover
    transform: translateY(-4px)
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important

  .v-card__text
    padding: 2rem !important

  .guide-icon
    font-size: 48px !important
    color: #00bfa5 !important
    margin-bottom: 1rem

  h3
    font-size: 1.25rem
    font-weight: 600
    color: #1a202c
    margin: 0 0 0.75rem 0

  p
    color: #718096
    margin: 0 0 1rem 0
    font-size: 0.95rem

  a
    color: #0d47a1
    font-weight: 500
    text-decoration: none

    &:hover
      color: #00bfa5
</style>
