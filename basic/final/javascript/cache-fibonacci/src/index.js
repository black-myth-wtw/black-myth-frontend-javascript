// javascript cache fibonacci 缓存优化斐波那契数列
// const cache_fibonacci = (fn, hasher) => {
//     if (typeof fn !== 'function') throw new TypeError(`The params fn:${fn} must be a function~~~~~~`);
//     const memo_fn = (...args) => {
//         const cache = memo_fn.cache,
//             hash_key = hasher ? hasher(...args) : args[0];
//         if (!cache[hash_key]) cache[hash_key] = fn(...args);
//         return cache[hash_key];
//     };
//     memo_fn.cache = {};
//     return memo_fn;
// };
// const fibonacci = (n) => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const cache_fibonacci_fn = cache_fibonacci(fibonacci);
// // const cache_fibonacci_result = cache_fibonacci_fn(5);
// // const cache_fibonacci_result = cache_fibonacci_fn(10);
// // const cache_fibonacci_result = cache_fibonacci_fn(20);
// // const cache_fibonacci_result = cache_fibonacci_fn(30);
// const cache_fibonacci_result = cache_fibonacci_fn(40);
// const cache_fibonacci_result_again = cache_fibonacci_fn(40);
// console.log('cache_fibonacci_result:', cache_fibonacci_result);
// console.log('cache_fibonacci_result_again:', cache_fibonacci_result_again);
