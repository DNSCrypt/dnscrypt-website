<template>
  <v-container>
      <div>
         <yandex-map v-if="showMap"
            mapLink="https://api-maps.yandex.ru/2.1/?lang=en_US"
            :coords="[48.51, 2.27]"
            zoom="2"
            :controls="[]"
            style="width: 100%; height: 800px;"
            :cluster-options="{
              1: {clusterDisableClickZoom: true}
            }"
            map-type="map">
            <ymap-marker v-for="marker in markers" v-bind:key="marker.id"
                marker-id="marker.id"
                marker-type="placemark"
                v-bind:coords="marker.location"
                :hint-content="marker.name"
                :balloon="{header: marker.name, body: marker.description, footer: marker.proto}"
                :icon="{color: 'blue'}"
                cluster-name="1">
            </ymap-marker>
          </yandex-map>
      </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get(
        "https://download.dnscrypt.info/dnscrypt-resolvers/json/public-resolvers.json"
      )
      .then(response => {
        this.loading = false;
        this.markers = response.data
          .filter(marker => marker.location !== undefined)
          .map(marker => {
            marker.location = [marker.location.lat, marker.location.long];
            return marker;
          });
      })
      .catch(e => {
        this.loading = false;
        this.errors.push(e);
      });
  },
  data() {
    return {
      showMap: false,
      errors: [],
      markers: []
    };
  },
  mounted() {
    this.showMap = true;
  }
};
</script>