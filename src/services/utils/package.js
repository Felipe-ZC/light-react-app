const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const default_package_dir = path.resolve(__dirname, "../../config/install/package.json") 
/*
 * npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
 * */
const install = () => {
	const child = spawn('npm i -y --save', {
		stdio: 'inherit',
		shell: true
	});

	return new Promise((resolve, reject) => {
		child.on('exit', (code) => {
			if(!code) resolve(code)
			reject(code)
		})
	})
}

module.exports = { install }
