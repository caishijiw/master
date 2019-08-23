<template>
  <div style="width:100%;height:100%">
    <div class="map_surrounding" id="map_surrounding">
      <div id="surrounding"></div>
      <mt-swipe
        style="height:124px;"
        ref="mapSwipe"
        class="scroll-info"
        :auto="0"
        :showIndicators="false"
        :defaultIndex="currentDotIdx"
        @change="swipeChange"
      >
        <mt-swipe-item
          v-for="(item,index) in resultsDots"
          :key="item.id"
          :class="currentDotIdx===index?'is-active':''"
        >
          <div class="info" ref="swipeItem">
            <div class="title">
              <img :src="icon">
              {{item.name}}
            </div>
            <div class="address">地址：{{item.address}}</div>
            <div class="go">
              <a
                :href="`https://m.amap.com/detail/index/poiid=${item.id}&sourceApplication=jsapi_detail&src=jsapi`"
              >
                <img src="../../pages/map/images/goto.png" style="width:50px;height:50px;">
              </a>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { getUrlKey } from "../../common/js/util";
import { amapManager } from "vue-amap";
import AMap from "AMap";
const getCenter = function() {
  if (navigator.geolocation) {
    console.log(1111, "aaa");
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position, "position");
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);
      var data = {
        latitude: latitude,
        longitude: longitude
      };
      console.log(data, "data");
      if (typeof callback == "function") {
        callback(data);
      }
    });
  }
  return data;
};

