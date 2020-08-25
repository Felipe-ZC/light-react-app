const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const default_package_dir = path.resolve(__dirname, "../../config/install/package.json") 

const write_sync = (app_dir) => {
	const raw = fs.readFileSync(default_package_dir);
	const parsed = JSON.parse(raw);
	fs.writeFileSync('package.json', JSON.stringify(parsed, null, 4));
}

const install = () => {
	return spawn('npm i -y', {
		stdio: 'inherit',
		shell: true
	});
}

module.exports = { write_sync, install }
