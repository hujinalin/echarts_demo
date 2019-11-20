<template>
  <div>
    <div>{{chartType}}</div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
// import 'echarts/map/js/world.js'
// import 'echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: 'scatter',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'男性女性身高体重分布',subtext:'散点图'},
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type:'cross'//坐标指示器
          },
          formatter: function(param){
            return param.seriesName+'<br>'+param.value[0]+'cm,'+param.value[1]+'kg'
          }
        },
        legend: {
          data:['男性','女性'],
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              // yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false,
            },
            restore: {},
            saveAsImage: {
              type: 'png'
            }
          }
        },
        xAxis: {
          type: 'value',
          precision: 2,//小数点精度
          scale: true,//是否脱离0值比例，刻度不会从0开始，在散点图中比较有用
          name:'身高(cm)',
          axisLabel:{
            formatter: '{value}cm'//自定义X轴信息
          }
        },
        yAxis:{
          type: 'value',
          precision: 2,//小数点精度
          scale: true,//是否脱离0值比例，刻度不会从0开始，在散点图中比较有用
          name:'体重(kg)',
          axisLabel:{
            formatter: '{value}kg'//自定义Y轴信息
          }
        },
        series:[{
          name:'男性',
          type:'scatter',
          data:[[161.1,58.4],[171.5,60.32],[156.8,61.1],[180.3,70],[188.5,85.43],[190.1,89.74]]
        },{
          name:'女性',
          type:'scatter',
          data:[[155.1,58.4],[161.5,50.32],[156.8,51.1],[173.3,60],[180.5,75.43],[184.1,80.74]]
        }]
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
