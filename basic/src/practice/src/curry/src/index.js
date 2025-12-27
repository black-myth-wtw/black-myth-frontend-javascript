// javascript curry 函数参数柯里化
// ES5
// function curry(fn) {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     var fn_length = fn.length;
//     return function callee() {
//         var args = Array.prototype.slice.call(arguments);
//         if (args.length >= fn_length) {
//             return fn.apply(this, args);
//         } else {
//             return function () {
//                 var callee_args = Array.prototype.slice.call(arguments);
//                 return callee.apply(this, args.concat(callee_args));
//             }
//         }
//     }
// }
// function fn(a, b, c, d) {
//     return a * b + c * d;
// }
// var curried = curry(fn);
// console.log('curry_result:', curried(2, 3, 4, 5));
// console.log('curry_result:', curried(2, 3)(4, 5));
// console.log('curry_result:', curried(2, 3, 4)(5));
// console.log('curry_result:', curried(2)(3)(4)(5));
// console.log('curry_result:', curried(2)(3, 4)(5));
// console.log('curry_result:', curried(2)(3, 4, 5));
// console.log('curry_result:', curried(2)(3)(4, 5));
// console.log('curry_result:', curried(2, 3)(4)(5));

// ES6
// const curry = (fn) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return function callee(...args) {
//         return args.length >= fn.length ? fn(...args) : (...callee_args) => callee(...[...args, ...callee_args]);
//     }
// }
// function fn(a, b, c, d) {
//     return a * b + c * d;
// }
// const curried = curry(fn);
// console.log('curry_result:', curried(2, 3, 4, 5));
// console.log('curry_result:', curried(2, 3)(4, 5));
// console.log('curry_result:', curried(2, 3, 4)(5));
// console.log('curry_result:', curried(2)(3)(4)(5));
// console.log('curry_result:', curried(2)(3, 4)(5));
// console.log('curry_result:', curried(2)(3, 4, 5));
// console.log('curry_result:', curried(2)(3)(4, 5));
// console.log('curry_result:', curried(2, 3)(4)(5));
