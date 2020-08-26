const process = require('process');
const utils = require('./utils');

async function* installNewApp(steps) {
	try {
		let args = null;
		for (let step of steps) {
			const { msg, task } = step
			args = args || step.args
			
			console.log(msg)
			const result =  await task(...args)
			yield result;

			args = step.useResultAsArgs  
				? step.transformResult 
						? step.transformResult(result)
						: result
				: null
		}
	}
	catch(err) {
		throw err	
	}
}

const transform = (str) => { return [str] }

let defaultSteps = [
	{
		"msg": "Creating application directory...", 
		"args": [],
		"task": utils.dir.create_app_dir,
		"useResultAsArgs": true,
		"transformResult": transform 
	},
	{
		"msg": "Entering application directory...", 
		"args": [],
		"task": process.chdir,
	},
	{
		"msg": "Creating project files......", 
		"args": [],
		"task": utils.dir.create_project_files,
	},
	{
		"msg": "Installng dependencies...", 
		"args": [],
		"task": utils.package.install,
	}
]

const install = async (dir, name, installSteps=[]) => {
	if(!installSteps.length) {
		installSteps = defaultSteps;
		installSteps[0].args = [dir, name]
	}
	try {	
		const asyncIter = installNewApp(installSteps);
		for await (const result of asyncIter) {
			if(result && result.error) throw result.error
			console.log("OK")
		}
	}
	catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = install
