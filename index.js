#!/usr/bin/env node

const clone = require('git-clone')
const shell = require('shelljs');
var program = require('commander');

program
    .version('0.0.1')
    .option('init <project-name>', '初始化模板')
    .parse(process.argv);

if (program.init) {
  console.log('开始初始化，项目：', program.init)
  let projectPath = shell.pwd() + `/${program.init}`
  console.log(`正在拉取模板代码...下载位置：${projectPath}`)
  clone('https://github.com/kosun-ued/gl-template.git',  projectPath, null, function() {
    shell.rm('-rf', projectPath + '/.git')
    console.log('模板初始化成功, 输入以下安装依赖包：')
    console.log(`> cd ${program.init}`)
    console.log('> npm install')
    console.log('> npm run dev')
  })
} else {
  console.log('正确的命令：gl-cli init <your-project-name>')
  console.log('请输入正确的命令，输入 "gl-cli -h" 可以查看命令')
}