export default {
  name: "map_surrounding",
  data() {
    let self = this;
    return {
      currentDotIdx: 0,
      resultsDots: [],
      icon: require("../../pages/map/images/surrounding/icon_park.png"),
      mapIcon: require("../../pages/map/images/surrounding/map_park.png"),
      activeIcon: require("../../pages/map/images/surrounding/pt_active.png"),
      markers: [],
      amapManager,
      zoom: 12,
      lng: 0,
      lat: 0,
      loaded: false
    };
  },
  mounted() {
    this.center();
  },
  methods: {
    center() {
      let self = this;
      let mapObj = new AMap.Map("surrounding");
      mapObj.plugin("AMap.Geolocation", function() {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        // geolocation.getCurrentPosition();
        geolocation.getCurrentPosition(function(status, result) {
          console.log(status, "status");
          console.log(result, "result");
          if (status == "complete") {
            console.log(result, "Amap");
            self.lng = Number(result.position.lng);
            self.lat = Number(result.position.lat);
            console.log(self.lng, self.lat, "11111");
            self.loadMap();
          } else {
            let that = self;
            //全局的this在方法中不能使用，需要重新定义一下
            let geolocation = new BMap.Geolocation();
            // geolocation.enableSDKLocation();
            //调用百度地图api 中的获取当前位置接口
            geolocation.getCurrentPosition(function(r) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                // var mk = new BMap.Marker(r.point);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);
                that.bd_decrypt(r.point.lng,r.point.lat)

                // that.lng = r.point.lng;
                // that.lat = r.point.lat;
                // that.loadMap();
                //获取当前位置经纬度
                // let myGeo = new BMap.Geocoder();
                // myGeo.getLocation(
                //   new BMap.Point(r.point.lng, r.point.lat),
                //   function(result) {
                //     console.log(result,'result')
                //     if (result) {
                //       //根据当前位置经纬度解析成地址
                //       let point = JSON.stringify(result.point);
                //       let split = point.split(",");
                //       let jingweidu = JSON.parse(split);
                //       that.bd_decrypt(jingweidu.lng,jingweidu.lat)
                //       // that.lng = jingweidu.lng - 0.023528;
                //       // that.lat = jingweidu.lat - 0.076209;
                //       // that.loadMap();
                //     }
                //   }
                // );
              }
            });
            // self.lng = mapObj.getCenter().lng;
            // self.lat = mapObj.getCenter().lat;
            // self.loadMap();
          }
        });
      });
    },
    bd_decrypt(bd_lng, bd_lat) {
      // let X_PI = (Math.PI * 3000.0) / 180.0;
      // let x = bd_lng - 0.0065;
      // let y = bd_lat - 0.006;
      // let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
      // let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
      // let gg_lng = z * Math.cos(theta);
      // let gg_lat = z * Math.sin(theta);
      let self = this
      let baidu = [bd_lng, bd_lat];
      console.log(baidu,'baidu')
      AMap.convertFrom(baidu, 'baidu', function (status, result) {
        console.log(result,status)
        if (result.info === 'ok') {
          let lnglats = result.locations; // Array.<LngLat>
          console.log(self)
          console.log(lnglats,'lnglats')
          self.lng = lnglats[0].Q;
          self.lat = lnglats[0].P;
          self.loadMap();
        }
      });
    },
    loadMap() {
      console.log(this.lng, "lng");
      let mapCeneter = new AMap.Map("surrounding", {
        zoom: 11, //级别
        center: [this.lng, this.lat] //中心点坐标
      });
      this.searchMap();
    },
    searchMap() {
      let self = this;
      let map = new AMap.Map("surrounding", {
        resizeEnable: true
      });

      let myPosition = new AMap.Marker({
        position: [this.lng, this.lat],
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"
      });
      map.add(myPosition);
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        let placeSearch = new AMap.PlaceSearch({
          type: "停车场", // 兴趣点类别
          citylimit: true, //是否强制限制在设置的城市内搜索
          // map: map, // 展现结果的地图实例
          autoFitView: true
        });

        let cpoint = [self.lng, self.lat]; //中心点坐标

        // AMap.event.addListener(placeSearch,"click",function(){
        //   alert(123)
        // });
        // console.log(Amap.event)
        placeSearch.searchNearBy(
          "",
          cpoint,
          600,
          function(status, result) {
            if (status == "complete" && result.info == "OK") {
              console.log(result, "result");
              self.resultsDots = result.poiList.pois;
              console.log(self.resultsDots, "self.resultsDots");
              let latSum = 0;
              let lngSum = 0;
              let AllLocation = [];
              let langAndlat = [];
              if (result.poiList.pois.length > 0) {
                result.poiList.pois.forEach(pois => {
                  // console.log(pois);
                  let { location } = pois;
                  AllLocation.push(location);
                  // console.log(AllLocation,'AllLocation')
                });
                AllLocation.forEach(lngAndLat => {
                  let { lng, lat } = lngAndLat;
                  langAndlat.push([lng, lat]);
                });
                // console.log(langAndlat, "langAndlat");
                self.markers = langAndlat;
                var infoWindow = new AMap.InfoWindow({
                  offset: new AMap.Pixel(0, -30)
                });
                for (var i = 0, marker; i < self.markers.length; i++) {
                  var marker = new AMap.Marker({
                    position: self.markers[i],
                    map: map
                  });
                  marker.content = result.poiList.pois[i].name;
                  marker.index = i;
                  marker.on("click", markerClick);
                  marker.emit("click", { target: marker });
                }
                function markerClick(e) {
                  infoWindow.setContent(e.target.content);
                  self.changeCurrentDot(e.target.index);
                  infoWindow.open(map, e.target.getPosition());
                }
                map.setFitView();

                // console.log(self.markers)
                // for (let i = 0; i < self.markers.length; i++) {
                //   // console.log(self.markers[i],'aaaaaadasdasdsa')
                //   let myObj = self.markers[i];
                //   // console.log(myObj);
                //   let myLngLat = new AMap.LngLat(myObj[0], myObj[1]);
                //   // console.log(myLngLat,1);
                //   let marker = new AMap.Marker({
                //     position: myLngLat,
                //     map: map,
                //     clickable: true,
                //     autoFitView: true
                //   });
                //   // console.log(marker);
                //   AMap.event.addListener(marker, "click", function(i) {
                //     console.log(i.target)
                //   });
                // }
              }
            }
          }
          // function markerClick(){
          //   alert(123132)
          // }
        );
      });
    },
    changeCurrentDot(idx) {
      this.currentDotIdx = idx;
    },
    swipeChange() {
      this.currentDotIdx = this.$refs.mapSwipe.index;
    }
  }
};
</script>

<style scoped>
.bm-view {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
#mapSurrounding .surrounding .BMap_Marker:not(:first-child) img {
  width: 100%;
}
#map_surrounding {
  width: 100%;
  height: 100%;
}
#surrounding {
  width: 100%;
  height: 80%;
}
.scroll-info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20%;
}
.info {
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 16px;
}
.title {
  font-weight: bold;
  width: calc(100% - 100px);
}
.title img {
  vertical-align: middle;
  margin-right: 10px;
  width: 25px;
  height: 25px;
}
.address {
  margin: 10px 0;
  width: calc(100% - 100px);
  line-height: 1.5em;
  font-size: 14px;
}
.go {
  position: absolute;
  right: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>