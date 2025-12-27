// ES5
// is-utf-16 判断是否为 utf-16 字符
// var utf_16_string = '𠮷𠮷千兆';
// function is_utf_16_character(string) {
//     return (string.toString() || String(string)).codePointAt(0) > 0xFFFF;
// }
// console.log(is_utf_16_character(utf_16_string));
// ES6
// const utf_16_string = '𠮷𠮷千兆';
// const is_utf_16_character = string => (string.toString() || String(string)).codePointAt(0) > 0xFFFF;
// console.log(is_utf_16_character(utf_16_string));
