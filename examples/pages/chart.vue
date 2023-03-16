<template>
  <div class="page-item-test">
    <div class="chart-item" v-for="(d, i) in chartData" :key="i">
      <div class="chart-part">
        <h3>{{ d.name }}</h3>
        <component
          :is="`ve-${innerType}`"
          :data="d.data"
          :settings="d.settings"
        >
        </component>
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <code-section :content="d.data" json></code-section>
        </div>
        <p>配置项</p>
        <div class="setting-code">
          <code-section :content="d.settings" json></code-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeBar from '../../src/packages/bar';
import VeCandle from '../../src/packages/candle';
import VeChart from '../../src/packages/chart';
import VeFunnel from '../../src/packages/funnel';
import VeGauge from '../../src/packages/gauge';
import VeHeatmap from '../../src/packages/heatmap';
import VeHistogram from '../../src/packages/histogram';
import VeLine from '../../src/packages/line';
import VeLiquidfill from '../../src/packages/liquidfill';
import VeMap from '../../src/packages/map';
import VePie from '../../src/packages/pie';
import VeRadar from '../../src/packages/radar';
import VeRing from '../../src/packages/ring';
import VeSankey from '../../src/packages/sankey';
import VeScatter from '../../src/packages/scatter';
import VeTree from '../../src/packages/tree';
import VeWaterfall from '../../src/packages/waterfall';
import VeWordcloud from '../../src/packages/wordcloud';
import CHART_DATA from '../data';

export default {
  name: 'Item',

  data() {
    return {
      chartData: [],
      type: null,
      innerType: null,
    };
  },

  methods: {
    init() {
      this.type = this.$route.params.type;
      this.chartData = CHART_DATA[this.type].data;
      this.innerType = CHART_DATA[this.type].type;
    },
  },

  created() {
    this.init();
  },

  watch: {
    $route() {
      this.init();
    },
  },

  components: {
    VeBar,
    VeLine,
    VeHistogram,
    VePie,
    VeRing,
    VeWaterfall,
    VeFunnel,
    VeRadar,
    VeChart,
    VeMap,
    VeSankey,
    VeHeatmap,
    VeScatter,
    VeCandle,
    VeGauge,
    VeTree,
    VeLiquidfill,
    VeWordcloud,
  },
};
</script>

<style lang="less">
.page-item-test {
  h3,
  p {
    margin: 0;
  }

  pre {
    height: 150px;
  }

  .chart-item {
    display: flex;
    padding: 15px;

    .chart-part {
      flex: 1;
    }

    .code-view {
      width: 400px;
      margin-left: 20px;
    }
  }
}
</style>
