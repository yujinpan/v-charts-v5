import Core from '../../core';
import { bar, histogram } from '../bar/main';
import { funnel } from '../funnel/main';
import { line } from '../line/main';
import { pie, ring } from '../pie/main';
import { radar } from '../radar/main';
import { waterfall } from '../waterfall/main';

export default Object.assign({}, Core, {
  name: 'VeChart',
  data() {
    this.chartLib = {
      bar,
      histogram,
      line,
      pie,
      ring,
      funnel,
      radar,
      waterfall,
    };
    this.chartHandler = this.chartLib[this.settings.type];
    return {};
  },
});
