// javascript curry 函数参数柯里化
// const curry = fn => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     return function callee(...args) {
//         return fn.length <= args.length ? fn(...args) : (...callee_args) => callee(...[...args, ...callee_args]);
//     }
// }
// const curry_fn = (a, b, c, d) => a * b + c * d;
// const curried = curry(curry_fn);
// console.log('curry_result:', curried(2, 3, 4, 5));
// console.log('curry_result:', curried(2, 3)(4, 5));
// console.log('curry_result:', curried(2, 3, 4)(5));
// console.log('curry_result:', curried(2)(3, 4)(5));
// console.log('curry_result:', curried(2)(3)(4)(5));
// console.log('curry_result:', curried(2)(3)(4, 5));
// console.log('curry_result:', curried(2)(3, 4, 5));
