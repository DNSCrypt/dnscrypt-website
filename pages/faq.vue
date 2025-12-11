<template lang=md>

# Frequently Asked Questions

## What is DNSCrypt?

<a href="https://dnscrypt.info/">DNSCrypt</a> is a protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven't been tampered with.

It is an open specification, with free and open source reference implementations, and it is not affiliated with any company or organization.

## What is DNS?

DNS is a globally distributed database that maps names to values. It is constantly used by all applications communicating over the Internet and private networks.

It typically translates names such as `www.google.com` into IP addresses such as `216.58.199.36`, so that devices can determine the path to follow in order to communicate with each other.

So what is the problem?

Originally, the DNS protocol didn't include any encryption nor authentication mechanisms; any device between a client and a DNS server could monitor and interfere with DNS traffic, without this being detected by the client.

Attackers on a local network can abuse this to conduct trivial attacks. More recently, malicious DNS servers have been massively used by malware.

The DNS security extensions (DNSSEC) were designed to partially mitigate this design flaw, by adding digital signatures to DNS responses.

<v-container text-xs-center>
  <img class=fill-width alt="DNS" src="../assets/DNS.png"/>
</v-container>

## What is DNSSEC

DNSSEC is a DNS Extension that allows a client to validate the DNS response on supported domains and TLDs.

Resolvers check the digital signature of DNS responses to verify that the data match what the zone owner initially configured.

