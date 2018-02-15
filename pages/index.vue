<template lang=md>
<v-container text-xs-center>
  <img class=fill-width src="../assets/dnscrypt.png"/>
</v-container>

DNSCrypt is a protocol that authenticates communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven't been tampered with.

It is an open specification, with free and open source reference implementations, and it is not affiliated with any company nor organization.

Free, DNSCrypt-enabled resolvers are available all over the world.

<v-container text-xs-center>
<v-btn class=primary large nuxt router to="/implementations">Let's secure your DNS!</v-btn>
</v-container>

## Why was DNSCrypt developed?

Most applications on your computer, mobile devices and connected gadgets heavily use DNS, a mandatory protocol to communicate over the Internet.

Unfortunately, the security of that important protocol could be vastly improved. Encryption is nonexistent, and authentication mechanisms exist, but are criticized and haven’t received much adoption.

Pioneered by the [OpenBSD](https://openbsd.org/) operating system [circa 2008](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/share/man/man5/resolv.conf.5?rev=1.30&content-type=text/x-cvsweb-markup), systems to tunnel DNS over a secure channel greatly improve DNS security.

The [DNSCrypt protocol](protocol) was then specifically designed for that purpose. DNSCrypt version 2 was specified and implemented in 2013, and is probably the most deployed encrypted DNS protocol to date.

Specifications to leverage generic secure transport protocols such as [DNS-over-HTTP/2](https://datatracker.ietf.org/doc/draft-ietf-doh-dns-over-https/?include_text=1) are also being finalized.

</template>
