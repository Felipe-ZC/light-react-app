'use strict';
const { spawn } = require('child_process');

const install = (script) => {
  const child = spawn(script, {
    stdio: 'inherit',
    shell: true,
  });

  return new Promise((resolve, reject) => {
    child.on('exit', (code) => {
      if (!code) resolve(code);
      reject(code);
    });
    child.on('error', (err) => reject(err));
  });
};

module.exports = { install };
