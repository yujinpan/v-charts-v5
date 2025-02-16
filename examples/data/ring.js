export default {
  name: '环图',
  type: 'ring',
  data: [
    {
      name: '简单环图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {},
    },
    {
      name: '玫瑰图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        roseType: 'radius',
      },
    },
    {
      name: '限制显示条数',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 },
          { 日期: '1-7', 余额: 4123, 年龄: 20 },
          { 日期: '1-8', 余额: 1123, 年龄: 20 },
          { 日期: '1-9', 余额: 5223, 年龄: 20 },
          { 日期: '1-10', 余额: 9123, 年龄: 20 },
          { 日期: '1-11', 余额: 4123, 年龄: 20 },
        ],
      },
      settings: {
        limitShowNum: 5,
      },
    },
    {
      name: '设置数据类型',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        dataType: 'KMB',
      },
    },
    {
      name: '指标维度配置',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        dimension: '余额',
        metrics: '年龄',
      },
    },
    {
      name: '限制legend显示长度',
      data: {
        columns: ['日期', '余额', '比率'],
        rows: [
          { 日期: '1-1', 余额: 123, 比率: 0.1 },
          { 日期: '1-2', 余额: 1223, 比率: 0.2 },
          { 日期: '1-3', 余额: 2123, 比率: 0.3 },
          { 日期: '1-4', 余额: 4123, 比率: 0.4 },
          { 日期: '1-5', 余额: 3123, 比率: 0.5 },
          { 日期: '1-6', 余额: 7123, 比率: 0.6 },
        ],
      },
      settings: {
        legendLimit: 2,
      },
    },
    {
      name: '设置环图样式',
      data: {
        columns: ['日期', '余额', '比率'],
        rows: [
          { 日期: '1-1', 余额: 123, 比率: 0.1 },
          { 日期: '1-2', 余额: 1223, 比率: 0.2 },
          { 日期: '1-3', 余额: 2123, 比率: 0.3 },
          { 日期: '1-4', 余额: 4123, 比率: 0.4 },
          { 日期: '1-5', 余额: 3123, 比率: 0.5 },
          { 日期: '1-6', 余额: 7123, 比率: 0.6 },
        ],
      },
      settings: {
        radius: [100, 10],
        offsetY: 300,
      },
    },
    {
      name: '设置legend别名环图',
      data: {
        columns: ['日期', '余额', '比率'],
        rows: [
          { 日期: '1-1', 余额: 123, 比率: 0.1 },
          { 日期: '1-2', 余额: 1223, 比率: 0.2 },
          { 日期: '1-3', 余额: 2123, 比率: 0.3 },
          { 日期: '1-4', 余额: 4123, 比率: 0.4 },
          { 日期: '1-5', 余额: 3123, 比率: 0.5 },
          { 日期: '1-6', 余额: 7123, 比率: 0.6 },
        ],
      },
      settings: {
        limitShowNum: 5,
        legendName: {
          其他: '别的时间的时候biu~',
        },
      },
    },
  ],
};
