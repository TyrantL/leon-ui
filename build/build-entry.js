const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const packageJson = require('../package.json');
const Components = require('./get-components')();

const version = process.env.VERSION || packageJson.version;

const uninstallComponents = [];

const importList = Components.map(
  name => `import ${uppercamelize(name)} from './${name}';`
);
const exportList = Components.map(name => `${uppercamelize(name)}`);
const intallList = exportList.filter(
  name => !uninstallComponents.includes(uppercamelize(name))
);

const content = `${importList.join('\n')}

const version = '${version}';
const components = [${intallList.join(',\n')}];
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { ${exportList.join(',\n')} };

export default {
  install,
  version,
  ${exportList.join(',\n')},
};
`;

// const types = exportList.map(
//   name => `export class ${name} extends SumsComponent {}`
// );

// const typesContent = `import Vue from 'vue';
// import { SumsComponent } from './component';
//
// export const version: string;
// export function install (vue: typeof Vue): void
// ${types.join('\n')}
// `;

const importStyleList = Components.map(name => `@import "./${name}/style";`);

const styleContent = `${importStyleList.join('\n')}`;

const componentsMap = Components.reduce(
  (map, name) => Object.assign(map, { [name]: `./packages/${name}/index.js` }),
  {}
);

fs.writeFileSync(path.join(__dirname, '../packages/style.less'), styleContent);

fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);

// fs.writeFileSync(path.join(__dirname, '../types/index.d.ts'), typesContent);

fs.writeFileSync(
  path.join(__dirname, './components.json'),
  JSON.stringify(componentsMap, null, 4)
);
