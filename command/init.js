'use strict'
const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const tplInfo = require('../templates');
const chalk = require('chalk');

module.exports = co(function *(){ 
     var projectInfo = {};
     console.log(chalk.red.bgBlack.bold('      -       - '+" "+"     "));
     console.log(chalk.white.bgBlack.bold('     | |     | | '+"     "));
     console.log(chalk.blue.bgBlack.bold('     | |     | | '+"     "));
     console.log(chalk.magenta.bgBlack.bold('     | |     | | '+"     "));
     console.log(chalk.cyan.bgBlack.bold('     |  —————  | '+"     "));
     console.log(chalk.green.bgBlack.bold('     | Ó     Ó | '+"     "));
     console.log(chalk.gray.bgBlack.bold('     |    ı    | '+"     "));
     console.log(chalk.red.bgBlack.bold('      ---------  '+"     "));
     console.log(chalk.cyan.bgBlack.bold(' Welcome to Qbuilder!'+" ")+"\n");

     var tplName = yield prompt("template: ");

     if(!tplInfo.tpl[tplName]){
          console.log(chalk.red("The template does't exitst, try command \'qbuilder list\' for all templates information."));
          process.exit();
     }
     else{
          projectInfo.name = yield prompt("project name: ");
          projectInfo.version = yield prompt("version: ");
          projectInfo.author = yield prompt("auhtor: ");
          projectInfo.description = yield prompt("description: ");
          projectInfo.repository = yield prompt("repository: ");
          var gitUrl = tplInfo.tpl[tplName].url;
          var gitCmd = "git clone " + gitUrl ;
          console.log(gitCmd);
          console.log(chalk.yellow('\n Start generating...'));
     }

     var renameCmd = "mv " + tplName + " " + projectInfo.name;

     yield exec(gitCmd, (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            process.exit();
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          exec(renameCmd, (error, stdout, stderr) => {
                    if (error) {
                      console.log(error);
                      process.exit();
                    }
                    console.log(`${stdout}`);
                    console.log(`${stderr}`);
                    console.log(chalk.green('\n √ Project generated!'));
                    process.exit();
           });
     });

  });
