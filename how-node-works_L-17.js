//ways: 1. call-back 
//      2. promise.


console.log("starting up")

setTimeout(() => {
    console.log("logging up 1")
}, 2000);

setTimeout(() => {
    console.log("logging up 2")
}, 0);

console.log("finishing up")

// setTimeout() is writtent in c/c++
// node writtern in : javascript, c, c++.
// Node API will store function which is not part of javascript
// writtern in c/c++ from top to down in file.
//API: Application programing interface.