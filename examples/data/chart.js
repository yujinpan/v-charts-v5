export default {
  name: '图',
  type: 'chart',
  data: [
    {
      name: '折线图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: 1, 余额: 123, 年龄: 3 },
          { 日期: 2, 余额: 1223, 年龄: 6 },
          { 日期: 3, 余额: 2123, 年龄: 9 },
          { 日期: 4, 余额: 4123, 年龄: 12 },
          { 日期: 5, 余额: 3123, 年龄: 15 },
          { 日期: 6, 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        type: 'line',
      },
    },
    {
      name: '柱状图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: 1, 余额: 123, 年龄: 3 },
          { 日期: 2, 余额: 1223, 年龄: 6 },
          { 日期: 3, 余额: 2123, 年龄: 9 },
          { 日期: 4, 余额: 4123, 年龄: 12 },
          { 日期: 5, 余额: 3123, 年龄: 15 },
          { 日期: 6, 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        type: 'histogram',
      },
    },
    {
      name: '饼图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: 1, 余额: 123, 年龄: 3 },
          { 日期: 2, 余额: 1223, 年龄: 6 },
          { 日期: 3, 余额: 2123, 年龄: 9 },
          { 日期: 4, 余额: 4123, 年龄: 12 },
          { 日期: 5, 余额: 3123, 年龄: 15 },
          { 日期: 6, 余额: 7123, 年龄: 20 },
        ],
      },
      settings: {
        type: 'pie',
      },
    },
  ],
};
