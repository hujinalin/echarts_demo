<template>
  <div>
    <div>{{chartType}}</div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
// import 'echarts/map/js/world.js'
import beijing from 'echarts/map/json/province/beijing.json' // 引入中国地图数据
export default {
  name: 'beijing',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      this.$echarts.registerMap('beijing', beijing);
      let options = {
        title: {text:'地图实例'},
        tooltip: {},
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['orangered', 'yellow', 'lightskyblue']
        },
        series:[
          {
            name: '人口数', // 浮动框的标题
            type: 'map',
            map: 'beijing',
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              borderColor: 'rgba(0, 0, 0, .3)'
            },
            geoIndex: 0,
            data: [
              {'name':'延庆区','value':102903},
              {'name':'昌平区','value':3238309},
              {'name':'海淀区','value':2039211},
              {'name':'通州区','value':1122333},
              {'name':'大兴区','value':908433},
            ]
          }
        ]
      }
      echart.setOption(options)
    }
  },
  mounted () {
    this.initEcharts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
