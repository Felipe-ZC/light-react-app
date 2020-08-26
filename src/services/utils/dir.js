const fs = require("fs");
const path = require("path");
const ncp = require("ncp");
const TEMPLATE_FILES = path.resolve(__dirname, "../../config/install/");

const create_project_files = (cb) => {
  return new Promise((resolve, reject) => {
    ncp(TEMPLATE_FILES, ".", (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

const create_app_dir = (dir, name, cb) => {
  const target = path.join(dir, name);
  return new Promise((resolve, reject) => {
    fs.mkdir(target, (err) => {
      if (err) reject(err);
      resolve(target);
    });
  });
};

module.exports = { create_project_files, create_app_dir };
