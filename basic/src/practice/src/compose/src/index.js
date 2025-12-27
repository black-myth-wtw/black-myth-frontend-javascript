// javascript compose 函数组合
// ES5
// function compose() {
//     var args = Array.prototype.slice.call(arguments);
//     return function (x) {
//         return args.reduce(function (a, b) {
//             return b(a);
//         }, x);
//     };
// }
// function add(x) {
//     return x + x;
// }
// function multiply(x) {
//     return Math.pow(x, 2);
// }
// var compose_result = compose(add, multiply)(40);
// console.log('compose result:', compose_result);

// ES6
// const compose = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => Math.pow(x, 2);
// const compose_result = compose(add, multiply)(60);
// console.log('compose_result:', compose_result);
