const fs = require('fs');
const path = require('path');

const excludes = [
  'components',
  'assets',
  'index.js',
  'style.less',
  'style.css',
  'utils',
  'services',
  'mixins',
  'less',
];

module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  return dirs.filter(dirName => !excludes.includes(dirName));
};
