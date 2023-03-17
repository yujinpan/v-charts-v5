/* eslint-env node */

module.exports = {
  banner:
    '/*!\n' +
    ` * v-charts-x v${require('./package.json').version}\n` +
    ` * (c) 2023-${new Date().getFullYear()} yujinpan\n` +
    ' */\n',
  outputDir: 'lib',
  inputFiles: ['**/*'],
  stylesParseFiles: [],
  stylesCopyFiles: ['**/*'],
  typesOutputDir: 'lib',
  singleFile: false,
};
