// javascript cache fibonacci 缓存斐波那契数列
// ES5
// function cache_fibonacci(fn, hasher) {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     function cache_fibonacci_fn() {
//         var cache = cache_fibonacci_fn.cache,
//             args = Array.prototype.slice.call(arguments),
//             hash_key = hasher ? hasher.apply(this, args) : args[0];
//         if (!cache[hash_key]) cache[hash_key] = fn.apply(this, args);
//         return cache[hash_key];
//     }
//     cache_fibonacci_fn.cache = {};
//     return cache_fibonacci_fn;
// }
// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// var cache_fibonacci_fn = cache_fibonacci(fibonacci);
// // var cache_fibonacci_result = cache_fibonacci_fn(5);
// // var cache_fibonacci_result = cache_fibonacci_fn(10);
// // var cache_fibonacci_result = cache_fibonacci_fn(20);
// // var cache_fibonacci_result = cache_fibonacci_fn(30);
// var cache_fibonacci_result = cache_fibonacci_fn(40);
// var cache_fibonacci_result_again = cache_fibonacci_fn(40);
// console.log('cache_fibonacci_result:', cache_fibonacci_result);
// console.log('cache_fibonacci_result_again:', cache_fibonacci_result_again);

// ES6
// const cache_fibonacci = (fn, hasher) => {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     }
//     function cache_fibonacci_fn(...args) {
//         const {cache} = cache_fibonacci_fn,
//             hash_key = hasher ? hasher(...args) : args[0];
//         if (!cache[hash_key]) cache[hash_key] = fn(...args);
//         return cache[hash_key];
//     }
//     cache_fibonacci_fn.cache = {};
//     return cache_fibonacci_fn;
// }
// const fibonacci = n => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const cache_fibonacci_fn = cache_fibonacci(fibonacci);
// // const cache_fibonacci_result = cache_fibonacci_fn(5);
// // const cache_fibonacci_result = cache_fibonacci_fn(10);
// // const cache_fibonacci_result = cache_fibonacci_fn(20);
// // const cache_fibonacci_result = cache_fibonacci_fn(30);
// const cache_fibonacci_result = cache_fibonacci_fn(40);
// const cache_fibonacci_result_again = cache_fibonacci_fn(40);
// console.log('cache_fibonacci_result:', cache_fibonacci_result);
// console.log('cache_fibonacci_result_again:', cache_fibonacci_result_again);
