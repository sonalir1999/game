const assert = require('assert');
let x = 4;
let y = 4;
console.log(x,y);

try {
    assert(x==y);
    console.log('x and y are equal');
    let x=7
}
catch {
    console.log('not equal');
}

console.log(x,y);