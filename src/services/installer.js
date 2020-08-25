const process = require('process');
const utils = require('./utils')

const install_deps = (cb) => {
	const child = utils.package.install()
	child.on('exit', cb)
}

const done = () => {
	process.stdout.write("OK")
}

const install = (dir, name) => {
	console.log("Creating new application: ", name)
	try {	
			// Create app directory
			process.stdout.write("Creating application directory... ")
			const app_dir = utils.dir.create_dir_sync(dir, name)
			process.stdout.write("OK\n")
			
			// Enter app folder
			process.chdir(app_dir)	
			
			// Create project files	
			process.stdout.write("Creating project files...\n")
			utils.dir.create_project_files((error) => {
				if(error) throw error
				process.stdout.write("Installing dependencies...\n")
				install_deps(done)
			})
	}
	catch (err) {
		console.log('chdir: ' + err);
	}
}

module.exports = install
