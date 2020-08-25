const fs = require('fs');
const path = require('path');
const process = require('process');

export default const create_dir = (dir, name) => {
	try {
		APP_DIR = path.join(dir, name);
		fs.mkdirSync(APP_DIR, { recursive: true })
	}
	catch (err) {
		throw err	
	}
}
