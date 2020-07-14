/**
 * @author: leon
 * @date: 2020/7/13 6:28 下午
 */
const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;
const tasks = [
  'npm run build:entry',
  'vue-cli-service build --target lib --name leon-ui --dest lib packages/index.js',
  'node build/less2css.js',
  'webpack --config build/webpack.component.js',
];

tasks.forEach(task => {
  signale.start(task);
  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  const result = shell.exec(`${task} --silent`);
  if (result.code !== 0) {
    interactive.error(task);
  } else {
    interactive.success(task);
  }
});
