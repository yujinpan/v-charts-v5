import 'echarts/lib/chart/bar';
import Core from '../../core';
import { histogram } from '../bar/main';

export default Object.assign({}, Core, {
  name: 'VeHistogram',
  data() {
    this.chartHandler = histogram;
    return {};
  },
});
