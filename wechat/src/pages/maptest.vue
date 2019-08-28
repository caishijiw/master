<template>
  <div class="wrap">
    <button @click="go">
      路线
    </button>
    <button @click="tecent">腾讯地图</button>
   <audio src="http://m10.music.126.net/20190828091137/6c00dd2a304abd6c106b895b77846023/yyaac/015f/0752/035f/656f4d4f6808e336c2e2459602aa697d.m4a"  id="audio" preload="auto" muted controls hidden="true">

  </audio>
    <span class="bf" @click="play()">播放/暂停</span>

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
          name: "我的位置"
        },
        destination: {
          location: {
            lat: 30.266059,
            lng: 120.169311
          },
          name: "lalal"
        },
        isPlaying:false
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
      },
      play(){
        var audio =document.querySelector('#audio');
        debugger
        if(!this.isPlaying){
          audio.play();
          this.isPlaying = true;
        }else{
          audio.pause();
          audio.currentTime = 0;
          this.isPlaying = false;
        }
      },

    }
  }
</script>

<style scoped>

</style>
