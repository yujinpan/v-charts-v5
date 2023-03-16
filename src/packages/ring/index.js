import 'echarts/lib/chart/pie';
import Core from '../../core';
import { ring } from '../pie/main';

export default Object.assign({}, Core, {
  name: 'VeRing',
  data() {
    this.chartHandler = ring;
    return {};
  },
});
