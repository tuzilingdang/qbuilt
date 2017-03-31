'use strict'
const co = require('co');
const prompt = require('co-prompt');
const tplInfo = require('../templates');
const chalk = require('chalk');
const fs = require('fs');

module.export =co(function *() {
	var tplName = yield prompt ('Template name:');

	if(!tplInfo.tpl[tplName]){
		console.log(chalk.red.bold('This template does\'nt exist.'));
		process.exit();
	}
	else{
		delete tplInfo.tpl[tplName];
	}

	fs.writeFile(__dirname + '/../templates.json', JSON.stringify(tplInfo), (err) => {
	console.log(__dirname+ '/../templates.json');		
		if(err){
			console.log(chalk.red(err));
			process.exit();
		}
		console.log(chalk.green.bold('Template had been deleted!'));
		process.exit();
	})

});

