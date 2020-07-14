/**
 * @author: leon
 * @date: 2020/7/14 2:47 下午
 */
const { exec } = require('shelljs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'selected',
      message: '请选择版本升级类型',
      choices: [
        'major',
        {
          name: '大版本更新',
          disabled: '较大版本更新时选择此项',
        },
        'minor',
        {
          name: '小版本更新',
          disabled: '较小版本更新时选择此项',
        },
        'patch',
        {
          name: '更新补丁',
          disabled: '修复bug选择此项',
        },
      ],
    },
  ])
  .then(answer => {
    exec(`npm version ${answer.selected} && npm run lib`);
  });
