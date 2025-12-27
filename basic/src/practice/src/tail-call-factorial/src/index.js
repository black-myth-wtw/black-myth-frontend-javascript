// javascript tail call factorial 尾调用优化算法阶乘
// ES5
// function tail_call_factorial(n, p) {
//     if (typeof p === 'undefined') {
//         p = 1;
//     }
//     if (n === 1) return p;
//     return tail_call_factorial(n - 1, p * n);
// }
// // var tail_call_factorial_result = tail_call_factorial(5);
// // var tail_call_factorial_result = tail_call_factorial(10);
// // var tail_call_factorial_result = tail_call_factorial(20);
// // var tail_call_factorial_result = tail_call_factorial(30);
// // var tail_call_factorial_result = tail_call_factorial(40);
// // var tail_call_factorial_result = tail_call_factorial(50);
// // var tail_call_factorial_result = tail_call_factorial(100);
// // var tail_call_factorial_result = tail_call_factorial(200);
// var tail_call_factorial_result = tail_call_factorial(500);
// console.log('tail_call_factorial_result:', tail_call_factorial_result);
// ES6
// const tail_call_factorial = (n, p = 1) => n === 1 ? p : tail_call_factorial(n - 1, p * n);
// // const tail_call_factorial_result = tail_call_factorial(5);
// // const tail_call_factorial_result = tail_call_factorial(10);
// // const tail_call_factorial_result = tail_call_factorial(20);
// // const tail_call_factorial_result = tail_call_factorial(30);
// // const tail_call_factorial_result = tail_call_factorial(40);
// // const tail_call_factorial_result = tail_call_factorial(50);
// // const tail_call_factorial_result = tail_call_factorial(100);
// // const tail_call_factorial_result = tail_call_factorial(200);
// const tail_call_factorial_result = tail_call_factorial(500);
// console.log('tail_call_factorial_result:', tail_call_factorial_result);
