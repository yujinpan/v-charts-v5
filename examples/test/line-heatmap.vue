<template>
  <div id="app">
    <ve-line :data="chartData"></ve-line>
    <ve-heatmap :data="heatmapChartData" :settings="chartSettings"></ve-heatmap>
  </div>
</template>

<script>
import { VeLine, VeHeatmap } from '../../../../lib/index.esm';

export default {
  created: function () {
    this.chartData = {
      columns: ['日期', '销售额'],
      rows: [
        { 日期: '1月1日', 销售额: 123 },
        { 日期: '1月2日', 销售额: 1223 },
        { 日期: '1月3日', 销售额: 2123 },
        { 日期: '1月4日', 销售额: 4123 },
        { 日期: '1月5日', 销售额: 3123 },
        { 日期: '1月6日', 销售额: 7123 },
      ],
    };
    this.heatmapChartData = {
      columns: ['lat', 'lng'],
      rows: [
        { lat: 120.14322240845, lng: 30.236064370321 },
        { lat: 120.14301682797, lng: 30.236035316745 },
        { lat: 120.14138577045, lng: 30.236113748704 },
        { lat: 120.1400398833, lng: 30.235973050702 },
        { lat: 120.13893453465, lng: 30.23517220446 },
        { lat: 120.1382899739, lng: 30.234062922977 },
        { lat: 120.13265960629, lng: 30.231641351722 },
        { lat: 120.13170681763, lng: 30.229925745619 },
        { lat: 120.13119614803, lng: 30.228996846637 },
        { lat: 120.13023980134, lng: 30.228226570416 },
      ],
    };
    this.chartSettings = {
      key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
      bmap: {
        center: [120.14322240845, 30.236064370321],
        zoom: 14,
        roam: true,
      },
      type: 'bmap',
    };
  },
  components: { VeLine, VeHeatmap },
};
</script>
