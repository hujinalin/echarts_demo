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
  name: 'bar',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'柱状实例'},
        tooltip: {
          trigger: 'item',
        },
        legend: {
          data:['销量','利润']
        },
        xAxis: {
          type: 'category',
          data:['衬衫','羊毛衫','衬衫','羊毛衫']
        },
        yAxis:{},
        series:[{
          name:'销量',
          type:'bar',
          data:[5,10,20,36]
        },{
          name:'利润',
          type:'bar',
          data:[50,100,200,360]
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
