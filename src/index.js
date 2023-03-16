import VeAmap from './packages/amap';
import VeBar from './packages/bar';
import VeBmap from './packages/bmap';
import VeCandle from './packages/candle';
import VeChart from './packages/chart';
import VeFunnel from './packages/funnel';
import VeGauge from './packages/gauge';
import VeHeatmap from './packages/heatmap';
import VeHistogram from './packages/histogram';
import VeLine from './packages/line';
import VeLiquidfill from './packages/liquidfill';
import VeMap from './packages/map';
import VePie from './packages/pie';
import VeRadar from './packages/radar';
import VeRing from './packages/ring';
import VeSankey from './packages/sankey';
import VeScatter from './packages/scatter';
import VeTree from './packages/tree';
import VeWaterfall from './packages/waterfall';
import VeWordcloud from './packages/wordcloud';

const components = [
  VeBar,
  VeHistogram,
  VeLine,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeAmap,
  VeSankey,
  VeHeatmap,
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud,
];

function install(Vue, _) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export {
  VeBar,
  VeHistogram,
  VeRing,
  VeLine,
  VePie,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeAmap,
  VeSankey,
  VeHeatmap,
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud,
  install,
};
