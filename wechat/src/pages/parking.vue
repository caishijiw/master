<template>
  <div style="width:100%;height:100%;position:relative">
    <div class="float">
      <div class="guanguang" @click="guanguang()">
        <img src="../assets/images/guanguang.png" alt srcset />
        <div>宜游指数</div>
      </div>
      <div class="xian"></div>
      <div class="xianlu" @click="xianlu()">
        <img src="../assets/images/xianlu.png" alt srcset />
        <div>线路推荐</div>
      </div>
    </div>
    <div class="map_surrounding" id="map_surrounding">
      <div id="surrounding"></div>
      <div class="card">
        <div class="Navigation" @click="Navigation">
          <img src="../assets/images/Navigation.png" alt />
        </div>
        <div style="width:91%;margin:0 auto;">
          <div class="parkName">{{name}}</div>
          <div class="parkInfo">
            <div class="park_image">
              <img src="https://cn.vuejs.org/images/logo.png" alt />
            </div>
            <div class="park_flex">
              <div class="park_money">
                <span class="Fee_standard">收费标准</span>
                <div>
                  <span class="how_money">{{money}}</span>
                  <span class="Price">/小时</span>
                </div>
              </div>
              <div class="park_cars">
                <span class="Fee_standard">剩余车位</span>
                <span class="cars">{{car}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @select="onSelect" />
  </div>
</template>

<script>
export default {
  name: "parking",
  data() {
    return {
      resultsDots: [],
      icon: require("../assets/images/icon_park.png"),
      mapIcon: require("../assets/images/map_park.png"),
      activeIcon: require("../assets/images/pt_active.png"),
      markers: [],
      zoom: 12,
      lng: 0,
      lat: 0,
      golng: 0,
      golat: 0,
      originName: "起点",
      destinationName: "终点",
      loaded: false,
      name: "",
      money: "",
      car: "",
      show: false,
      actions: [
        { name: "高德地图", key: 1 },
        { name: "百度地图", key: 2 },
        { name: "腾讯地图", key: 3 }
      ]
    };
  },
  mounted() {
    this.center();
  },
  methods: {
    guanguang(){
      this.$router.push('/AppropriateIndex')
    },
    xianlu(){
      this.$router.push('/guideRoute')
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      switch (item.key) {
        case 1: // 高德
          window.location.href =
            "http://uri.amap.com/navigation?from=" +
            this.lng +
            "," +
            this.lat +
            "&to=" +
            this.golng +
            "," +
            this.golat +
            "&mode=car&src=nyx_super";
          break;
        case 2: // 百度
          window.location.href =
            "http://api.map.baidu.com/direction?origin=latlng:" +
            this.lat +
            "," +
            this.lng +
            "|name:" +
            this.originName +
            "&destination=latlng:" +
            this.golat +
            "," +
            this.golng +
            "|name:" +
            this.destinationName +
            "&mode=driving&region=浙江&output=html&src=webapp.baidu.openAPIdemo";
          break;
        case 3: // 腾讯
          window.location.href =
            " https://apis.map.qq.com/uri/v1/routeplan?type=drive&from=" +
            this.orginName +
            "&fromcoord=" +
            this.lat +
            "," +
            this.lng +
            "&to=" +
            this.destinationName +
            "&tocoord=" +
            this.golng +
            "," +
            this.golat +
            "&policy=1&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77";
          break;
      }
    },
    Navigation() {
      this.show = true;
    },
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
          console.log(result, "Amap");
          self.lng = Number(result.position.lng);
          self.lat = Number(result.position.lat);
          // alert(self.lng, "11111");
          // alert(self.lat, "2222");
          self.searchMap();
        });
      });
    },
    searchMap() {
      let self = this;
      var map = new AMap.Map("surrounding", {
        resizeEnable: true,
        center: [this.lng, this.lat],
        zoom: 11
      });
      map.on("moveend", logMapinfo);
      map.on("zoomend", logMapinfo);
      function logMapinfo() {
        var zoom = map.getZoom(); //获取当前地图级别
        var center = map.getCenter(); //获取当前地图中心位置
      }
      const icon = new AMap.Icon({
        size: new AMap.Size(40, 60),
        image: require("../assets/images/marker.png"),
        imageSize: new AMap.Size(25, 25),
        anchor: "center"
      });
      const clickIcon = new AMap.Icon({
        size: new AMap.Size(40, 60),
        image: require("../assets/images/markerChose.png"),
        imageSize: new AMap.Size(25, 35),
        anchor: "center"
      });
      var allmarkers = [
        {
          icon: icon,
          position: [116.205467, 39.907761],
          name: "采石矶高端停车场1",
          money: "10",
          car: "20",
          index: 0
        },
        {
          icon: icon,
          position: [116.368904, 39.913423],
          name: "采石矶高端停车场2",
          money: "105",
          car: "205",
          index: 1
        },
        {
          icon: icon,
          position: [116.305467, 39.807761],
          name: "采石矶高端停车场3",
          money: "103",
          car: "202",
          index: 2
        }
      ];
      var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(5, -30)
      });
      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      for (var i = 0, marker; i < allmarkers.length; i++) {
        var marker = new AMap.Marker({
          position: allmarkers[i]["position"],
          icon: icon,
          map: map
        });
        marker.content = allmarkers[i].name;
        marker.car = allmarkers[i].car;
        marker.position = allmarkers[i]["position"];
        marker.money = allmarkers[i].money;
        marker.on("click", markerClick);
        marker.emit("click", { target: marker });
        self.markers.push(marker);
      }
      console.log(self.markers,'markers')
      function markerClick(e) {
        for (var i = 0; i < self.markers.length; i++) {
          self.markers[i].setIcon(icon);
          console.log(self.markers[i])
        }
        e.target.setIcon(clickIcon);
        infoWindow.setContent(e.target.content);
        self.showInfo(e);
        infoWindow.open(map, e.target.getPosition());
      }
      map.setFitView();
    },
    showInfo(e) {
      // alert(e.target)
      this.name = e.target.content;
      this.money = e.target.money;
      this.car = e.target.car;
      this.golng = e.target.position[0];
      this.golat = e.target.position[1];
      // this.currentDotIdx = idx;
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
  position: absolute;
  top: 0;
}
span {
  display: inline-block;
}
.card {
  width: 100%;
  height: 24%;
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
  margin-right: 1.4rem;
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
.guanguang {
  width: 100%;
  height: 50%;
}
.guanguang > img {
  width: 0.586rem;
  height: 0.586rem;
  margin: 0 auto;
  display: block;
  padding-top: 0.133rem;
}
.guanguang > div {
  font-size: 0.266rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(19, 130, 216, 1);
  text-align: center;
}
.xianlu {
  width: 100%;
  height: 50%;
}
.xianlu > img {
  width: 0.586rem;
  height: 0.586rem;
  margin: 0 auto;
  display: block;
  padding-top: 0.133rem;
}
.xianlu > div {
  font-size: 0.266rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(19, 130, 216, 1);
  text-align: center;
}
.xian {
  width: 0.426rem;
  height: 1px;
  background-color: rgba(203, 203, 203, 1);
  margin: 0 auto;
}
</style>
