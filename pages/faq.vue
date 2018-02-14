<template lang=md>

# FAQ

## What is DNSCrypt?

DNSCrypt is a protocol that authenticates communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven't been tampered with.

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

Unfortunately, DNSSEC has received little adoption yet, remains incompatible with some devices and software pieces, and doesn't prevent the traffic from being monitored.

<v-container text-xs-center>
  <img class=fill-width alt="DNSSEC" src="../assets/DNS-DNSSEC.png"/>
</v-container>

## Why use DNSCrypt?

* <v-icon color=green>thumb_up</v-icon> Encrypts and authenticates the DNS traffic
* <v-icon color=green>thumb_up</v-icon> Specifically designed for DNS
* <v-icon color=green>thumb_up</v-icon> Has been battle tested
* <v-icon color=green>thumb_up</v-icon> A good amount of servers support the protocol
* <v-icon color=green>thumb_up</v-icon> Includes mitigations against DNS amplification attacks
* <v-icon color=green>thumb_up</v-icon> Can use UDP and TCP for transport
* <v-icon color=green>thumb_up</v-icon> Inherently supports reordering, parallelism and priorities
* <v-icon color=green>thumb_up</v-icon> Keeps a minimal number of states server-side
* <v-icon color=green>thumb_up</v-icon> Very simple to implement; requires only two standard cryptographic constructions
* <v-icon color=green>thumb_up</v-icon> Doesn't require a TLS stack, which vastly reduces the attack surface
* <v-icon color=green>thumb_up</v-icon> Doesn't have any insecure parameters
* <v-icon color=green>thumb_up</v-icon> Doesn't rely on X509 certificates and Certificate Authorities
* <v-icon color=green>thumb_up</v-icon> Cannot be MITM'd by standard tools
* <v-icon color=green>thumb_up</v-icon> Enforces certificate signatures
* <v-icon color=green>thumb_up</v-icon> Has a complete specification since 2013
* <v-icon color=green>thumb_up</v-icon> Post-quantum version in developement
* <v-icon color=red>thumb_down</v-icon> Does not have an RFC

<v-container text-xs-center>
  <img class=fill-width alt="DNSCrypt with DNSSEC" src="../assets/DNSCrypt-DNSSEC.png"/>
</v-container>

## How do I get started with using DNSCrypt?

See [Client Implementations](/implementations#client-implementations)

## How do I get started with running my own DNSCrypt server?

See [Server Implementations](/implementations#server-implementations")

## Other protocols

### DNS over TLS ([RFC7858](https://tools.ietf.org/html/rfc7858))

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=green>thumb_up</v-icon> Has an increasing number of servers in deployment
* <v-icon color=green>thumb_up</v-icon> Partially specified as a RFC
* <v-icon color=green>thumb_up</v-icon> [Many implementations completed at various stages](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Implementation+Status)
* <v-icon color=red>thumb_down</v-icon> Uses a dedicated port (853) likely to be blocked or monitored in situations where DNS encryption is useful
* <v-icon color=red>thumb_down</v-icon> Initial connection is slow due to the long handshake (until TLS 1.3 is deployed)
* <v-icon color=red>thumb_down</v-icon> Not well understood even by its proponents
* <v-icon color=red>thumb_down</v-icon> Padding rules haven't been specified
* <v-icon color=red>thumb_down</v-icon> Requires a full TLS stack, introducing a large attack surface
* <v-icon color=red>thumb_down</v-icon> Difficult to implement securely. Validating TLS certificates in non-browser software is [the most dangerous code in the world](https://crypto.stanford.edu/~dabo/pubs/abstracts/ssl-client-bugs.html)
* <v-icon color=red>thumb_down</v-icon> Readily compatible with industry-standard TLS interception/monitoring devices
* <v-icon color=red>thumb_down</v-icon> Requires TCP
* <v-icon color=red>thumb_down</v-icon> Requires sessions tracking on the server
* <v-icon color=red>thumb_down</v-icon> TLS is a generic transport mechanism. It doesn't support reordering and parallelism and doesn't include any ways to manage priorities.
* <v-icon color=red>thumb_down</v-icon> Key management can be surprisingly hard
* <v-icon color=red>thumb_down</v-icon> Allows insecure algorithms and parameters

### [DNS over HTTPS (DoH)](https://tools.ietf.org/html/draft-ietf-doh-dns-over-https-03)

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=green>thumb_up</v-icon> New implementations are being developed
* <v-icon color=green>thumb_up</v-icon> The minimum version of HTTP used by DoH should be HTTP/2
* <v-icon color=green>thumb_up</v-icon> Uses standard HTTP/2, on the standard port (443).
* <v-icon color=green>thumb_up</v-icon> Less likely to be blocked than other options.
* <v-icon color=green>thumb_up</v-icon> Can be trivially deployed on any web server, and run along existing websites; DNS response are served like simple web pages
* <v-icon color=green>thumb_up</v-icon> Can share the same infrastructure as existing websites, and share the same certificates
* <v-icon color=green>thumb_up</v-icon> Simple to implement over any existing web stack
* <v-icon color=green>thumb_up</v-icon> Immediately compatible with caching proxies and CDNs
* <v-icon color=green>thumb_up</v-icon> Allows web browsers to perform DNS queries using Javascript
* <v-icon color=green>thumb_up</v-icon> Supports reordering, parallelism and priorities, thanks to HTTP/2
* <v-icon color=green>thumb_up</v-icon> Already implemented by Google DNS (albeit not the latest draft)
* <v-icon color=green>thumb_up</v-icon> Supported by CuRL
* <v-icon color=red>thumb_down</v-icon> Requires a full TLS stack and a web server
* <v-icon color=red>thumb_down</v-icon> Interception/monitoring tools are readily available
* <v-icon color=red>thumb_down</v-icon> Key management can be surprisingly hard
* <v-icon color=red>thumb_down</v-icon> Allows insecure algorithms and parameters
* <v-icon color=red>thumb_down</v-icon> Requires TCP
* <v-icon color=red>thumb_down</v-icon> RFC is in Draft stage

### DNS-over-DTLS ([RFC8094](https://tools.ietf.org/html/rfc8094))

* <v-icon color=red>thumb_down</v-icon> No known implementations
* <v-icon color=red>thumb_down</v-icon> Many security vulnerabilities in OpenSSL due to DTLS

### [DNS over QUIC](https://tools.ietf.org/html/draft-huitema-quic-dnsoquic-03)

* <v-icon color=green>thumb_up</v-icon> Full encryption of the DNS protocol
* <v-icon color=red>thumb_down</v-icon> Uses a dedicated port: 784
* <v-icon color=red>thumb_down</v-icon> RFC is in Draft stage

</template>
