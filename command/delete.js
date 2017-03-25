'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = ('chalk')
const fs = require('fs')

module.export = () => {
	co(function *() {
		let tplName = yield prompt ('template name:')

		if(config.tpl[tplName]){
			config.tpl[tplName] = undefined
		}
		else{
			console.log(chalk.red('template does not exist'))
			process.exit()
		}

		fs.writeFile(__dirname + 'template.json', JSON.strignfy(config), 'utf-8', (err) => {
			if(err)
				console.log(err)
			console.log(chalk.green('template deleted!'))
			console.log(chalk.cyan('the last list is : \n!'))
			console.log(config)
			process.exit()
		})
	})
} 