require('./module');
console.log(global.myFuncA);
global.myFuncA();

var a = require('./smart-module1');
console.log(global.myFuncB);
//global.myFuncB();
console.log(a);
a();

var b = require('./smart-module2');
console.log(global.myFuncC);
//global.myFuncC();
console.log(b);
b();
