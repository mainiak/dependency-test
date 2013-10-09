console.log('# A');
require('./module');
console.log(global.myFuncA);
global.myFuncA();

console.log('# B');
var b = require('./smart-module1');
console.log(global.myFuncB);
//global.myFuncB();
console.log(b);
b();

console.log('# C');
var c = require('./smart-module2');
console.log(global.myFuncC);
//global.myFuncC();
console.log(c);
c();

console.log('# D');
var d = require('./smart-module3');
console.log(global.myFuncD);
global.myFuncD();
console.log(d);
//d();
