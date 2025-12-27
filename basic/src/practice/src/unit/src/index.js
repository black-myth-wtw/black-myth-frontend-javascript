// javascript unit 单元测试
// ES5
// function unit(desc, fn) {
//     try {
//         fn();
//         console.log(`${desc} is PASS!`);
//     } catch (error) {
//         console.error(`${desc} is FAILED:${error.message}!`);
//     }
// }
// function test(result) {
//     return {
//         toBe(expected_result) {
//             if (expected_result !== result) {
//                 throw new Error(`期望值-${expected_result},现获值-${result}`);
//             }
//         }
//     }
// }
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
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
// unit('4 * 99', function () {
//     test(multiply(4, 99)).toBe(400);
// });
//
// ES6
// const unit = (desc, fn) => {
//     try {
//         fn();
//         console.log(`${desc} is PASS!`);
//     } catch (error) {
//         console.error(`${desc} is FAILED:${error.message}!`);
//     }
// }
// const test = result => {
//     return {
//         toBe: expected_result => {
//             if (expected_result !== result) {
//                 throw new Error(`期望值-${expected_result},现获值-${result}`);
//             }
//         }
//     }
// }
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit('1 + 2', () => {
//     test(add(1, 2)).toBe(3);
// });
// unit('1 + 99', () => {
//     test(add(1, 99)).toBe(100);
// });
// unit('2 + 99', () => {
//     test(add(2, 99)).toBe(101);
// });
// unit('1 * 99', () => {
//     test(multiply(1, 99)).toBe(99);
// });
// unit('2 * 99', () => {
//     test(multiply(2, 99)).toBe(198);
// });
// unit('3 * 99', () => {
//     test(multiply(3, 99)).toBe(297);
// });
// unit('4 * 99', () => {
//     test(multiply(4, 99)).toBe(400);
// });
