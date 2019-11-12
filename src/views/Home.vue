<template>
  <div class="home">
    <bar chart-type="bar echarts"/>
    <china chart-type="中国 map echarts"/>
    <beijing chart-type="北京 map echarts"/>
    <remix chart-type="remix echarts"/>
    <pie chart-type="pie echarts"/>
    <ring chart-type="ring echarts, belong pie"/>
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

export default {
  name: 'home',
  components: {
  	bar,
    china,
    beijing,
    remix,
    pie,
    ring,
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