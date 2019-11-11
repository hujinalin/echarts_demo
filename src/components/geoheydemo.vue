<template>
  <div>
    <div id='geoheymap' class="geoheymap" ref="geoheymap"></div>
  </div>
</template>

<script>
// import 'echarts/map/js/world.js'
// import 'echarts/map/js/china.js' // 引入中国地图数据

export default {
  name: 'bar',
  props: {
    chartType: String
  },
  methods: {
    initGeohey(){
      var map, tileLayer, dataLayer;
      map = new this.$G.Map('geoheymap',{
        minRes: 0.298582, //地图最小分辨率
        maxRes: 156543.033928, //地图最大分辨率
        maxExtent: [-20037508.342784, -20037508.342784, 20037508.342784, 20037508.342784],
        zoomAnim: true, //缩放时是否支持动画效果
        panAnim: true, //拖拽时是否支持惯性移动
        hideLogo: false, //是否隐藏Logo
        recordStatus: true, //是否在浏览器历史中记录每一次更新的状态
        wrap: true, //是否显示环绕地图
        continuouslyZoom: false, //是否允许无极缩放
        initStatus: { //地图初始状态
          center: [12673975, 4079823],  //地图中心
          res: 4891.9698105, //分辨率
          rotate: 0 //旋转角度
        }
      });
      tileLayer = new this.$G.Layer.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        cluster: ['a', 'b', 'c']
      });
      tileLayer.addTo(map);
      this.$G.loadModule('draw', function() {
              drawLayer = new this.$G.Layer.Draw();
              drawLayer.addTo(map);

              drawLayer.bind('drawStart', function(e){
                console.log(e.type, e);
              }).bind('draw', function(e){
                console.log(e.type, e);
              }).bind('drawEnd', function(e){
                console.log(e.type, e);
              });
              drawLayer.startDraw('normalrect');

              // var ensureDisabledButton = function(name){
              //   $('#btn-end').removeAttr('disabled');
              //   $('#btn-circle').removeAttr('disabled');
              //   $('#btn-point').removeAttr('disabled');
              //   $('#btn-polyline').removeAttr('disabled');
              //   $('#btn-freepolyline').removeAttr('disabled');
              //   $('#btn-polygon').removeAttr('disabled');
              //   $('#btn-freepolygon').removeAttr('disabled');
              //   $('#btn-rect').removeAttr('disabled');
              //   $('#btn-normalrect').removeAttr('disabled');
              //   $('#btn-arrow').removeAttr('disabled');

              //   if(name){
              //     $('#btn-' + name).attr('disabled', 'disabled');
              //   }
              // };

              // $('#btn-end').bind('click', function(){
              //   drawLayer.endDraw();
              //   ensureDisabledButton('end');
              // });

              // $('#btn-circle').bind('click', function(){
              //   drawLayer.startDraw('circle', {fillColor:"#f00"});
              //   ensureDisabledButton('circle');
              // });

              // $('#btn-point').bind('click', function(){
              //   drawLayer.startDraw('point');
              //   ensureDisabledButton('point');
              // });

              // $('#btn-polyline').bind('click', function(){
              //   drawLayer.startDraw('polyline');
              //   ensureDisabledButton('polyline');
              // });

              // $('#btn-freepolyline').bind('click', function(){
              //   drawLayer.startDraw('freepolyline');
              //   ensureDisabledButton('freepolyline');
              // });

              // $('#btn-polygon').bind('click', function(){
              //   drawLayer.startDraw('polygon');
              //   ensureDisabledButton('polygon');
              // });

              // $('#btn-freepolygon').bind('click', function(){
              //   drawLayer.startDraw('freepolygon');
              //   ensureDisabledButton('freepolygon');
              // });

              // $('#btn-rect').bind('click', function(){
              //   drawLayer.startDraw('rect');
              //   ensureDisabledButton('rect');
              // });

              // $('#btn-normalrect').bind('click', function(){
              //   drawLayer.startDraw('normalrect');
              //   ensureDisabledButton('normalrect');
              // });

              // $('#btn-arrow').bind('click', function(){
              //   drawLayer.startDraw('arrow');
              //   ensureDisabledButton('arrow');
              // });

              // $('#buttonContainer').fadeIn();
            });
      // dataLayer = new G.Layer.Tile("", {
      //   keepResample: false
      // });
      // dataLayer.hide();
      // map.addLayer(dataLayer);
      // var ak = 'NDc4YmE0ZmJiNTUzNDU5ZDk5MGU2ZTZkMmMzNzUxYTI';
      // //全国火车站数据 配置文件可从数据上图中导出
      // var vizConfig = [
      //   {
      //     "dataUid": "07ec92c0003611eab68e57740db69515",
      //     "dataType": "private",
      //     "vizConfig": {
      //       "type": "marker-simple",
      //       "labelField": null,
      //       "labelColor": "#000000",
      //       "labelFont": "Microsoft YaHei Regular",
      //       "labelSize": 12,
      //       "labelDx": 0,
      //       "labelDy": -20,
      //       "labelHaloColor": "#fff",
      //       "labelAllowOverlap": true,
      //       "labelPlacement": "point",
      //       "blendingMode": "src-over",
      //       "markerColor": "#c00000",
      //       "markerOpacity": 0.8,
      //       "markerSize": 6,
      //       "outlineColor": "#ffffff",
      //       "outlineOpacity": 0.8,
      //       "outlineWidth": 1
      //     }
      //   }
      // ];

      // this.$axios({
      //   url: 'http://geohey.com/s/dataviz/config?ak='+ak,
      //   method : 'post',
      //   dataType: 'jsonp',
      //   data : {
      //       ak: ak,
      //       configJson: JSON.stringify(vizConfig),
      //       layerGrouped: true,
      //   }
      // }).then(function(data){
      //   if (data.code == 0) {
      //     var vizId = data.data.vizId;
      //     dataLayer.setUrl('http://geohey.com/s/dataviz/' + vizId + '/{z}/{x}/{y}.png?retina={i}&ak=' + ak);
      //     dataLayer.show();
      //   }
      // }).catch(function(err){
      //   console.log('dataviz error')
      // })
    },
    ODline(){
      var map, odLayer;
      var series = [];
      var color = ['#a6c84c', '#ffa022'];
      var data = [
          [{"fromName":"北京","toName":"上海","coords":[[116.4551,40.2539],[121.4648,31.2891]]},
          {"fromName":"北京","toName":"广州","coords":[[116.4551,40.2539],[113.5107,23.2196]]},
          {"fromName":"北京","toName":"南宁","coords":[[116.4551,40.2539],[108.479,23.1152]]},
          {"fromName":"北京","toName":"拉萨","coords":[[116.4551,40.2539],[91.1865,30.1465]]},
          {"fromName":"北京","toName":"长春","coords":[[116.4551,40.2539],[125.8154,44.2584]]},
          {"fromName":"北京","toName":"包头","coords":[[116.4551,40.2539],[110.3467,41.4899]]}],
          [{"fromName":"上海","toName":"昆明","coords":[[121.4648,31.2891],[102.9199,25.4663]]},
          {"fromName":"上海","toName":"郑州","coords":[[121.4648,31.2891],[113.4668,34.6234]]},
          {"fromName":"上海","toName":"长春","coords":[[121.4648,31.2891],[125.8154,44.2584]]},
          {"fromName":"上海","toName":"重庆","coords":[[121.4648,31.2891],[107.7539,30.1904]]},
          {"fromName":"上海","toName":"北京","coords":[[121.4648,31.2891],[116.4551,40.2539]]},
          {"fromName":"上海","toName":"丹东","coords":[[121.4648,31.2891],[124.541,40.4242]]}]
      ];
      data.forEach(function (item, i) {
          series.push({
              color: color[i],
              width: 1,
              opacity: 1,
              curveness: 0.2,
              data: data[i]
          });
      });

      console.log(this.$G);
      this.$G.loadModules( [ 'maps', 'od' ], function() {

        map = new this.$G.Map('geoheymap');

              var layer = new this.$G.Layer.GoogleCnMap('satel', {traffic:true});

              layer.addTo( map );

              odLayer = new this.$G.Layer.OD({
                  type: 'airplane',
                  series: series,
                  speed: 10,
                  trailLength: 0.2,
              });
              odLayer.addTo( map );
              map.zoomRes( [12121634.34764752, 4234072.8276309], 4891.96981025 );
      });
    }
  },
  mounted () {
    this.initGeohey();
    // this.ODline()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .geoheymap {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
