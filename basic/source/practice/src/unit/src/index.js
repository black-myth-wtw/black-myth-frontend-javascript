// ES5
// unit 单元测试
// function unit(desc, fn) {
//     try {
//         fn();
//         console.log(`${desc} -> PASS!`);
//     } catch (error) {
//         console.error(`${desc} -> FAILED: ${error.message}`);
//     }
// }
//
// function test(result) {
//     return {
//         toBe: function (expected_result) {
//             if (result !== expected_result) {
//                 throw new Error(`期望值 ${expected_result}, 但现获得 ${result}!`);
//             }
//         }
//     }
// }
//
// function add(a, b) {
//     return a + b;
// }
//
// function multiply(a, b) {
//     return a * b;
// }
//
// unit('1 + 2', function () {
//     test(add(1, 2)).toBe(3);
// });
// unit('1 + 99', function () {
//     test(add(1, 99)).toBe(100);
// });
// unit('2 + 99', function () {
//     test(add(2, 99)).toBe(101);
// });
// unit('1 * 99', function () {
//     test(multiply(1, 99)).toBe(99);
// });
// unit('2 * 99', function () {
//     test(multiply(2, 99)).toBe(198);
// });
// unit('3 * 99', function () {
//     test(multiply(3, 99)).toBe(297);
// });
// unit('3 * 100', function () {
//     test(multiply(4, 100)).toBe(300);
// });

// ES6
// const unit = (desc, fn) => {
//     try {
//         fn();
//         console.log(`${desc} is PASS!`);
//     } catch (error) {
//         console.error(`${desc} is FAILED: ${error.message}`);
//     }
// }
// const test = (result) => {
//     return {
//         toBe: (expected_result) => {
//             if (result !== expected_result) {
//                 throw new Error(`期望值 ${expected_result}, 但现获得: ${result}`);
//             }
//         }
//     }
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit('1 + 2', function () {
//     test(add(1, 2)).toBe(3);
// });
// unit('1 + 99', function () {
//     test(add(1, 99)).toBe(100);
// });
// unit('2 + 99', function () {
//     test(add(2, 99)).toBe(101);
// });
// unit('1 * 99', function () {
//     test(multiply(1, 99)).toBe(99);
// });
// unit('2 * 99', function () {
//     test(multiply(2, 99)).toBe(198);
// });
// unit('3 * 99', function () {
//     test(multiply(3, 99)).toBe(297);
// });
// unit('3 * 100', function () {
//     test(multiply(4, 100)).toBe(300);
// });
