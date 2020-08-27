'use strict';
const process = require('process');
const path = require('path');
const getDefaultSteps = require('./default_install.js') 

async function *installNewApp(steps) {
  try {
    let args = null;
    for (let step of steps) {
      const { msg, task } = step;
      args = args || step.args;

      console.log(msg);
      const result = await task(...args);
      yield result;

      args = step.useResultAsArgs
        ? step.transformResult
          ? step.transformResult(result)
          : result
        : null;
    }
  } catch (err) {
    throw err;
  }
}

/*
 * Args = cli args
 * preinstall = task to run before starting install
 * installSteps = step object containing installation
 * instructions.
 * */
const install = async(args, preinstall, installSteps) => {
  try {
		const APP_DIR = path.join(args.dir, args.name)
		
		// No custom installSteps, use default installation...
		if (!installSteps) 
			installSteps = getDefaultSteps(APP_DIR);
		
		// Start installing new app...
    const asyncIter = installNewApp(installSteps);
    for await (const result of asyncIter) {
      if (result && result.error) throw result.error;
      console.log('OK');
    }
	}
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = install;
