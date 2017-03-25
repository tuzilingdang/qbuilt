'use strict'
const co = require('co')
const prompt = require('co-prompt')
// const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')
var inTplData = {"tpl":{}}	//用户输入模板信息

module.export = co(function *(){
	var tplName = yield prompt('template name:')
	var gitUrl = yield prompt('git https link:')
	var author = yield prompt('author:')
	var version = yield prompt('version:')
	var branch = yield prompt('branch:')

	if(!inTplData.tpl[tplName]) {
		console.log("no tpl existed")
		inTplData.tpl[tplName] = {}
		inTplData.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '')
		inTplData.tpl[tplName]['branch'] = branch
	}
	else{
		console.log(chalk.red('Template name has already existed!'))
		process.exit()
	}

	console.log(__dirname+ '/../templates.json')

	fs.writeFile(__dirname + '/../templates.json', JSON.stringify(inTplData,), (err) => {
		console.log("if err:" )
		if (err) {
			console.log(err)
			console.log(chalk.grey('The last template list is : \n'))
			console.log(inTplData)
			console.log('\n')
			process.exit()
		}
		else{
			console.log(chalk.green('New template added!'))
			process.exit()
		}
	})
})


