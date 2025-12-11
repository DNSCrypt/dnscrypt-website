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

<v-container class="mt-5">
<h2 class="text-xs-center mb-4">Why DNSCrypt?</h2>
<v-layout row wrap>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">lock</v-icon>Secure from the first packet</div>
          <div class="mt-2">Unlike DNS-over-TLS and DNS-over-HTTPS, which require resolving a hostname through plaintext DNS first, DNSCrypt clients are configured with an IP address and a public key. Encryption starts from the very first query.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">verified_user</v-icon>No Certificate Authorities</div>
          <div class="mt-2">DNSCrypt eliminates dependency on certificate authorities entirely. Each resolver maintains a static public key verified through cryptographic signatures, making it resistant to CA compromises and state-level coercion.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">device_hub</v-icon>Decentralized by design</div>
          <div class="mt-2">Anyone can run a resolver without requiring approval from corporate gatekeepers. This contrasts with DoH's concentration among major CDN providers like Cloudflare and Google.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">visibility_off</v-icon>Censorship resistant</div>
          <div class="mt-2">DNSCrypt traffic has no SNI, no HTTP signature, and no fixed port. Combined with Anonymized DNS relays, it offers strong protection against traffic analysis and blocking.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">flash_on</v-icon>High performance</div>
          <div class="mt-2">Zero-RTT operation with no handshake delay, native parallelism with multiple queries in flight, and consistently lower latency than DoH—even when DoH uses HTTP/3.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md6 pa-2>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <div class="headline"><v-icon color="green" class="mr-2">extension</v-icon>Extensible protocol</div>
          <div class="mt-2">Built-in query padding, multiple crypto suites (X25519, Ed25519), anonymized relays, and room to evolve without requiring cross-layer redesigns.</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</v-layout>
</v-container>

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
