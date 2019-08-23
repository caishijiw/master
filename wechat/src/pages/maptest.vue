<template>
  <div class="wrap">
    <button @click="go">
      路线
    </button>
    <button @click="tecent">腾讯地图</button>
  </div>
</template>

<script>
  export default {
    name: "guideTour",
    data() {
      return {
        mydestination: {
          lat: 30.249089,
          lng: 120.127342,
          name: "我家"
        },
        destination: {
          location: {
            lat: 30.266059,
            lng: 120.169311
          },
          name: "lalal"
        }
      }
    },
    methods: {
      go() {
        this.getGuide(this.mydestination.lat, this.mydestination.lng, this.mydestination.name ,this.destination.location.lat, this.destination.location.lng, this.destination.name, )
      },
      getGuide(orignLat, originLng,originName, destinationLat, destinationLng,destinationName) {
        window.location.href = "http://api.map.baidu.com/direction?origin=latlng:"+orignLat+","+originLng+"|name:"+originName+"&destination=latlng:"+destinationLat+","+ destinationLng +"|name:"+destinationName+"&mode=driving&region=浙江&output=html&src=webapp.baidu.openAPIdemo"
      },

      tecent() {
        this.getTecentroute(this.mydestination.name, this.mydestination.lat, this.mydestination.lng, this.destination.location.lat, this.destination.location.lng, this.destination.name)
      },
      getTecentroute(orginName, orignLat, originLng, destinationLat, destinationLng, destinationName) {
        window.location.href = " https://apis.map.qq.com/uri/v1/routeplan?type=drive&from=" + orginName + "&fromcoord=" + orignLat + "," + originLng + "&to=" + destinationName + "&tocoord=" + destinationLat + "," + destinationLng + "&policy=1&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
      }
    }
  }
</script>

<style scoped>

</style>
