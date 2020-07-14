const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const less = require('less');
const csso = require('csso');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

async function compileLess(lessCodes, paths) {
  const outputs = await Promise.all(
    lessCodes.map((source, index) =>
      less.render(source, {
        paths: [path.resolve(__dirname, 'node_modules')],
        filename: paths[index],
      })
    )
  );
  return outputs.map(item => item.css);
}

async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest(output, paths) {
  await Promise.all(
    output.map((css, index) => {
      const libPath = paths[index].replace('/packages/', '/lib/');
      fs.copySync(paths[index], libPath);
      fs.writeFile(libPath.replace('.less', '.css'), css);
      fs.writeFile(libPath.replace('.less', '.js'), `import './style.less'`);
    })
  );
}

// compile component css
async function compile() {
  let codes;
  try {
    const paths = await glob(['./packages/**/*.less'], { absolute: true });
    codes = await Promise.all(paths.map(_path => fs.readFile(_path, 'utf-8')));
    codes = await compileLess(codes, paths);
    codes = await compilePostcss(codes, paths);
    codes = await compileCsso(codes);
    await dest(codes, paths);
  } catch (e) {
    console.error(e);
  }
}

fs.copy(
  path.join(__dirname, '../packages/assets'),
  path.join(__dirname, '../lib/assets')
);
compile();
