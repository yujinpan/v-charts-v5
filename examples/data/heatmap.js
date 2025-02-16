export default {
  name: '热力图',
  type: 'heatmap',
  data: [
    {
      name: '简单热力图',
      data: {
        columns: ['时间', '地点', '人数', 'GDP', '气温'],
        rows: [
          { 时间: '星期一', 地点: '北京', 人数: 1000, GDP: 100, 气温: 20 },
          { 时间: '星期二', 地点: '上海', 人数: 400, GDP: 130, 气温: 21 },
          { 时间: '星期三', 地点: '杭州', 人数: 800, GDP: 200, 气温: 22 },
          { 时间: '星期二', 地点: '深圳', 人数: 200, GDP: 240, 气温: 23 },
          { 时间: '星期三', 地点: '长春', 人数: 100, GDP: 300, 气温: 24 },
          { 时间: '星期五', 地点: '南京', 人数: 300, GDP: 100, 气温: 25 },
          { 时间: '星期四', 地点: '江苏', 人数: 800, GDP: 160, 气温: 26 },
          { 时间: '星期一', 地点: '北京', 人数: 700, GDP: 190, 气温: 27 },
          { 时间: '星期三', 地点: '上海', 人数: 300, GDP: 200, 气温: 28 },
          { 时间: '星期二', 地点: '杭州', 人数: 500, GDP: 500, 气温: 29 },
        ],
      },
    },
    {
      name: '配置坐标轴显示内容',
      data: {
        columns: ['时间', '地点', '人数'],
        rows: [
          { 时间: '星期一', 地点: '北京', 人数: 1000 },
          { 时间: '星期二', 地点: '上海', 人数: 400 },
          { 时间: '星期三', 地点: '杭州', 人数: 800 },
          { 时间: '星期二', 地点: '深圳', 人数: 200 },
          { 时间: '星期三', 地点: '长春', 人数: 100 },
          { 时间: '星期五', 地点: '南京', 人数: 300 },
          { 时间: '星期四', 地点: '江苏', 人数: 800 },
          { 时间: '星期三', 地点: '北京', 人数: 700 },
          { 时间: '星期三', 地点: '上海', 人数: 300 },
          { 时间: '星期二', 地点: '杭州', 人数: 500 },
        ],
      },
      settings: {
        xAxisList: [
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
          '星期日',
        ],
        yAxisList: ['北京', '上海', '杭州', '深圳', '长春', '南京', '江苏'],
      },
    },
    {
      name: '地图+热力图',
      data: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          { lat: 115.892151, lng: 28.676493, 人数: 1000 },
          { lat: 117.000923, lng: 36.675807, 人数: 400 },
          { lat: 113.665412, lng: 34.757975, 人数: 800 },
          { lat: 114.298572, lng: 30.584355, 人数: 200 },
          { lat: 112.982279, lng: 28.19409, 人数: 100 },
          { lat: 113.280637, lng: 23.125178, 人数: 300 },
          { lat: 110.33119, lng: 20.031971, 人数: 800 },
          { lat: 104.065735, lng: 30.659462, 人数: 700 },
          { lat: 108.948024, lng: 34.263161, 人数: 300 },
          { lat: 103.823557, lng: 36.058039, 人数: 500 },
        ],
      },
      settings: {
        position: 'china',
        type: 'map',
        geo: {
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111',
            },
            emphasis: {
              areaColor: '#2a333d',
            },
          },
        },
      },
    },
    {
      name: '百度地图+热力图',
      data: {
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
      },
      settings: {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120.14322240845, 30.236064370321],
          zoom: 14,
          roam: true,
        },
        type: 'bmap',
      },
    },
  ],
};
