const { spawn } = require('child_process');
const process = require('process');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp')
const default_package_dir = path.resolve(__dirname, "../config/install/package.json") 
const project_files_dir = path.resolve(__dirname, "../config/install/static/") 

const create_dir_sync = (dir, name) => {
	const target = path.join(dir, name)
	fs.mkdirSync(target, { recursive: true });
	return target;
} 

const write_package_json = (app_dir) => {
	const raw = fs.readFileSync(default_package_dir);
	const parsed = JSON.parse(raw);
	fs.writeFileSync('package.json', JSON.stringify(parsed, null, 4));
}

const install_package_json = (app_dir) => {
	return spawn('npm i -y', {
		stdio: 'inherit',
		shell: true
	});
}

const create_project_files = () => {
	ncp(project_files_dir, ".", function (err) {
		 if (err) {
			 return console.error(err);
		 }
		 console.log('done!');
	});
}

const install = (dir, name) => {
	console.log("Creating new application: ", name)
	try {
		/*
		 * Create App directory
		 * */
			process.stdout.write("Creating application directory... ")
			const app_dir = create_dir_sync(dir, name)
			process.stdout.write("OK\n")
			
			// Create package.json file
			process.chdir(app_dir)	
			process.stdout.write("Creating package.json... ")
			write_package_json(app_dir)
			process.stdout.write("OK\n")

			// Install dependencies
			process.stdout.write("Installing dependencies... ")
			const child = install_package_json(dir, name)
			child.on('exit', (code) => {
				if(code == 0) process.stdout.write("OK\n")
			})

			// Create project files	
			process.stdout.write("Creating project files...")
			create_project_files()
	}
	catch (err) {
		console.log('chdir: ' + err);
	}
}

module.exports = install
