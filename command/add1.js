'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')


module.export = 	co(function *() {
		var tplName = yield prompt('template name:')
		var gitUrl = yield prompt('git https link:')
		var branch = yield prompt('branch:')

		if(!config.tpl[tplName]) {
			config.tpl[tplName] = {}
			config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '')
			config.tpl[tplName]['branch'] = branch
		}
		else{
			console.log(chalk.red('Template has already existed!'))
			process.exit()
		}

		fs.writeFile(__dirname + '/../template.json', JDON.stringfy(config),'utf-8', (err) => {
			if (err) {
				console.log(err)
				console.log(chalk.green('new template added!'))
				console.log(chalk.grey('the last template list is : \n'))
				console.log(config)
				console.log('\n')
				process.exit()
			}
		})
	});
