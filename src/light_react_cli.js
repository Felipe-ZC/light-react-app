#!/usr/bin/env node
const { exec, spawn, fork } = require('child_process');
const process = require('process');
const fs = require('fs');
const path = require('path');

//const series = require('async');

const install = (dir, name) => {
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
		
		console.log(`Installing react base modules...`);
	}
	catch (err) {
		console.log('chdir: ' + err);
	}
}

require('yargs')
	.command('new [name] [dir]', 'Create a new light React application', (yargs) => {
		yargs
			.positional('dir', {
				describe: 'directory to create app in',
				default: '.'
			})
		yargs
			.positional('name', {
				describe: 'name of app',
				default: 'client'
			})
	}, (argv) => {
		if (argv.verbose) console.info(`start server on :${argv.port}`)
		install(argv.dir, argv.name)
	})
	.option('verbose', {
		alias: 'v',
		type: 'boolean',
		description: 'Run with verbose logging'
	})
	.argv

