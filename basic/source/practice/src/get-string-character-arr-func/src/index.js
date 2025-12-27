// ES5
// get-string-character-arr-func 获取 utf-16 字符串字符数组并获取字符位、字符编码以及编码转换
// const utf_16_string = '𠮷𠮷千兆';
// function is_utf_16_character(string) {
//     return (string.toString() || String(string)).codePointAt(0) > 0xFFFF;
// }
// function get_string_character_arr(string) {
//     return (string.toString() || String(string)).match(/[\s\S]/ug);
// }
// function get_string_character_arr_func(string) {
//     var get_character_arr = get_string_character_arr(string);
//     for (var i = 0; i < get_character_arr.length; i++) {
//         var value = get_character_arr[i];
//         if (is_utf_16_character(value)) {
//             var get_utf_16_code_point = value.codePointAt(0);
//             console.log(get_utf_16_code_point);
//             console.log(String.fromCodePoint(get_utf_16_code_point));
//         } else {
//             console.log(value.charAt(0));
//             var get_utf_16_char_code = value.charCodeAt(0);
//             console.log(get_utf_16_char_code);
//             console.log(String.fromCharCode(get_utf_16_char_code));
//         }
//     }
// }
// get_string_character_arr_func(utf_16_string);

// ES6
// const utf_16_string = '𠮷𠮷千兆';
// const get_string_character_arr = string => (string.toString() || String(string)).match(/[\s\S]/ug);
// const is_utf_16_string = string => (string.toString() || String(utf_16_string)).codePointAt(0) > 0xFFFF;
// const get_string_character_arr_func = string => {
//     const get_string_arr = get_string_character_arr(string);
//     for (const value of get_string_arr) {
//         if (is_utf_16_string(value)) {
//             const get_code_point = value.codePointAt(0);
//             console.log(get_code_point);
//             console.log(String.fromCodePoint(get_code_point));
//         } else {
//             console.log(value.charAt(0));
//             const get_string_char_code = value.charCodeAt(0);
//             console.log(get_string_char_code);
//             console.log(String.fromCharCode(get_string_char_code));
//         }
//     }
// };
// get_string_character_arr_func(utf_16_string);
