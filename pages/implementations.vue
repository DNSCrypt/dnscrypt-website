<template lang=md>

# Client Implementations

In order to use DNS over secure channels, client software has to be installed on your devices, or on your router.

### All Platforms

* [DNSCrypt-Proxy](https://github.com/jedisct1/dnscrypt-proxy) is a command-line proxy for Linux, BSD, Windows, MacOS, Android and more. It bridges applications expecting regular DNS with servers supporting encrypted DNS (DNSCrypt and DoH). DNSCrypt-Proxy can also display the DNS activity, cache results to improve speed, and locally block unwanted content. [Installation instructions](https://github.com/jedisct1/dnscrypt-proxy/wiki/installation) - [Download](https://github.com/jedisct1/dnscrypt-proxy/releases)

* [DoH-proxy](https://facebookexperimental.github.io/doh-proxy/) by Facebook, supports DNS-over-HTTP/2 (DoH)

### Windows

* [Simple DNSCrypt](https://simplednscrypt.org/) is a simple management tool to configure dnscrypt-proxy on windows based systems.

### iOS

* [DNSCloak](https://itunes.apple.com/us/app/dnscloak-dnscrypt-client/id1330471557?mt=8) takes advantage of the DNS proxy provider system introduced in iOS 11 to bring the DNSCrypt protocol to Apple devices. Devices don’t have to be jailbroken to install this software.

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
