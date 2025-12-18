// ES5
// tail call 尾调用优化斐波那契数列
// function tail_call_fibonacci(n, n1, n2) {
//     if (typeof n1 === 'undefined' && typeof n2 === 'undefined') {
//         n1 = 0;
//         n2 = 1;
//     }
//     if (n === 0) return n1;
//     return tail_call_fibonacci(n - 1, n2, n1 + n2);
// }
//
// console.log(tail_call_fibonacci(5));
// console.log(tail_call_fibonacci(10));
// console.log(tail_call_fibonacci(20));
// console.log(tail_call_fibonacci(30));
// console.log(tail_call_fibonacci(40));
// console.log(tail_call_fibonacci(50));

// ES6
// const tail_call_fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : tail_call_fibonacci(n - 1, n2, n1 + n2);
// console.log(tail_call_fibonacci(5));
// console.log(tail_call_fibonacci(10));
// console.log(tail_call_fibonacci(20));
// console.log(tail_call_fibonacci(30));
// console.log(tail_call_fibonacci(40));
// console.log(tail_call_fibonacci(50));
