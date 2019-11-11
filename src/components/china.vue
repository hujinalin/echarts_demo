<template>
  <div>
    <div>{{chartType}}</div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
// import 'echarts/map/js/world.js'
import 'echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: 'china',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'地图实例'},
        tooltip: {},
        dataRange: {
          min: 0,
          max: 1000,
          x: "left",
          y: "bottom",
          text: ["高", "低"],
          calculable: true
        },
        legend: {
          data:['年降水（ml）']
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
        geo: {
          map: 'china',
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
          }
        },
        series:[
          {
            name: '年降水（ml）', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
            data: [
                {
                    name: "北京",
                    value: 234
                },
                {
                    name: "天津",
                    value: 532
                },
                {
                    name: "上海",
                    value: 134
                },
                {
                    name: "重庆",
                    value: 983
                },
                {
                    name: "河北",
                    value: 783
                },
                {
                    name: "河南",
                    value: 345
                },
                {
                    name: "云南",
                    value: 872
                },
                {
                    name: "辽宁",
                    value: 94
                },
                {
                    name: "黑龙江",
                    value: 342
                },
                {
                    name: "湖南",
                    value: 989
                },
                {
                    name: "安徽",
                    value: 767
                },
                {
                    name: "山东",
                    value: 675
                },
                {
                    name: "新疆",
                    value: 874
                },
                {
                    name: "江苏",
                    value: 874
                },
                {
                    name: "浙江",
                    value: 878
                },
                {
                    name: "江西",
                    value: 928
                },
                {
                    name: "湖北",
                    value: 44
                },
                {
                    name: "广西",
                    value: 448
                },
                {
                    name: "甘肃",
                    value: 887
                },
                {
                    name: "山西",
                    value: 903
                },
                {
                    name: "内蒙古",
                    value: 673
                },
                {
                    name: "陕西",
                    value: 563
                },
                {
                    name: "吉林",
                    value: 747
                },
                {
                    name: "福建",
                    value: 112
                },
                {
                    name: "贵州",
                    value: 473
                },
                {
                    name: "广东",
                    value: 647
                },
                {
                    name: "青海",
                    value: 838
                },
                {
                    name: "西藏",
                    value: 626
                },
                {
                    name: "四川",
                    value: 515
                },
                {
                    name: "宁夏",
                    value: 172
                },
                {
                    name: "海南",
                    value: 77
                },
                {
                    name: "台湾",
                    value: 837
                },
                {
                    name: "香港",
                    value: 677
                },
                {
                    name: "澳门",
                    value: 43
                }
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
