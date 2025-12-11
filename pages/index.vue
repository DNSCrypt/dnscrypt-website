<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <img class="hero-logo" src="../assets/dnscrypt.png" alt="DNSCrypt" />
        <h1>Secure Your DNS</h1>
        <p class="hero-subtitle">
          DNSCrypt encrypts, authenticates and optionally anonymizes communications
          between your DNS client and resolver. It prevents DNS spoofing with
          cryptographic signatures to verify responses haven't been tampered with.
        </p>
        <v-btn class="primary cta-button" large nuxt to="/implementations">
          Get Started
        </v-btn>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-title">
        <h2>Why DNSCrypt?</h2>
        <p>A protocol built for privacy, security, and performance from the ground up.</p>
      </div>

      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>lock</v-icon>
              </div>
              <div class="feature-title">Secure from the first packet</div>
              <div class="feature-description">
                Unlike DNS-over-TLS and DNS-over-HTTPS, which require resolving a hostname
                through plaintext DNS first, DNSCrypt clients are configured with an IP address
                and a public key. Encryption starts from the very first query.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>verified_user</v-icon>
              </div>
              <div class="feature-title">No Certificate Authorities</div>
              <div class="feature-description">
                DNSCrypt eliminates dependency on certificate authorities entirely. Each resolver
                maintains a static public key verified through cryptographic signatures, making it
                resistant to CA compromises and state-level coercion.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>device_hub</v-icon>
              </div>
              <div class="feature-title">Decentralized by design</div>
              <div class="feature-description">
                Anyone can run a resolver without requiring approval from corporate gatekeepers.
                This contrasts with DoH's concentration among major CDN providers like Cloudflare and Google.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>visibility_off</v-icon>
              </div>
              <div class="feature-title">Censorship resistant</div>
              <div class="feature-description">
                DNSCrypt traffic has no SNI, no HTTP signature, and no fixed port. Combined with
                Anonymized DNS relays, it offers strong protection against traffic analysis and blocking.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>flash_on</v-icon>
              </div>
              <div class="feature-title">High performance</div>
              <div class="feature-description">
                Zero-RTT operation with no handshake delay, native parallelism with multiple queries
                in flight, and consistently lower latency than DoH even when DoH uses HTTP/3.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 lg4 pa-3>
          <v-card class="feature-card" height="100%">
            <v-card-text>
              <div class="feature-icon">
                <v-icon>extension</v-icon>
              </div>
              <div class="feature-title">Extensible protocol</div>
              <div class="feature-description">
                Built-in query padding, multiple crypto suites (X25519, Ed25519), anonymized relays,
                and room to evolve without requiring cross-layer redesigns.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <!-- Info Section -->
    <section class="info-section">
      <v-layout row wrap>
        <v-flex xs12 md6 pa-3>
          <v-card class="info-card" height="100%">
            <v-card-text>
              <h3>History</h3>
              <p>
                The <a href="https://datatracker.ietf.org/doc/draft-denis-dprive-dnscrypt/">DNSCrypt protocol</a>
                was specifically designed for secure DNS communications. DNSCrypt version 2 was
                specified and implemented in 2013.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md6 pa-3>
          <v-card class="info-card" height="100%">
            <v-card-text>
              <h3>Anonymized DNS</h3>
              <p>
                In October 2019, <a href="https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS">Anonymized DNS</a>
                was announced. It improves over the original protocol and DoH by hiding client IP addresses
                in addition to encrypting queries.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <!-- Community Section -->
    <section class="community-section">
      <v-card class="community-card">
        <v-card-text class="text-xs-center">
          <h3>Join the Community</h3>
          <p>
            Connect with other DNSCrypt users, ask questions, and stay updated on the latest developments.
          </p>
          <v-btn
            outline
            color="primary"
            href="https://www.reddit.com/r/dnscrypt/"
            target="_blank"
          >
            Visit r/dnscrypt
          </v-btn>
        </v-card-text>
      </v-card>
    </section>
  </div>
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

