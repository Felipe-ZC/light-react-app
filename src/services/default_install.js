'use strict';
const utils = require('./utils');

const getDefaultSteps = (appDir) => {
  return [
    {
      msg: 'Creating application directory...',
      args: [appDir],
      task: utils.dir.createAppDir,
    },
    {
      msg: 'Creating project files...',
      args: [appDir],
      task: utils.dir.createProjectFiles,
    },
    {
      msg: 'Installng dependencies...',
      args: [getDefaultInstallScript(appDir)],
      task: utils.package.install,
    },
  ];
};

const getDefaultInstallScript = (appDir) => {
  return `cd ${appDir} && npm i`;
};

module.exports = getDefaultSteps;
