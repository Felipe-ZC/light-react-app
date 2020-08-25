const fs = require('fs');
const path = require('path');
const ncp = require('ncp')
const TEMPLATE_FILES = path.resolve(__dirname, "../../config/install/") 

const create_project_files = (cb) => {
	ncp(TEMPLATE_FILES, ".", cb);
}

const create_dir_sync = (dir, name) => {
	const target = path.join(dir, name)
	fs.mkdirSync(target, { recursive: true });
	return target;
}

module.exports = {create_project_files, create_dir_sync}
