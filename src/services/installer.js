const { exec, spawn, fork } = require('child_process');
const process = require('process');
const fs = require('fs');
const path = require('path');

const install = (dir, name) => {
	console.log("installing")
	try {
		/*
		 * Create App directory
		 * */
		APP_DIR = path.join(dir, name)
		console.log(`Creating new react application: ${APP_DIR}`);
		fs.mkdirSync(APP_DIR, { recursive: true })
		process.chdir(APP_DIR);

		/*
		 * Initialize new npm package 
		 * and install depdencies.
		 * */

		console.log(`In app dir: ${process.cwd()}`)
		
		const child = spawn('npm init', {
			stdio : 'inherit',
			shell : true
		})

		child.on('close', (code) => {
			console.log(`child process exited with code ${code}`);
		});

		//console.log(`Installing react base modules...`);
		//const child2 = spawn('npm init', {
			//stdio : 'inherit',
			//shell : true
		//})

	}
	catch (err) {
		console.log('chdir: ' + err);
	}
}

module.exports = install
