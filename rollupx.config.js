/* eslint-env node */

module.exports = {
  banner:
    '/*!\n' +
    ` * v-charts-v5 v${require('./package.json').version}\n` +
    ` * (c) 2023-${new Date().getFullYear()} GreatMap\n` +
    ' */\n',
  outputDir: 'lib',
  inputFiles: ['**/*'],
  stylesParseFiles: [],
  stylesCopyFiles: ['**/*'],
  typesOutputDir: 'lib',
  singleFile: false,
};
