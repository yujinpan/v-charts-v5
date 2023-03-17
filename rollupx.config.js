/* eslint-env node */

module.exports = {
  banner:
    '/*!\n' +
    ` * v-charts-x v${require('./package.json').version}\n` +
    ` * (c) 2023-${new Date().getFullYear()} yujinpan\n` +
    ' */\n',
  outputDir: 'lib',
  typesOutputDir: 'lib',

  formats: Object.entries(require('./src/component-list')).flatMap(
    ([name, { src, dist }]) => {
      src = src.replace('src/', '');
      dist = dist.replace('lib/', '/');

      return [
        {
          format: 'es',
        },
        {
          format: 'cjs',
          inputFiles: [src],
          outputFile: dist + '.common.js',
          singleFile: true,
        },
        {
          format: 'umd',
          inputFiles: [src],
          outputFile: dist + '.min.js',
          singleFile: true,
          external: /^(echarts)/,
          outputName: name,
          outputGlobals: {
            echarts: 'echarts',
          },
        },
      ];
    },
  ),
};
