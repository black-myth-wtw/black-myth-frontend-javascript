// ES5
// pipe 函数管道
// function pipe() {
//     var fns = Array.prototype.slice.call(arguments);
//
//     return function (x) {
//         return fns.reduceRight(function (a, b) {
//             return b(a);
//         }, x);
//     };
// }
//
// function add(x) {
//     return x + x;
// }
//
// function multiply(x) {
//     return x * x;
// }
//
// console.log(pipe(add, multiply)(55));
// console.log(pipe(add, multiply)(65));

// ES6
// const pipe = (...fns) => x => fns.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// console.log(pipe(add, multiply)(55));
// console.log(pipe(add, multiply)(66));
