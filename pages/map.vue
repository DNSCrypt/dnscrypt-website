<template>
  <v-container v-if="showMap">
    <yandex-map
      mapLink="https://api-maps.yandex.ru/2.1/?lang=en_US"
      :coords="[35, 10]"
      :controls="['zoomControl']"
      zoom="2"
      style="width: 100%; height: 600px"
      map-type="map"
    >
      <ymap-marker
        v-for="marker in markers"
        v-bind:key="marker.id"
        marker-id="marker.id"
        marker-type="circle"
        circle-radius="180000"
        :marker-fill="{ color: '#ccccff', opacity: 0.5 }"
        :marker-stroke="{ color: '#224488', width: 2 }"
        v-bind:coords="marker.location"
        :hint-content="marker.name"
        :balloon="{
          header: marker.name,
          body: marker.description,
          footer: marker.proto,
        }"
        :icon="{ color: 'blue', glyph: 'cinema' }"
      ></ymap-marker>
    </yandex-map>
    <v-container text-xs-center
      >Public DNSCrypt servers. Anycast resolvers have a single
      marker.</v-container
    >
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      title: "DNSCrypt - Secure DNS servers map",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A map of free, public DNS servers accessible over DNSCrypt and DoH.",
        },
      ],
    };
  },
  created() {
    axios
      .get(
        "https://download.dnscrypt.info/dnscrypt-resolvers/json/public-resolvers.json"
      )
      .then((response) => {
        this.loading = false;
        this.markers = response.data
          .filter((marker) => marker.location !== undefined)
          .map((marker) => {
            marker.location = [marker.location.lat, marker.location.long];
            return marker;
          });
      })
      .catch((e) => {
        this.loading = false;
        this.errors.push(e);
      });
  },
  data() {
    return {
      showMap: false,
      errors: [],
      markers: [],
    };
  },
  mounted() {
    this.showMap = true;
  },
};
</script>
