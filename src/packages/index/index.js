import VeAmap from '../amap';
import VeBar from '../bar';
import VeBmap from '../bmap';
import VeCandle from '../candle';
import VeChart from '../chart';
import VeFunnel from '../funnel';
import VeGauge from '../gauge';
import VeHeatmap from '../heatmap';
import VeHistogram from '../histogram';
import VeLine from '../line';
import VeLiquidfill from '../liquidfill';
import VeMap from '../map';
import VePie from '../pie';
import VeRadar from '../radar';
import VeRing from '../ring';
import VeSankey from '../sankey';
import VeScatter from '../scatter';
import VeTree from '../tree';
import VeWaterfall from '../waterfall';
import VeWordcloud from '../wordcloud';

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

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
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
  VeScatter,
  VeCandle,
  VeGauge,
  VeTree,
  VeLiquidfill,
  VeWordcloud,
  install,
};
