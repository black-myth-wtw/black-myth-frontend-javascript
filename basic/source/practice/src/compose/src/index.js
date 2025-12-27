// ES5
// compose 函数组合
// function compose() {
//     var fns = Array.prototype.slice.call(arguments);
//
//     return function (x) {
//         return fns.reduce(function (a, b) {
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
// console.log(compose(add, multiply)(50));
// console.log(compose(add, multiply)(60));

// ES6
// const compose = (...fns) => x => fns.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// console.log(compose(add, multiply)(50));
// console.log(compose(add, multiply)(60));
