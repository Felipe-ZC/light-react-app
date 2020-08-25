const fs = require('fs');
const path = require('path');

const create_dir_sync = (target) => {
	try {
		fs.mkdirSync(target, { recursive: true });
	}
	catch err {
		
	}
}

module.exports = create_dir_sync;
