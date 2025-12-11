<template lang=md>
<v-container text-xs-center>
  <img class=fill-width src="../assets/dnscrypt.png" alt=DNSCrypt />
</v-container>

<a href="https://dnscrypt.info/">DNSCrypt</a> is a protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven't been tampered with.

It is an open specification, with free and open source reference implementations, and it is not affiliated with any company or organization.

Free, DNSCrypt-enabled resolvers are available all over the world.

<v-container text-xs-center>
<v-btn class=primary large nuxt to="/implementations">Let's secure your DNS!</v-btn>
</v-container>

## Why DNSCrypt?

### Secure from the first packet

Unlike DNS-over-TLS and DNS-over-HTTPS, which require resolving a hostname through plaintext DNS first, DNSCrypt clients are configured with an IP address and a public key. This enables encryption from the very first query, with no insecure bootstrap procedure.

### No dependency on Certificate Authorities

DNSCrypt eliminates dependency on certificate authorities entirely. Instead of relying on the global TLS PKI system, each resolver maintains a static public key verified through cryptographic signatures. This makes the protocol resistant to CA compromises and state-level coercion.

### Designed for decentralization

DNSCrypt was explicitly designed to be distributed. Anyone can run a resolver without requiring approval from corporate gatekeepers. This contrasts with DoH's concentration among major CDN providers.

### Censorship resistant

DNSCrypt traffic has no SNI, no HTTP signature, and no fixed port. Combined with [Anonymized DNS relays](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS), it offers strong protection against traffic analysis and blocking.

### High performance

DNSCrypt offers zero-RTT operation with no handshake delay, native parallelism with multiple queries in flight, and consistently lower latency than DoH—even when DoH uses HTTP/3.

### Extensible protocol

The protocol supports built-in query padding, multiple crypto suites (including X25519 and Ed25519), anonymized relays, and can evolve without requiring cross-layer redesigns.

## History

The [DNSCrypt protocol](https://datatracker.ietf.org/doc/draft-denis-dprive-dnscrypt/) was specifically designed for secure DNS communications. DNSCrypt version 2 was specified and implemented in 2013.

## Anonymized DNS

In October 2019, [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS) was announced.

Anonymized DNS improves over the original protocol and DoH by hiding client IP addresses in addition to encrypting queries.

## Community

Feel free to join the [subreddit dedicated to discussing DNSCrypt](https://www.reddit.com/r/dnscrypt/)!
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'DNSCrypt',
            description: 'A protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing.',
            url: 'https://dnscrypt.info',
            applicationCategory: 'SecurityApplication',
            operatingSystem: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            author: {
              '@type': 'Organization',
              name: 'DNSCrypt Project',
              url: 'https://dnscrypt.info'
            }
          }
        }
      ]
    };
  }
};
</script>
