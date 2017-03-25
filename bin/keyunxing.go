#! /usr/bin/env node 

// var program = require('commander')
// program
//  .arguments('<file>')
//  .option('-u, --username <username>', 'The user to authenticate as')
//  .option('-p, --password <password>', 'The user\'s password')
//  .action(function(file) {
//     console.log('user: %s pass: %s file: %s',
//         program.username, program.password, file);
//  })
//  .parse(process.argv);



var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');

program
	.option('-u, --username <username>', 'The user to authenticate as')
	.option('-p, --password <password>', 'The user\'s password')
	.action(function(file) {
	   co(function *() {
	     var username = yield prompt('username: ');
	     var password = yield prompt.password('password: ');
	     console.log('user: %s pass: %s file: %s',
	         program.username, program.password, file);
	   });
	})
	.parse(process.argv);

	// #! /usr/bin/env node 

	// const program = require('commander');

	// var a = require('../command/add.js');
	// console.log("typeof a:" +a);

	// program 
	// 	.command("add")
	// 	.description('Add new template')
	// 	.alias('a')
	// 	.action(()=>{
	// 		require('../command/add.js')
	// 	});
	 
	// program
	//   .version('0.0.1')
	//   .option('-p, --peppers', 'Add peppers')
	//   .option('-P, --pineapple', 'Add pineapple')
	//   .option('-b, --bbq-sauce', 'Add bbq sauce')
	//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	//   .parse(process.argv);

	// console.log('you ordered a pizza with:');
	// if (program.peppers) console.log('  - peppers');
	// if (program.pineapple) console.log('  - pineapple');
	// if (program.bbqSauce) console.log('  - bbq');
	// console.log('  - %s cheese', program.cheese);