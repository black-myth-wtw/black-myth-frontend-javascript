// javascript unit 单元测试
// const unit = (desc, fn) => {
//     try {
//         fn();
//         console.log(`${desc} is PASS~~~~~~`);
//     } catch (error) {
//         console.error(`${desc} is FAILED: ${error.message}~~~~~~`);
//     }
// };
// const test = result => {
//     return {
//         to_be(expected_result) {
//             if (result !== expected_result) throw new Error(`期望值-${expected_result},而获值-${result}`);
//         }
//     };
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit('1 + 2', function () {
//     test(add(1, 2)).to_be(3);
// });
// unit('1 + 99', function () {
//     test(add(1, 99)).to_be(100);
// });
// unit('2 + 99', function () {
//     test(add(2, 99)).to_be(101);
// });
// unit('1 * 99', function () {
//     test(multiply(1, 99)).to_be(99);
// });
// unit('2 * 99', function () {
//     test(multiply(2, 99)).to_be(198);
// });
// unit('3 * 99', function () {
//     test(multiply(3, 99)).to_be(297);
// });
// unit('4 * 99', function () {
//     test(multiply(4, 99)).to_be(400);
// });
