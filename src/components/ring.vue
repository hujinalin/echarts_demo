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
  name: 'ring',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'饼图实例',left: 'center'},
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c}次({d}%)'//a系列名称，b数据项名称，c数据项数值，d占比
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data:['直接访问','邮件营销','联盟营销','视频广告','搜索引擎','内置一','内置二','内置三']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: false,
            },
            restore: {},
            saveAsImage: {
              type: 'png'
            }
          }
        },
        calculable: true,
        series:[{
          name:'访问来源',
          type:'pie',
          radius: ['40%','60%'],//饼图半径
          center:['50%','50%'],//饼图位置
          // label: {
          //   normal: {
          //     show: false,
          //     position: 'center'
          //   },
          //   emphasis: {
          //     show: true
          //   }
          // },
          data:[
            {
              value: 25,
              name: '直接访问'
            },
            {
              value: 15,
              name: '邮件营销'
            },
            {
              value: 35,
              name: '联盟营销'
            },
            {
              value: 55,
              name: '视频广告'
            },
            {
              value: 80,
              name: '搜索引擎'
            }
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: '30%',
          center:['50%','50%'],
          label: {
            normal: {
              show: true,
              position: 'inner'
            },
            // emphasis: {
            //   show: true
            // }
          },
          data:[
            {
              value: 25,
              name: '内置一'
            },
            {
              value: 15,
              name: '内置二'
            },
            {
              value: 35,
              name: '内置三'
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
