// ES5
// curry 函数柯里化
// function curry(fn) {
//     if (typeof fn !== 'function') throw new TypeError(`The params ${fn.name} must be a function!`);
//     var curry_length = fn.length;
//     return function callee() {
//         var args = Array.prototype.slice.call(arguments);
//         if (args.length >= curry_length) {
//             return fn.apply(this, args);
//         } else {
//             return function () {
//                 var callee_args = Array.prototype.slice.call(arguments);
//                 return callee(...[...args, ...callee_args]);
//             }
//         }
//     }
// }
//
// function curry_fn(a, b, c, d) {
//     return a * b + c * d;
// }
//
// var curried = curry(curry_fn);
// console.log(curried(2, 3, 4, 5));
// console.log(curried(2, 3)(4, 5));
// console.log(curried(2, 3, 4)(5));
// console.log(curried(2)(3, 4)(5));
// console.log(curried(2)(3)(4)(5));
// console.log(curried(2)(3)(4, 5));
// console.log(curried(2)(3, 4, 5));

// ES6
// const curry = fn => {
//     if (typeof fn === 'function') throw new TypeError(`The params ${fn.name} must be a function!`);
//     return function callee(...args) {
//         return (args.length >= fn.length) ? fn(...args) : (...callee_args) => callee(...[...args, ...callee_args]);
//     }
// }
// const curry_fn = (a, b, c, d) => a * b + c * d;
// const curried = curry(curry_fn);
// console.log(curried(2, 3, 4, 5));
// console.log(curried(2, 3)(4, 5));
// console.log(curried(2, 3, 4)(5));
// console.log(curried(2)(3, 4)(5));
// console.log(curried(2)(3)(4)(5));
// console.log(curried(2)(3)(4, 5));
// console.log(curried(2)(3, 4, 5));
