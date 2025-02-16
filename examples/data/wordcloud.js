const data = {
  columns: ['word', 'count'],
  rows: getRows(),
};

export default {
  name: '词云图',
  type: 'wordcloud',
  data: [
    {
      name: '简单词云图',
      data: data,
    },
    {
      name: '设置词云图的颜色',
      data: data,
      settings: {
        color: ['#f00', '#ff0', '#00f', '#0ff', '#00a0e9', '#ff125e'],
      },
    },
    {
      name: '设置词云图的形状',
      data: {
        columns: ['word', 'count'],
        rows: getRows().slice(0, 100),
      },
      settings: {
        shape: 'triangle',
      },
    },
    {
      name: '设置词云图字体大小',
      data: data,
      settings: {
        sizeMin: 30,
        sizeMax: 60,
      },
    },
  ],
};

function getRows() {
  const rows = [
    {
      word: 'visualMap',
      count: 22199,
    },
    {
      word: 'continuous',
      count: 10288,
    },
    {
      word: 'contoller',
      count: 620,
    },
    {
      word: 'series',
      count: 274470,
    },
    {
      word: 'gauge',
      count: 12311,
    },
    {
      word: 'detail',
      count: 1206,
    },
    {
      word: 'piecewise',
      count: 4885,
    },
    {
      word: 'textStyle',
      count: 32294,
    },
    {
      word: 'markPoint',
      count: 18574,
    },
    {
      word: 'pie',
      count: 38929,
    },
    {
      word: 'roseType',
      count: 969,
    },
    {
      word: 'label',
      count: 37517,
    },
    {
      word: 'emphasis',
      count: 12053,
    },
    {
      word: 'yAxis',
      count: 57299,
    },
    {
      word: 'name',
      count: 15418,
    },
    {
      word: 'type',
      count: 22905,
    },
    {
      word: 'gridIndex',
      count: 5146,
    },
    {
      word: 'normal',
      count: 49487,
    },
    {
      word: 'itemStyle',
      count: 33837,
    },
    {
      word: 'min',
      count: 4500,
    },
    {
      word: 'silent',
      count: 5744,
    },
    {
      word: 'animation',
      count: 4840,
    },
    {
      word: 'offsetCenter',
      count: 232,
    },
    {
      word: 'inverse',
      count: 3706,
    },
    {
      word: 'borderColor',
      count: 4812,
    },
    {
      word: 'markLine',
      count: 16578,
    },
    {
      word: 'line',
      count: 76970,
    },
    {
      word: 'radiusAxis',
      count: 6704,
    },
    {
      word: 'radar',
      count: 15964,
    },
    {
      word: 'data',
      count: 60679,
    },
    {
      word: 'dataZoom',
      count: 24347,
    },
    {
      word: 'tooltip',
      count: 43420,
    },
    {
      word: 'toolbox',
      count: 25222,
    },
    {
      word: 'geo',
      count: 16904,
    },
    {
      word: 'parallelAxis',
      count: 4029,
    },
    {
      word: 'parallel',
      count: 5319,
    },
    {
      word: 'max',
      count: 3393,
    },
    {
      word: 'bar',
      count: 43066,
    },
    {
      word: 'heatmap',
      count: 3110,
    },
    {
      word: 'map',
      count: 20285,
    },
    {
      word: 'animationDuration',
      count: 3425,
    },
    {
      word: 'animationDelay',
      count: 2431,
    },
    {
      word: 'splitNumber',
      count: 5175,
    },
    {
      word: 'axisLine',
      count: 12738,
    },
    {
      word: 'lineStyle',
      count: 19601,
    },
    {
      word: 'splitLine',
      count: 7133,
    },
    {
      word: 'axisTick',
      count: 8831,
    },
    {
      word: 'axisLabel',
      count: 17516,
    },
    {
      word: 'pointer',
      count: 590,
    },
    {
      word: 'color',
      count: 23426,
    },
    {
      word: 'title',
      count: 38497,
    },
    {
      word: 'formatter',
      count: 15214,
    },
    {
      word: 'slider',
      count: 7236,
    },
    {
      word: 'legend',
      count: 66514,
    },
    {
      word: 'grid',
      count: 28516,
    },
    {
      word: 'smooth',
      count: 1295,
    },
    {
      word: 'smoothMonotone',
      count: 696,
    },
    {
      word: 'sampling',
      count: 757,
    },
    {
      word: 'feature',
      count: 12815,
    },
    {
      word: 'saveAsImage',
      count: 2616,
    },
    {
      word: 'polar',
      count: 6279,
    },
    {
      word: 'calculable',
      count: 879,
    },
    {
      word: 'backgroundColor',
      count: 9419,
    },
    {
      word: 'excludeComponents',
      count: 130,
    },
    {
      word: 'show',
      count: 20620,
    },
    {
      word: 'text',
      count: 2592,
    },
    {
      word: 'icon',
      count: 2782,
    },
    {
      word: 'dimension',
      count: 478,
    },
    {
      word: 'inRange',
      count: 1060,
    },
    {
      word: 'animationEasing',
      count: 2983,
    },
    {
      word: 'animationDurationUpdate',
      count: 2259,
    },
    {
      word: 'animationDelayUpdate',
      count: 2236,
    },
    {
      word: 'animationEasingUpdate',
      count: 2213,
    },
    {
      word: 'xAxis',
      count: 89459,
    },
    {
      word: 'angleAxis',
      count: 5469,
    },
    {
      word: 'showTitle',
      count: 484,
    },
    {
      word: 'dataView',
      count: 2754,
    },
    {
      word: 'restore',
      count: 932,
    },
    {
      word: 'timeline',
      count: 10104,
    },
    {
      word: 'range',
      count: 477,
    },
    {
      word: 'value',
      count: 5732,
    },
    {
      word: 'precision',
      count: 878,
    },
    {
      word: 'target',
      count: 1433,
    },
    {
      word: 'zlevel',
      count: 5361,
    },
    {
      word: 'symbol',
      count: 8718,
    },
    {
      word: 'interval',
      count: 7964,
    },
    {
      word: 'symbolSize',
      count: 5300,
    },
    {
      word: 'showSymbol',
      count: 1247,
    },
    {
      word: 'inside',
      count: 8913,
    },
    {
      word: 'xAxisIndex',
      count: 3843,
    },
    {
      word: 'orient',
      count: 4205,
    },
    {
      word: 'boundaryGap',
      count: 5073,
    },
    {
      word: 'nameGap',
      count: 4896,
    },
    {
      word: 'zoomLock',
      count: 571,
    },
    {
      word: 'hoverAnimation',
      count: 2307,
    },
    {
      word: 'legendHoverLink',
      count: 3553,
    },
    {
      word: 'stack',
      count: 2907,
    },
    {
      word: 'throttle',
      count: 466,
    },
    {
      word: 'connectNulls',
      count: 897,
    },
    {
      word: 'clipOverflow',
      count: 826,
    },
    {
      word: 'startValue',
      count: 551,
    },
    {
      word: 'minInterval',
      count: 3292,
    },
    {
      word: 'opacity',
      count: 3097,
    },
    {
      word: 'splitArea',
      count: 4775,
    },
    {
      word: 'filterMode',
      count: 635,
    },
    {
      word: 'end',
      count: 409,
    },
    {
      word: 'left',
      count: 6475,
    },
    {
      word: 'funnel',
      count: 2238,
    },
    {
      word: 'lines',
      count: 6403,
    },
    {
      word: 'baseline',
      count: 431,
    },
    {
      word: 'align',
      count: 2608,
    },
    {
      word: 'coord',
      count: 897,
    },
    {
      word: 'nameTextStyle',
      count: 7477,
    },
    {
      word: 'width',
      count: 4338,
    },
    {
      word: 'shadowBlur',
      count: 4493,
    },
    {
      word: 'effect',
      count: 929,
    },
    {
      word: 'period',
      count: 225,
    },
    {
      word: 'areaColor',
      count: 631,
    },
    {
      word: 'borderWidth',
      count: 3654,
    },
    {
      word: 'nameLocation',
      count: 4418,
    },
    {
      word: 'position',
      count: 11723,
    },
    {
      word: 'containLabel',
      count: 1701,
    },
    {
      word: 'scatter',
      count: 10718,
    },
    {
      word: 'areaStyle',
      count: 5310,
    },
    {
      word: 'scale',
      count: 3859,
    },
    {
      word: 'pieces',
      count: 414,
    },
    {
      word: 'categories',
      count: 1000,
    },
    {
      word: 'selectedMode',
      count: 3825,
    },
    {
      word: 'itemSymbol',
      count: 273,
    },
    {
      word: 'effectScatter',
      count: 7147,
    },
    {
      word: 'fontStyle',
      count: 3376,
    },
    {
      word: 'fontSize',
      count: 3386,
    },
    {
      word: 'margin',
      count: 1034,
    },
    {
      word: 'iconStyle',
      count: 2257,
    },
    {
      word: 'link',
      count: 1366,
    },
    {
      word: 'axisPointer',
      count: 5245,
    },
    {
      word: 'showDelay',
      count: 896,
    },
    {
      word: 'graph',
      count: 22194,
    },
    {
      word: 'subtext',
      count: 1442,
    },
    {
      word: 'selected',
      count: 2881,
    },
    {
      word: 'barCategoryGap',
      count: 827,
    },
    {
      word: 'barGap',
      count: 1094,
    },
    {
      word: 'barWidth',
      count: 1521,
    },
    {
      word: 'coordinateSystem',
      count: 3622,
    },
    {
      word: 'barBorderRadius',
      count: 284,
    },
    {
      word: 'z',
      count: 4014,
    },
    {
      word: 'polarIndex',
      count: 1456,
    },
    {
      word: 'shadowOffsetX',
      count: 3046,
    },
    {
      word: 'shadowColor',
      count: 3771,
    },
    {
      word: 'shadowOffsetY',
      count: 2475,
    },
    {
      word: 'height',
      count: 1988,
    },
    {
      word: 'barMinHeight',
      count: 575,
    },
    {
      word: 'lang',
      count: 131,
    },
    {
      word: 'symbolRotate',
      count: 2752,
    },
    {
      word: 'symbolOffset',
      count: 2549,
    },
    {
      word: 'showAllSymbol',
      count: 942,
    },
    {
      word: 'transitionDuration',
      count: 993,
    },
    {
      word: 'bottom',
      count: 3724,
    },
    {
      word: 'fillerColor',
      count: 229,
    },
    {
      word: 'nameMap',
      count: 1249,
    },
    {
      word: 'barMaxWidth',
      count: 747,
    },
    {
      word: 'radius',
      count: 2103,
    },
    {
      word: 'center',
      count: 2425,
    },
    {
      word: 'magicType',
      count: 3276,
    },
    {
      word: 'labelPrecision',
      count: 248,
    },
    {
      word: 'option',
      count: 654,
    },
    {
      word: 'seriesIndex',
      count: 935,
    },
    {
      word: 'controlPosition',
      count: 121,
    },
    {
      word: 'itemGap',
      count: 3188,
    },
    {
      word: 'padding',
      count: 3481,
    },
    {
      word: 'shadowStyle',
      count: 347,
    },
    {
      word: 'boxplot',
      count: 1394,
    },
    {
      word: 'labelFormatter',
      count: 264,
    },
    {
      word: 'realtime',
      count: 631,
    },
    {
      word: 'dataBackgroundColor',
      count: 239,
    },
    {
      word: 'showDetail',
      count: 247,
    },
    {
      word: 'showDataShadow',
      count: 217,
    },
    {
      word: 'x',
      count: 684,
    },
    {
      word: 'valueDim',
      count: 499,
    },
    {
      word: 'onZero',
      count: 931,
    },
    {
      word: 'right',
      count: 3255,
    },
    {
      word: 'clockwise',
      count: 1035,
    },
    {
      word: 'itemWidth',
      count: 1732,
    },
    {
      word: 'trigger',
      count: 3840,
    },
    {
      word: 'axis',
      count: 379,
    },
    {
      word: 'selectedOffset',
      count: 670,
    },
    {
      word: 'startAngle',
      count: 1293,
    },
    {
      word: 'minAngle',
      count: 590,
    },
    {
      word: 'top',
      count: 4637,
    },
    {
      word: 'avoidLabelOverlap',
      count: 870,
    },
    {
      word: 'labelLine',
      count: 3785,
    },
    {
      word: 'sankey',
      count: 2933,
    },
    {
      word: 'endAngle',
      count: 213,
    },
    {
      word: 'start',
      count: 779,
    },
    {
      word: 'roam',
      count: 1738,
    },
    {
      word: 'fontWeight',
      count: 2828,
    },
    {
      word: 'fontFamily',
      count: 2490,
    },
    {
      word: 'subtextStyle',
      count: 2066,
    },
    {
      word: 'indicator',
      count: 853,
    },
    {
      word: 'sublink',
      count: 708,
    },
    {
      word: 'zoom',
      count: 1038,
    },
    {
      word: 'subtarget',
      count: 659,
    },
    {
      word: 'length',
      count: 1060,
    },
    {
      word: 'itemSize',
      count: 505,
    },
    {
      word: 'controlStyle',
      count: 452,
    },
    {
      word: 'yAxisIndex',
      count: 2529,
    },
    {
      word: 'edgeLabel',
      count: 1188,
    },
    {
      word: 'radiusAxisIndex',
      count: 354,
    },
    {
      word: 'scaleLimit',
      count: 1313,
    },
    {
      word: 'geoIndex',
      count: 535,
    },
    {
      word: 'regions',
      count: 1892,
    },
    {
      word: 'itemHeight',
      count: 1290,
    },
    {
      word: 'nodes',
      count: 644,
    },
    {
      word: 'candlestick',
      count: 3166,
    },
    {
      word: 'crossStyle',
      count: 466,
    },
    {
      word: 'edges',
      count: 369,
    },
    {
      word: 'links',
      count: 3277,
    },
    {
      word: 'layout',
      count: 846,
    },
    {
      word: 'barBorderColor',
      count: 721,
    },
    {
      word: 'barBorderWidth',
      count: 498,
    },
    {
      word: 'treemap',
      count: 3865,
    },
    {
      word: 'y',
      count: 367,
    },
    {
      word: 'valueIndex',
      count: 704,
    },
    {
      word: 'showLegendSymbol',
      count: 482,
    },
    {
      word: 'mapValueCalculation',
      count: 492,
    },
    {
      word: 'optionToContent',
      count: 264,
    },
    {
      word: 'handleColor',
      count: 187,
    },
    {
      word: 'handleSize',
      count: 271,
    },
    {
      word: 'showContent',
      count: 1853,
    },
    {
      word: 'angleAxisIndex',
      count: 406,
    },
    {
      word: 'endValue',
      count: 327,
    },
    {
      word: 'triggerOn',
      count: 1720,
    },
    {
      word: 'contentToOption',
      count: 169,
    },
    {
      word: 'buttonColor',
      count: 71,
    },
    {
      word: 'rotate',
      count: 1144,
    },
    {
      word: 'trailLength',
      count: 116,
    },
    {
      word: 'boxWidth',
      count: 20,
    },
    {
      word: 'back',
      count: 53,
    },
    {
      word: 'rewind',
      count: 110,
    },
    {
      word: 'zoomToNodeRatio',
      count: 80,
    },
    {
      word: 'squareRatio',
      count: 60,
    },
    {
      word: 'parallelAxisDefault',
      count: 358,
    },
    {
      word: 'checkpointStyle',
      count: 440,
    },
    {
      word: 'nodeWidth',
      count: 49,
    },
    {
      word: 'color0',
      count: 62,
    },
    {
      word: 'layoutIterations',
      count: 56,
    },
    {
      word: 'nodeGap',
      count: 54,
    },
    {
      word: 'color(Array',
      count: 76,
    },
    {
      word: '<string>)',
      count: 76,
    },
    {
      word: 'repulsion',
      count: 276,
    },
    {
      word: 'tiled',
      count: 105,
    },
    {
      word: 'currentIndex',
      count: 145,
    },
    {
      word: 'axisType',
      count: 227,
    },
    {
      word: 'loop',
      count: 97,
    },
    {
      word: 'playInterval',
      count: 112,
    },
    {
      word: 'borderColor0',
      count: 23,
    },
    {
      word: 'gap',
      count: 43,
    },
    {
      word: 'autoPlay',
      count: 123,
    },
    {
      word: 'showPlayBtn',
      count: 25,
    },
    {
      word: 'breadcrumb',
      count: 119,
    },
    {
      word: 'colorMappingBy',
      count: 85,
    },
    {
      word: 'id',
      count: 18,
    },
    {
      word: 'blurSize',
      count: 85,
    },
    {
      word: 'minOpacity',
      count: 50,
    },
    {
      word: 'maxOpacity',
      count: 54,
    },
    {
      word: 'prevIcon',
      count: 12,
    },
    {
      word: 'children',
      count: 21,
    },
    {
      word: 'shape',
      count: 98,
    },
    {
      word: 'nextIcon',
      count: 12,
    },
    {
      word: 'showNextBtn',
      count: 17,
    },
    {
      word: 'stopIcon',
      count: 21,
    },
    {
      word: 'visibleMin',
      count: 83,
    },
    {
      word: 'visualDimension',
      count: 97,
    },
    {
      word: 'colorSaturation',
      count: 56,
    },
    {
      word: 'colorAlpha',
      count: 66,
    },
    {
      word: 'emptyItemWidth',
      count: 10,
    },
    {
      word: 'inactiveOpacity',
      count: 4,
    },
    {
      word: 'activeOpacity',
      count: 4,
    },
    {
      word: 'showPrevBtn',
      count: 19,
    },
    {
      word: 'playIcon',
      count: 26,
    },
    {
      word: 'ellipsis',
      count: 19,
    },
    {
      word: 'gapWidth',
      count: 19,
    },
    {
      word: 'borderColorSaturation',
      count: 10,
    },
    {
      word: 'handleIcon',
      count: 2,
    },
    {
      word: 'handleStyle',
      count: 6,
    },
    {
      word: 'borderType',
      count: 1,
    },
    {
      word: 'constantSpeed',
      count: 1,
    },
    {
      word: 'polyline',
      count: 2,
    },
    {
      word: 'blendMode',
      count: 1,
    },
    {
      word: 'dataBackground',
      count: 1,
    },
    {
      word: 'textAlign',
      count: 1,
    },
    {
      word: 'textBaseline',
      count: 1,
    },
    {
      word: 'brush',
      count: 3,
    },
  ];

  return rows;
}
