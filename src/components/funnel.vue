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
  name: 'funnel',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'收入 VS 支出',subtext:'漏斗图'},
        tooltip: {
          trigger: 'item',
        },
        legend: {
          data:['收入','支出'],
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
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
        radar: {//极坐标
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {name: 'A部门'},
            {name: 'B部门'},
            {name: 'C部门'},
            {name: 'D部门'},
            {name: 'E部门'},
          ]
        },
        series:[{
          name:'',
          type:'radar',
          data:[
            {
              value:[43000,32000,50443,53302,39022],
              name: '收入'
            },
            {
              value:[23000,8000,20443,13302,19022],
              name: '支出'
            }
          ]
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