<style lang="stylus" scoped>
.home-page
  margin: -24px -16px 0 -16px

.hero-section
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)
  padding: 5rem 2rem
  text-align: center
  position: relative
  overflow: hidden

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

.hero-content
  position: relative
  z-index: 1
  max-width: 800px
  margin: 0 auto

.hero-logo
  max-width: 350px
  width: 100%
  margin-bottom: 2rem
  filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.3))

  @media (max-width: 600px)
    max-width: 220px

.hero-section h1
  color: white
  font-size: 3rem
  font-weight: 700
  margin: 0 0 1.5rem 0
  letter-spacing: -0.5px

  @media (max-width: 600px)
    font-size: 2rem

.hero-subtitle
  color: rgba(255, 255, 255, 0.9)
  font-size: 1.2rem
  line-height: 1.8
  margin: 0 auto 2.5rem auto
  max-width: 650px

  @media (max-width: 600px)
    font-size: 1rem

.cta-button
  height: 56px !important
  padding: 0 40px !important
  font-size: 1.1rem !important
  border-radius: 28px !important
  background: linear-gradient(135deg, #00bfa5, #00897b) !important
  box-shadow: 0 8px 30px rgba(0, 191, 165, 0.4) !important

  &:hover
    transform: translateY(-3px)
    box-shadow: 0 12px 40px rgba(0, 191, 165, 0.5) !important

.features-section
  padding: 5rem 1rem
  max-width: 1200px
  margin: 0 auto

.section-title
  text-align: center
  margin-bottom: 3rem

  h2
    font-size: 2.5rem
    font-weight: 700
    color: #1a202c
    margin: 0 0 1rem 0

  p
    color: #718096
    font-size: 1.15rem
    margin: 0

.feature-card
  border-radius: 20px !important
  border: none !important
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important
  transition: all 0.3s ease !important

  &:hover
    transform: translateY(-8px)
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important

  .v-card__text
    padding: 2rem !important

.feature-icon
  width: 64px
  height: 64px
  border-radius: 16px
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 1.25rem
  background: linear-gradient(135deg, #00bfa5, #26a69a)
  box-shadow: 0 8px 20px rgba(0, 191, 165, 0.3)

  .v-icon
    color: white !important
    font-size: 28px !important

.feature-title
  font-size: 1.25rem
  font-weight: 600
  color: #1a202c
  margin-bottom: 0.75rem

.feature-description
  color: #4a5568
  font-size: 0.95rem
  line-height: 1.7

.info-section
  padding: 0 1rem 3rem 1rem
  max-width: 1200px
  margin: 0 auto

.info-card
  border-radius: 20px !important
  background: linear-gradient(135deg, #f8fafc, #edf2f7) !important
  border: none !important
  box-shadow: none !important

  .v-card__text
    padding: 2rem !important

  h3
    font-size: 1.5rem
    font-weight: 600
    color: #1a202c
    margin: 0 0 1rem 0

  p
    color: #4a5568
    margin: 0
    line-height: 1.7

  a
    color: #0d47a1
    font-weight: 500

    &:hover
      color: #00bfa5

.community-section
  padding: 0 1rem 4rem 1rem
  max-width: 800px
  margin: 0 auto

.community-card
  border-radius: 20px !important
  background: linear-gradient(135deg, #1a237e, #0d47a1) !important
  border: none !important

  .v-card__text
    padding: 3rem 2rem !important

  h3
    font-size: 1.75rem
    font-weight: 600
    color: white
    margin: 0 0 1rem 0

  p
    color: rgba(255, 255, 255, 0.85)
    margin: 0 0 1.5rem 0
    font-size: 1.1rem

  .v-btn
    border-color: white !important
    color: white !important
    border-radius: 12px !important
    font-weight: 500 !important
    text-transform: none !important

    &:hover
      background: rgba(255, 255, 255, 0.1) !important
</style>
