<template>
  <div class="home">
    <bar chart-type="柱状，线形bar line echarts"/>
    <china chart-type="中国 map echarts"/>
    <beijing chart-type="北京 map echarts"/>
    <remix chart-type="remix echarts"/>
    <pie chart-type="饼图pie echarts"/>
    <ring chart-type="组合饼图ring echarts, belong pie"/>
    <scatter chart-type="散点图scatter echarts"/>
    <bubble chart-type="气泡图bubble echarts"/>
    <radar chart-type="雷达图radar echarts"/>
    <funnel chart-type="漏斗图funnel echarts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import bar from '@/components/bar.vue'
import china from '@/components/china.vue'
import beijing from '@/components/beijing.vue'
import remix from '@/components/remix.vue'
import pie from '@/components/pie.vue'
import ring from '@/components/ring.vue'
import scatter from '@/components/scatter.vue'
import bubble from '@/components/bubble.vue'
import radar from '@/components/radar.vue'
import funnel from '@/components/funnel.vue'

export default {
  name: 'home',
  components: {
  	bar,
    china,
    beijing,
    remix,
    pie,
    ring,
    scatter,
    bubble,
    radar,
    funnel,
  }
}
</script>
<style type="text/css">
	.chart {
	  display: inline-block;
	  width: 400px;
	  height: 400px;
	  border: 1px solid #ccc;
	  vertical-align: top;
	}
	.home>div{
		display: inline-block;
		margin-left: 10px;
		vertical-align: top;
	}
</style>