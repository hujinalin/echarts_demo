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
  name: 'remix',
  props: {
    chartType: String
  },
  methods: {
    initEcharts(){
      let echart = this.$echarts.init(this.$refs.chart);
      let options = {
        title: {text:'混合实例'},
        tooltip: {
          trigger: 'item'
        },
        toolbox: {//工具箱
          show: true,
          feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false,
        //       optionToContent: function(data){//自定义数据样式
        //         console.log(data)
        //         var xdata = data.xAxis[0].data;
        //         var series = data.series;
        //         var table = `
        //         <table>
        //           <thead>
        //             <tr>
        //               <th></th>
        //               <th>${series[0].name}</th>
        //               <th>${series[1].name}</th>
        //             </tr>
        //           </thead>
        //           <tbody>`
        //           for(var i=0,len=xdata.length;i<len;i++){
        //             table += `
        //               <tr>
        //                 <td>${xdata[i]}</td>
        //                 <td>${series[0].data[i]}</td>
        //                 <td>${series[1].data[i]}</td>
        //               </tr>
        //             `
        //           }
        // table += `</tbody>
        //         </table>`
        //         return table
        //       }
            },
            magicType: {type: ['bar','line']},
            restore: {},
            saveAsImage: {
              type: 'png'
            }
          }
        },
        dataZoom: [//底部数据选择缩放区域
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
          },
          // {
          //   type: 'slider',
          //   show: true,
          //   yAxisIndex: [0],
          //   left: '93%',
          //   start: 1,
          //   end: 36
          // }
        ],
        legend: {
          data:['销量（件）','利润（元）']
        },
        xAxis: {
          type: 'category',
          data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis:{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series:[{
          name:'销量（件）',
          type:'bar',
          data:[5,10,20,176,10,50,74,10,20,111,180,20],
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },{
          name:'利润（元）',
          type:'bar',
          data:[50,100,200,560,100,200,360,170,200,360,600,60],
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
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
.chart {
  width: 800px;
  height: 400px;
}
</style>
