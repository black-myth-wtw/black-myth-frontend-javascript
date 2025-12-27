// javascript pipe 函数管道
// ES5
// function pipe() {
//     var args = Array.prototype.slice.call(arguments);
//     return function (x) {
//         return args.reduceRight(function (a, b) {
//             return b(a);
//         }, x);
//     }
// }
// function add(x) {
//     return x + x;
// }
// function multiply(x) {
//     return Math.pow(x, 2);
// }
// var pipe_result = pipe(add, multiply)(40);
// console.log('pipe_result:', pipe_result);
// ES6
// const pipe = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => Math.pow(x, 2);
// const pipe_result = pipe(add, multiply)(65);
// console.log('pipe_result:', pipe_result);