Unfortunately, [DNSSEC has received limited adoption](https://labs.ripe.net/Members/rene_bakker/bang-for-the-buck-the-adoption-of-dnssec-and-return-on-investment), remains incompatible with some devices and software pieces, and doesn't prevent the traffic from being monitored.

<v-container text-xs-center>
  <img class=fill-width alt="DNSSEC" src="../assets/DNS-DNSSEC.png"/>
</v-container>

## Why use DNSCrypt?

### Security

* <v-icon color=green>thumb_up</v-icon> No insecure bootstrap: encryption starts from the very first packet, unlike DoT/DoH which require resolving a hostname first
* <v-icon color=green>thumb_up</v-icon> Doesn't rely on X509 certificates and Certificate Authorities; uses static public keys verified through cryptographic signatures
* <v-icon color=green>thumb_up</v-icon> Resistant to CA compromise and state-level coercion
* <v-icon color=green>thumb_up</v-icon> Cannot be MITM'd by standard TLS interception tools
* <v-icon color=green>thumb_up</v-icon> Doesn't require a TLS stack, which vastly reduces the attack surface
* <v-icon color=green>thumb_up</v-icon> Doesn't have any insecure parameters or algorithms
* <v-icon color=green>thumb_up</v-icon> Includes mitigations against DNS amplification attacks
* <v-icon color=green>thumb_up</v-icon> Can hide client IP addresses from servers (Anonymized DNSCrypt)

### Performance

* <v-icon color=green>thumb_up</v-icon> Zero-RTT operation: no handshake delay
* <v-icon color=green>thumb_up</v-icon> Native parallelism: multiple queries in flight simultaneously
* <v-icon color=green>thumb_up</v-icon> Lower latency than DoH, even when DoH uses HTTP/3
* <v-icon color=green>thumb_up</v-icon> Can use UDP and TCP for transport
* <v-icon color=green>thumb_up</v-icon> Inherently supports reordering, parallelism and priorities
* <v-icon color=green>thumb_up</v-icon> Keeps a minimal number of states server-side

### Decentralization and censorship resistance

* <v-icon color=green>thumb_up</v-icon> Designed to be distributed: anyone can run a resolver without corporate gatekeepers
* <v-icon color=green>thumb_up</v-icon> No SNI, no HTTP signature, no fixed port—harder to block and fingerprint
* <v-icon color=green>thumb_up</v-icon> Supports anonymized DNS relays for additional privacy
* <v-icon color=green>thumb_up</v-icon> Regular DNS and DNSCrypt can share the same port (port 443 is recommended due to routers frequently hijacking port 53)
* <v-icon color=green>thumb_up</v-icon> DNSCrypt and DoH can also be served simultaneously on the same port

### Protocol design

* <v-icon color=green>thumb_up</v-icon> Specifically designed for DNS, not a generic transport layer
* <v-icon color=green>thumb_up</v-icon> Very simple to implement; requires only two standard cryptographic constructions
* <v-icon color=green>thumb_up</v-icon> Built-in query padding
* <v-icon color=green>thumb_up</v-icon> Multiple crypto suites (including X25519, Ed25519)
* <v-icon color=green>thumb_up</v-icon> Extensible without requiring cross-layer redesigns
* <v-icon color=green>thumb_up</v-icon> A prototype using post-quantum cryptography is available
* <v-icon color=green>thumb_up</v-icon> Has a complete specification since 2013
* <v-icon color=green>thumb_up</v-icon> Battle tested since 2011
* <v-icon color=red>thumb_down</v-icon> The <a href="https://datatracker.ietf.org/doc/draft-denis-dprive-dnscrypt/">RFC</a> is still a work in progress

<v-container text-xs-center>
  <img class=fill-width alt="DNSCrypt with DNSSEC" src="../assets/DNSCrypt-DNSSEC.png"/>
</v-container>

## How do I get started with using DNSCrypt?

See <router-link to="/implementations">Client Implementations</router-link>

## How do I get started with running my own DNSCrypt server?

See <router-link to="/implementations#server-implementations">Server Implementations</router-link>

## Other protocols

### [DNS over SSH]

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=green>thumb_up</v-icon> Can be deployed on any system already running an SSH server
* <v-icon color=green>thumb_up</v-icon> Battle-tested, widely implemented transport protocol
* <v-icon color=green>thumb_up</v-icon> Doesn't depend on root CAs
* <v-icon color=green>thumb_up</v-icon> Can use DNSSEC or private CAs for public key verification
* <v-icon color=green>thumb_up</v-icon> Supports multiple authentication mechanisms
* <v-icon color=green>thumb_up</v-icon> Doesn't require a TLS stack; modern implementations do not even require OpenSSL any more
* <v-icon color=red>thumb_down</v-icon> Very tricky to configure securely
* <v-icon color=red>thumb_down</v-icon> Requires TCP
* <v-icon color=red>thumb_down</v-icon> Current implementations don't scale well server-side
* <v-icon color=red>thumb_down</v-icon> UDP queries [require TCP encapsulation](http://zarb.org/~gc/html/udp-in-ssh-tunneling.html)
* <v-icon color=red>thumb_down</v-icon> The SFTP protocol supports reordering and parallelism, but common DNS-over-SSH tunelling cannot use this

### DNS over TLS ([RFC7858](https://tools.ietf.org/html/rfc7858))

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=green>thumb_up</v-icon> Specified as an RFC
* <v-icon color=green>thumb_up</v-icon> [Many implementations available](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Implementation+Status)
* <v-icon color=red>thumb_down</v-icon> Insecure bootstrap: requires resolving the resolver's hostname through plaintext DNS before encryption can begin
* <v-icon color=red>thumb_down</v-icon> Relies on the global TLS PKI system, vulnerable to CA compromises and state-level coercion
* <v-icon color=red>thumb_down</v-icon> Uses a dedicated port (853) that is trivially blocked in situations where DNS encryption is most needed
* <v-icon color=red>thumb_down</v-icon> Requires a full TLS stack, introducing a large attack surface
* <v-icon color=red>thumb_down</v-icon> Readily compatible with industry-standard TLS interception/monitoring devices
* <v-icon color=red>thumb_down</v-icon> Difficult to implement securely. Validating TLS certificates in non-browser software is [the most dangerous code in the world](https://crypto.stanford.edu/~dabo/pubs/abstracts/ssl-client-bugs.html)
* <v-icon color=red>thumb_down</v-icon> Initial connection is slow due to the TLS handshake
* <v-icon color=red>thumb_down</v-icon> Requires TCP; no UDP support
* <v-icon color=red>thumb_down</v-icon> TLS is a generic transport mechanism that doesn't support reordering and parallelism or priorities
* <v-icon color=red>thumb_down</v-icon> Allows insecure algorithms and parameters
* <v-icon color=red>thumb_down</v-icon> Padding rules not well specified
* <v-icon color=red>thumb_down</v-icon> Questionable practical benefits over DoH

### [DNS over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.txt)

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=green>thumb_up</v-icon> Uses standard HTTP/2 or HTTP/3, on the standard port (443)
* <v-icon color=green>thumb_up</v-icon> Less likely to be blocked than DoT
* <v-icon color=green>thumb_up</v-icon> Can be deployed on any web server alongside existing websites
* <v-icon color=green>thumb_up</v-icon> Immediately compatible with caching proxies and CDNs
* <v-icon color=green>thumb_up</v-icon> Specified as an RFC
* <v-icon color=green>thumb_up</v-icon> Widely supported in browsers
* <v-icon color=red>thumb_down</v-icon> Insecure bootstrap: requires resolving the resolver's hostname through plaintext DNS before encryption can begin
* <v-icon color=red>thumb_down</v-icon> Relies on the global TLS PKI system, vulnerable to CA compromises and state-level coercion
* <v-icon color=red>thumb_down</v-icon> Has centralized DNS resolution among major CDN providers (Cloudflare, Google), capturing DNS analytics
* <v-icon color=red>thumb_down</v-icon> Higher latency than DNSCrypt, even when using HTTP/3
* <v-icon color=red>thumb_down</v-icon> Requires a full TLS stack and a web server, introducing a large attack surface
* <v-icon color=red>thumb_down</v-icon> TLS interception/monitoring tools are readily available
* <v-icon color=red>thumb_down</v-icon> SNI exposes the resolver hostname, making traffic easily identifiable and blockable
* <v-icon color=red>thumb_down</v-icon> Provides more information than regular DNS to resolver operators for client fingerprinting
* <v-icon color=red>thumb_down</v-icon> Allows insecure algorithms and parameters
* <v-icon color=red>thumb_down</v-icon> Requires TCP
* <v-icon color=red>thumb_down</v-icon> Relay protocols (ODoH) leak more information than expected

### DNS-over-DTLS ([RFC8094](https://tools.ietf.org/html/rfc8094))

* <v-icon color=red>thumb_down</v-icon> No known implementations
* <v-icon color=red>thumb_down</v-icon> Many security vulnerabilities in OpenSSL due to DTLS

### [DNS over QUIC] ([RFC9250](https://tools.ietf.org/html/rfc9250))

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=red>thumb_down</v-icon> Uses a dedicated port: 853, can't use port 53
* <v-icon color=red>thumb_down</v-icon> Client devices and IP addresses can be linked
* <v-icon color=red>thumb_down</v-icon> No clear advantage over HTTP/3

## Practical considerations

DNSCrypt offers security advantages that DoT and DoH cannot match: no insecure bootstrap, no CA dependency, and resistance to traffic analysis. Combined with its lower latency and decentralized design, DNSCrypt remains the strongest choice for DNS security and privacy.

</template>

<script>
export default {
  head() {
    return {
      title: "DNSCrypt FAQ - DNSCrypt vs DoH vs DoT Comparison",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Frequently asked questions about DNSCrypt, DNS-over-HTTPS (DoH), and DNS-over-TLS (DoT). Compare secure DNS protocols and understand DNS encryption benefits.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "DNSCrypt FAQ - DNSCrypt vs DoH vs DoT Comparison | DNSCrypt",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Frequently asked questions about DNSCrypt, DNS-over-HTTPS (DoH), and DNS-over-TLS (DoT). Compare secure DNS protocols and understand DNS encryption benefits.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://dnscrypt.info/faq",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "DNSCrypt FAQ - DNSCrypt vs DoH vs DoT Comparison | DNSCrypt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Frequently asked questions about DNSCrypt, DNS-over-HTTPS (DoH), and DNS-over-TLS (DoT). Compare secure DNS protocols.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://dnscrypt.info/faq",
        },
      ],
    };
  },
};
</script>
