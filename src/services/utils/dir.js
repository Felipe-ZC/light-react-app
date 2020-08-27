'use strict';
const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const TEMPLATE_FILES = path.resolve(__dirname, '../../config/install/');

const create_project_files = (appDir, projectFiles = '') => {
  return new Promise((resolve, reject) => {
    ncp(projectFiles || TEMPLATE_FILES, appDir, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

const create_app_dir = (targetDir) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(targetDir, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = { create_project_files, create_app_dir };
