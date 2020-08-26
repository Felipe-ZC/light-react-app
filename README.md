# light-react-app

A script to automate the creation of React + Webpack applications.

## TODO
	
	Current
	- Load all script dependencies before 
		calling install.
	- Refactor default installation logic 
	  (defaultSteps)
	- Fix casing issues (camel vs snake) 	

	General 
	- Testing.
	- Documentation.
	- Use a logging library.
	- Add support for custom package.json.
	- Add support for custom project files.
	- Tidy up package.json

## Setup

Run the following commands to install
this script locally:

```
git clone https://github.com/Felipe-ZC/light-react-app.git
cd light-react-app
npm i -y
```

Use `npm i -gy` flag to install this script globally and
run it anywhere on your machine.

## Usage

Run the script:
```
# 1
npm start new [app_name] [dir_name]

# 2
node src/light_react_cli.js new [app_name] [dir_name]

# 3 (if you installed the script globally...)
light-react-app new [app_name] [dir_name]
```
