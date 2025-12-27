// ES5
// cache fibonacci 缓存斐波那契数列
// function memo(fn, hasher) {
//     function memo_fn() {
//         var args = Array.prototype.slice.call(arguments),
//             cache = memo.cache,
//             hash_key = hasher ? hasher.apply(this, args) : args[0];
//         if (!cache[hash_key]) cache[hash_key] = fn.apply(this, args);
//         return cache[hash_key];
//     }
//
//     memo.cache = {};
//     return memo_fn;
// }
//
// function fibonacci(n) {
//     if (n === 1 || n === 0) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// var memo_fn = memo(fibonacci);
// console.log(memo_fn(40));
// console.log(memo_fn(40));

// ES6
// const memo = (fn, hasher) => {
//     const memo_fn = (...args) => {
//         const hash_key = hasher ? hasher(...args) : args[0],
//             cache = memo.cache;
//         if (!cache[hash_key]) cache[hash_key] = fn(...args);
//         return cache[hash_key];
//     };
//     memo.cache = {};
//     return memo_fn;
// };
// const fibonacci = n => (n === 0 || n === 1) ? n : (fibonacci(n - 1) + fibonacci(n - 2));
// const memo_fn = memo(fibonacci);
// console.log(memo_fn(40));
// console.log(memo_fn(40));
