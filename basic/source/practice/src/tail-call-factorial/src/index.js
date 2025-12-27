// ES5
// tail call factorial 尾调用优化阶乘
// function tail_call_factorial(n, p) {
//     if (typeof p === 'undefined') p = 1;
//     if (n === 1) return p;
//     return tail_call_factorial(n - 1, p * n);
// }
//
// console.log(tail_call_factorial(5));
// console.log(tail_call_factorial(10));
// console.log(tail_call_factorial(20));
// console.log(tail_call_factorial(30));
// console.log(tail_call_factorial(40));
// console.log(tail_call_factorial(50));
// console.log(tail_call_factorial(100));
// console.log(tail_call_factorial(200));
// console.log(tail_call_factorial(300));

// ES6
// const tail_call_factorial = (n, p = 1) => n === 1 ? p : tail_call_factorial(n - 1, p * n);
// console.log(tail_call_factorial(5));
// console.log(tail_call_factorial(10));
// console.log(tail_call_factorial(20));
// console.log(tail_call_factorial(30));
// console.log(tail_call_factorial(40));
// console.log(tail_call_factorial(50));
// console.log(tail_call_factorial(100));
// console.log(tail_call_factorial(200));
// console.log(tail_call_factorial(300));
