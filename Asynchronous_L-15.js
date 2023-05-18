// asunc: javascript, node, php,
// sync: php
let a = 10;
let b = 0;

console.log("start exe...")
    // console.log("logic exe...") // 2 sec
setTimeout(() => {
    console.log("logic exe...") // 2 sec
    b = 20;
}, 2000)

console.log("complete exe...", a + b)