'use strict';
const utils = require('./utils');

const getDefaultSteps = (appDir) => {
  return [
    {
      msg: 'Creating application directory...',
      args: [appDir],
      task: utils.dir.create_app_dir,
    },
    {
      msg: 'Creating project files...',
      args: [appDir],
      task: utils.dir.create_project_files,
    },
    {
      msg: 'Installng dependencies...',
      args: [getDefaultInstallScript(appDir)],
      task: utils.package.install,
    },
  ];
};

// `npm install react react-dom --save &&
// npm install --save-dev @babel/core @babel/preset-env
// @babel/preset-react webpack webpack-cli webpack-dev-server
// babel-loader css-loader style-loader html-webpack-plugin')`
const getDefaultInstallScript = (appDir) => {
  return `cd ${appDir} && npm i`;
};

module.exports = getDefaultSteps;
