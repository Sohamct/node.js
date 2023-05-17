//3
var colors = require('colors');

console.log("Package.json".blue)

//imp: node is single threaded: which runs a command at a time.

const chalk = require('chalk');

console.log(chalk.blue.underline('hello') + ' soham ' + chalk.red.underline.bold('tejani'));
//cls, npm i chalk@4.1.2

//if package.json is deleted then to comeback it 
// command: npm install

// nodes_modules is higher weight package so we should not push it on the github
// for not pushing it make .gitignore file and apecify folder name after /