// import { x } from '.\app'

// node.js uses older version of javascript 
// sow we can't use import.

const myapp = require('./app')
console.log(myapp)
console.log(myapp.x)
console.log(myapp.z())
    // const arr = [3, 5, 6, 7, 2, 1];
    // console.log(arr);
    // console.log(arr[0]
const ages = [32, 33, 16, 40]
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18;
}
//or
const result2 = ages.filter((age) => {
    return age < 18;
})

console.log(result)
console.log(result2)