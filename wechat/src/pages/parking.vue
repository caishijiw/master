<template>
  <div style="width:100%;height:100%">
    <div class="map_surrounding" id="map_surrounding">
      <div id="surrounding"></div>
      <div class="card">
        <div class="Navigation">
          <img src="../assets/images/Navigation.png" alt />
        </div>
        <div style="width:91%;margin:0 auto;">
          <div class="parkName">停车场名字</div>
          <div class="parkInfo">
            <div class="park_image">
              <img src="https://cn.vuejs.org/images/logo.png" alt />
            </div>
            <div class="park_flex">
              <div class="park_money">
                <span class="Fee_standard">收费标准</span>
                <div>
                  <span class="how_money">免费</span>
                  <span class="Price">/小时</span>
                </div>
              </div>
              <div class="park_cars">
                <span class="Fee_standard">剩余车位</span>
                <span class="cars">215</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parking",
  data() {
    let self = this;
    return {
      resultsDots: [],
      icon: require("../assets/images/icon_park.png"),
      mapIcon: require("../assets/images/map_park.png"),
      activeIcon: require("../assets/images/pt_active.png"),
      markers: [],
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
      console.log(mapObj, "mapObj");
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
          console.log(result, "Amap");
          self.lng = Number(result.position.lng);
          self.lat = Number(result.position.lat);
          console.log(self.lng, self.lat, "11111");
          self.loadMap();
        });
      });
    },
    bd_decrypt(bd_lng, bd_lat) {
      let self = this;
      let baidu = [bd_lng, bd_lat];
      console.log(baidu, "baidu");
      AMap.convertFrom(baidu, "baidu", function(status, result) {
        console.log(result, status);
        if (result.info === "ok") {
          let lnglats = result.locations; // Array.<LngLat>
          console.log(self);
          console.log(lnglats, "lnglats");
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
        placeSearch.searchNearBy("", cpoint, 600, function(status, result) {
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
                console.log(AllLocation, "AllLocation");
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
                self.changeCurrentDot(e, e.target.index);
                infoWindow.open(map, e.target.getPosition());
              }
              map.setFitView();
            }
          }
        });
      });
    },
    changeCurrentDot(e, idx) {
      console.log(e, "e");
      this.currentDotIdx = idx;
    }
  }
};
</script>

<style scoped>
#mapSurrounding .surrounding .BMap_Marker:not(:first-child) img {
  width: 100%;
}
#map_surrounding {
  width: 100%;
  height: 100%;
}
#surrounding {
  width: 100%;
  height: 76%;
}
span {
  display: inline-block;
}
.card {
  width: 100%;
  height: 20%;
  background-color: #fff;
  position: relative;
}
.Navigation {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 0.68rem;
  top: -1.2rem;
}
.Navigation > img {
  width: 100%;
  height: 100%;
}
.parkName {
  text-align: initial;
  font-size: 0.426rem;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: rgba(66, 73, 82, 1);
  line-height: 0.64rem;
  margin: 0.48rem 0;
}
.parkInfo {
  display: flex;
}
.park_image {
  display: inline-block;
  width: 2.133rem;
  height: 2.133rem;
}
.park_image > img {
  width: 100%;
  height: 100%;
}
.park_flex {
  width: 4.746rem;
  margin-left: 0.89rem;
}
.park_money {
  display: flex;
  justify-content: space-between;
}
.park_cars {
  display: flex;
  justify-content: space-between;
}
.Fee_standard {
  font-size: 0.32rem;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: rgba(66, 73, 82, 1);
  line-height: 1.013rem;
}
.how_money {
  font-size: 0.48rem;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: rgba(255, 147, 19, 1);
  line-height: 0.8rem;
  margin-right: 0.49rem;
}
.Price {
  font-size: 0.32rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(146, 146, 146, 1);
  line-height: 0.44rem;
}
.cars {
  font-size: 0.48rem;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 0.9rem;
  margin-right: 1.55rem;
}
</style>
