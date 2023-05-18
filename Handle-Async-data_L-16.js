//ways: 1. call-back 
//      2. promise.

let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    // resolve works when our work is working perfectly.
    // if any error comes then it counted in reject.
    setTimeout(() => {
        b = 20;
        resolve(b)
    }, 2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a + b)
})

console.log(a + b)