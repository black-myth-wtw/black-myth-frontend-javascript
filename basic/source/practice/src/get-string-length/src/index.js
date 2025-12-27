// ES5
// get-string-length 获取 utf-16 字符串长度
// var utf_16_string = '𠮷𠮷千兆';
// function get_string_length(string) {
//     return (string.toString() || String(string)).match(/[\s\S]/ug).length;
// }
// console.log(get_string_length(utf_16_string));

// ES6
// const utf_16_string = '𠮷𠮷千兆';
// const get_string_length = string => (string.toString() || String(string)).match(/[\s\S]/ug).length;
// console.log(get_string_length(utf_16_string));
