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
  name: 'bubble',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'男性女性年龄身高体重分布',subtext:'气泡图'},
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type:'cross'//坐标指示器
          },
          formatter: function(param){
            return param.seriesName+'<br>'+'年龄'+param.value[2]+','+param.value[0]+'cm,'+param.value[1]+'kg'
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
        },
        yAxis:{
          type: 'value',
          precision: 2,//小数点精度
          scale: true,//是否脱离0值比例，刻度不会从0开始，在散点图中比较有用
          name:'体重(kg)',
        },
        series:[{
          name:'男性',
          type:'scatter',
          symbol:'circle',//形状可选择其他类型
          data:[[161.1,58.4,32],[171.5,60.32,22],[156.8,61.1,12],[180.3,70,8],[188.5,85.43,43],[190.1,89.74,50]],
          symbolSize: function(value){//设置气泡大小
            return value[2]/3
          }
        },{
          name:'女性',
          type:'scatter',
          symbol:'circle',//形状可选择其他类型
          data:[[155.1,58.4,11],[161.5,50.32,44],[156.8,51.1,34],[173.3,60,21],[180.5,75.43,25],[184.1,80.74,9],[188.5,75.43,15],[154.1,40.74,46]],
          symbolSize: function(value){//设置气泡大小
            return value[2]/3
          }
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
