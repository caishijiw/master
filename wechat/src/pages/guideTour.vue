<template>
  <div style="width:100%;height:100%;position:relative;">
    <div class="float">
      <div class="guanguang" @click="guanguang()">
        <img src="../../static/images/guanguang.png" alt srcset />
        <div>宜游指数</div>
      </div>
      <div class="xian"></div>
      <div class="xianlu" @click="xianlu()">
        <img src="../../static/images/xianlu.png" alt srcset />
        <div>线路推荐</div>
      </div>
    </div>
    <div class="map_surrounding" id="map_surrounding">
      <div id="surrounding"></div>
      <div class="card">
        <div class="Navigation">
          <img src="../../static/images/Navigation.png" alt />
        </div>
        <div style="width:91%;margin:0 auto;padding-bottom:0.373rem;">
          <div class="parkName">景点名称</div>
          <div class="parkInfo">
            <div class="park_image">
              <img src="https://cn.vuejs.org/images/logo.png" alt />
            </div>
            <div
              class="park_flex"
            >介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍介绍介绍介绍绍介绍介绍介绍介绍绍介绍介绍介绍介绍绍介绍介绍介绍介绍</div>
          </div>
        </div>
        <div class="footer">
          <div class="caidan">
            <img src="../../static/images/xuniyou.png" alt="">
            <div>虚拟游</div>
          </div>
          <div class="caidan">
            <img src="../../static/images/yuyinjiangjie.png" alt="">
            <div>语音讲解</div>
          </div>
          <div class="caidan">
            <img src="../../static/images/zhoubian.png" alt="">
            <div>周边服务</div>
          </div>
          <div class="caidan">
            <img src="../../static/images/xiangqing.png" alt="">
            <div>详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideTour",
  data() {
    let self = this;
    return {
      resultsDots: [],
      icon: require("../../static/images/icon_park.png"),
      mapIcon: require("../../static/images/map_park.png"),
      activeIcon: require("../../static/images/pt_active.png"),
      markers: [],
      zoom: 12,
      lng: 0,
      lat: 0,
      loaded: false,
      active: 0
    };
  },
  mounted() {
    this.center();
    document.title='导游导览'
  },
  methods: {
    guanguang(){
      this.$router.push('/AppropriateIndex')
    },
    xianlu(){
      this.$router.push('/guideRoute')
    },
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
  position: relative;
}
#surrounding {
  width: 100%;
  height: calc(100% - 5.09rem);
  position: absolute;
  top: 0;
}
span {
  display: inline-block;
}
.card {
  width: 100%;
  /* height: 5.09rem; */
  background-color: #fff;
  position: absolute;
  bottom:0;
}
.Navigation {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 0.68rem;
  top: -0.8rem;
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
  margin: 0.4rem 0;
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
  width: 6.17rem;
  margin-left: 0.89rem;
  text-align: initial;
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
.float {
  width: 1.36rem;
  height: 2.626rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  top: 0.24rem;
  right: 0.426rem;
  z-index: 999;
}
.footer{
  width: 91%;
  height: 1.5rem;
  border-top: 1px dashed rgba(218, 218, 218, 1);
  margin: 0 auto;
}
.footer>.caidan{
  width: 24.2%;
  height: 100%;
  display: inline-block;
}
.caidan>img{
  width: 0.506rem;
  height: 0.506rem;
  display: block;margin: 0 auto;
  padding-top: 0.253rem;
}
.caidan>div{
  text-align: center;
  font-size:0.266rem;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height: 0.8rem;
}
.guanguang{
  width: 100%;
  height: 50%;
}
.guanguang>img{
  width: 0.586rem;
  height: 0.586rem;
  margin: 0 auto;
  display: block;
  padding-top: 0.133rem;
}
.guanguang>div{
  font-size:0.266rem;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(19,130,216,1);
  text-align: center;
}
.xianlu{
  width: 100%;
  height: 50%;
}
.xianlu>img{
  width: 0.586rem;
  height: 0.586rem;
  margin: 0 auto;
  display: block;
  padding-top: 0.133rem;
}
.xianlu>div{
  font-size:0.266rem;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(19,130,216,1);
  text-align: center;
}
.xian{
  width: 0.426rem;
  height: 1px;
  background-color: rgba(203, 203, 203, 1);
  margin: 0 auto;
}
</style>
