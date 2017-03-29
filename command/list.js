'use strict'
const chalk = require('chalk');
const tplInfo = require('../templates');

module.exports.print = () => {
	for(var item in tplInfo.tpl){
		console.log(chalk.magenta.bold(item));		
	}
	process.exit();	
}