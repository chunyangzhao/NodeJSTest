mode = process.argv[2]
console.log("Hello world", mode)


// ren F_config.js my_config.js
// ren F_env.js env.js
// set NODE_PROGRAM="D:\CodeProjects\NodeJSTest\main.js" 

// windows自动执行脚本后关机
// @echo off  
// set NODE_SKIP_PLATFORM_CHECK=1
// :: 设置Node.js程序的路径  
// set NODE_PROGRAM="D:\CodeProjects\NodeJSTest\main.js" 
  
// :: 执行Node.js程序  
// node %NODE_PROGRAM% start

// ren my_config.js F_config.js 
// ren env.js F_env.js 
// pause
// 关机
// shutdown /s /t 60