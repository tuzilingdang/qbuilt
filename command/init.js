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
     console.log(chalk.cyan.bgBlack.bold(' Welcome to Qbuild!'+" ")+"\n");

     var tplName = yield prompt(chalk.green.bold("Input the template name you want to use: "));

     if(!tplInfo.tpl[tplName]){
          console.log(chalk.red("The template does't exitst, try command \'qbuild list\' for all templates information."));
          process.exit();
     }
     else{
          projectInfo.name = yield prompt(chalk.blue.bold("project name: "));
          projectInfo.version = yield prompt(chalk.blue.bold("version: "));
          projectInfo.author = yield prompt(chalk.blue.bold("auhtor: "));
          projectInfo.description = yield prompt(chalk.blue.bold("description: "));
          projectInfo.repository = yield prompt(chalk.blue.bold("repository: "));
          var gitUrl = tplInfo.tpl[tplName].url;
          var gitCmd = "git clone " + gitUrl ;
          console.log(gitCmd);
          console.log(chalk.yellow('\n Start generating...'));
     }

     var renameCmd = "mv " + tplName + " " + projectInfo.name;

     yield exec(gitCmd, (error, stdout, stderr) => {
          if (error) {
            console.log(chalk.red(error));
            process.exit();
          }
          console.log(chalk.red(` ${stdout}`));
          console.log(chalk.red(` ${stderr}`));
          exec(renameCmd, (error, stdout, stderr) => {
                    if (error) {
                      console.log(chalk.red(error));
                      process.exit();
                    }
                    console.log(chalk.red(`${stdout}`));
                    console.log(chalk.red(`${stderr}`));
                    console.log(chalk.green('\n √ Project generated!'));
                    process.exit();
           });
     });

  });
