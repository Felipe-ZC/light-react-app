#!/usr/bin/env node
'use strict';

const process = require('process');
const install = require('./services/installer.js');

require('yargs').command(
  'new [name] [dir]',
  'Create a new light React application',
  (yargs) => {
    yargs.positional('dir', {
      describe: 'directory to create app in',
      default: '.',
    });
    yargs.positional('name', {
      describe: 'name of app',
      default: 'client',
    });
  },
  (argv) => {
    process.stdout.write('Starting...\n');
    install(argv.dir, argv.name);
  },
).argv;
