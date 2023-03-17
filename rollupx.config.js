/* eslint-env node */

module.exports = {
  banner:
    '/*!\n' +
    ` * v-charts-x v${require('./package.json').version}\n` +
    ` * (c) 2023-${new Date().getFullYear()} yujinpan\n` +
    ' */\n',
  outputDir: 'lib',
  typesOutputDir: 'lib',

  formats: [
    {
      format: 'es',
    },
    {
      format: 'cjs',
      inputFiles: ['packages/*/index.js'],
      outputFile: '/[dir].common.js',
      singleFile: true,
    },
    {
      format: 'umd',
      inputFiles: ['packages/*/index.js'],
      outputFile: '/[dir].min.js',
      singleFile: true,
      external: /^(echarts)/,
      outputGlobals: {
        echarts: 'echarts',
      },
    },
  ],
};
