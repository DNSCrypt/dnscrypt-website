<template lang=md>

# Client Implementations

In order to use DNS over secure channels, client software has to be installed on your devices, or on your router.

### All Platforms

* [DNSCrypt-Proxy](https://github.com/jedisct1/dnscrypt-proxy) is a command-line proxy for Linux, BSD, Windows, MacOS, Android and more. It bridges applications expecting regular DNS with servers supporting encrypted DNS (DNSCrypt and DoH). DNSCrypt-Proxy can also display the DNS activity, cache results to improve speed, and locally block unwanted content. [Installation instructions](https://github.com/jedisct1/dnscrypt-proxy/wiki/installation) - [Download](https://github.com/jedisct1/dnscrypt-proxy/releases)

* [DoH-proxy](https://facebookexperimental.github.io/doh-proxy/) by Facebook, supports DNS-over-HTTP/2 (DoH)

* [Pcap_DNSProxy](https://github.com/chengr28/Pcap_DNSProxy) is a local DNS proxy based on WinPcap and LibPcap

* [YourFriendlyDNS](https://github.com/softwareengineer1/YourFriendlyDNS) is a local, multi-platform (Linux, Windows, macOS, Android) caching DNS proxy written in C++

### Windows

* [Simple DNSCrypt](https://simplednscrypt.org/) is a simple management tool to configure dnscrypt-proxy on windows based systems.

### macOS

* [dnscrypt-proxy switcher](https://github.com/jedisct1/bitbar-dnscrypt-proxy-switcher/) plugin for [BitBar](https://getbitbar.com).

### iOS

* [DNSCloak](https://itunes.apple.com/us/app/dnscloak-dnscrypt-client/id1330471557?mt=8): full-featured DNSCrypt client for iOS, with filtering, logging, caching, password protection and more. No jailbreak required.

### Android

Official pre-compiled binaries are available for Android. A Magisk module is also available. See this thread on running [DNSCrypt proxy on Android](https://github.com/jedisct1/dnscrypt-proxy/issues/41) for more information.

### Other platforms

Be a hero and develop free, open-source clients for your favourite platform!

# Server Implementations

* [DNSCrypt-Wrapper](https://github.com/cofyc/dnscrypt-wrapper)
  * Pre-build [Docker container](https://github.com/jedisct1/dnscrypt-server-docker) uses Unbound for DNS resolution and DNSCrypt-Wrapper to proxy dnscrypt.

* [Unbound](https://unbound.net) by NLnetLabs, supports both DNS-over-TLS and DNSCrypt.

* [dnsdist](https://dnsdist.org) by PowerDNS, supports both DNS-over-TLS and DNSCrypt.

* [DoH-proxy](https://facebookexperimental.github.io/doh-proxy/) by Facebook, supports DNS-over-HTTP/2 (DoH)

* [rust-DoH](https://github.com/jedisct1/rust-doh) supports DNS-over-HTTP/2 (DoH)

## Server Setup Guides

* [How to setup your own DNSCrypt server in less than 10 minutes](https://github.com/jedisct1/dnscrypt-proxy/wiki/How-to-setup-your-own-DNSCrypt-server-in-less-than-10-minutes)

* [How to setup your own DNSCrypt server on Vultr](https://github.com/jedisct1/dnscrypt-proxy/wiki/DNSCrypt-server-with-vultr.com)

</template>
