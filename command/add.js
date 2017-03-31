'use strict'
const co = require('co')
const prompt = require('co-prompt')
// const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')
var inTplData = require('../templates')	//用户输入模板信息

module.export = co(function *(){
	var tplName = yield prompt('Template name:');
	var gitUrl = yield prompt('Git https link:');
	var author = yield prompt('Author:');
	var version = yield prompt('Version:');
	var branch = yield prompt('Branch:');

	if(!inTplData.tpl[tplName]) {
		inTplData.tpl[tplName] = {};
		inTplData.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '');
		inTplData.tpl[tplName]['branch'] = branch;
	}
	else{
		console.log(chalk.red('Template name has already existed!'));
		process.exit();
	}

	fs.writeFile(__dirname + '/../templates.json', JSON.stringify(inTplData), (err) => {
		if (err) {
			console.log(chalk.red(err));
			console.log(chalk.grey('The last template list is : \n'));
			console.log(inTplData);
			console.log('\n');
			process.exit();
		}
		else{
			console.log(chalk.green('New template added!'));
			process.exit();
		}
	})
})


