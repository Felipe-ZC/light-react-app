const process = require('process');
const utils = require('./utils');

const install = async (dir, name) => {
	try {	
		// Create app directory
		process.stdout.write("Creating application directory...")
		const APP_DIR = await utils.dir.create_app_dir(dir, name);
		
		// Enter app folder
		process.chdir(APP_DIR);	
		
		// Create project files 
		process.stdout.write("Creating project files...");
		await utils.dir.create_project_files();
		process.stdout.write("OK\n");
		
		// Install dependencies
		process.stdout.write("Installing dependencies...\n")
		await utils.package.install();
		process.stdout.write("OK\n")
		
		// Done
	}
	catch (err) {
		console.log('Error: ' + err);
	}
}

module.exports = install
