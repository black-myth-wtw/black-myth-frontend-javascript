// ES5
// get-string-character-arr 获取 utf-16 字符串字符数组
// var utf_16_string = '𠮷𠮷千兆';
// function get_string_character_arr(string) {
//     return (string.toString() || String(string)).match(/[\s\S]/ug);
// }
// console.log(get_string_character_arr(utf_16_string));

// ES6
// const utf_16_string = '𠮷𠮷千兆';
// const get_string_character_arr = string => (string.toString() || String(string)).match(/[\s\S]/ug);
// console.log(get_string_character_arr(utf_16_string));
