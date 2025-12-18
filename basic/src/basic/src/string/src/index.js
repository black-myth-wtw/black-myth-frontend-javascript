// UTF-8
// 存在2^8个码位
// 基本多文种平面
// 字符位: charAt()
// 字符编码: charCodeAt()
// 编码转换: fromCharCode()
// UTF-16
// 存在 2^16个码位
// 辅助平面
// 判断是否为 UTF-16 字符
// 字符串长度
// 正则表达式匹配: u 描述符
// 字符编码: codePointAt()
// 编码转换: fromCodePoint()
// const utf_16_string = '𠮷𠮷千兆',
//     utf_8_string = '千兆';
// console.log('length:', utf_16_string.length);
// for (let i = 0; i < utf_16_string.length; i++) {
//     console.log(i);
//     console.log('char:', utf_16_string[i]);
//     console.log('charAt:', utf_16_string.charAt(i));
//     console.log('charCodeAt:', utf_16_string.charCodeAt(i));
//     const char_code = utf_16_string.charCodeAt(i);
//     console.log('fromCharCode:', char_code);
//     const code_point = utf_16_string.codePointAt(i);
//     console.log('codePointAt:', code_point);
//     console.log('fromCodePoint:', String.fromCodePoint(code_point));
// }
// // 判断是否为 UTF-16 字符
// function is_utf16_character(string) {
//     return (string.toString() || String(string)).codePointAt(0) > 0XFFFF;
// }
// console.log(is_utf16_character(utf_16_string));
// console.log(is_utf16_character(utf_8_string));
// // utf-16 字符串长度
// function get_string_length(string) {
//     return (string.toString() || String(string)).match(/[\s\S]/ug).length;
// }
// console.log('utf-16 length:', get_string_length(utf_16_string));
// // 获取 utf-16 字符串字符数组
// function get_string(string) {
//     return (string.toString() || String(string)).match(/[\s\S]/ug);
// }
// // 遍历 utf-16 字符串字符数组并获取字符位、字符编码和编码转换
// function utf_16_string_loop(string) {
//     let utf_16_transform_string = get_string(string);
//
//     for (let i = 0; i < utf_16_transform_string.length; i++) {
//         const utf_16_transform_string_item = utf_16_transform_string[i];
//         console.log(i);
//         if (!is_utf16_character(utf_16_transform_string_item)) {
//             console.log('char:', utf_16_transform_string_item);
//             console.log('charAt:', utf_16_transform_string_item.charAt(0));
//             console.log('charCodeAt:', utf_16_transform_string_item.charCodeAt(0));
//             const char_code = utf_16_transform_string_item.charCodeAt(0);
//             console.log('fromCharCode:', char_code);
//         } else {
//             const code_point = utf_16_transform_string_item.codePointAt(0);
//             console.log('codePointAt:', code_point);
//             console.log('fromCodePoint:', String.fromCodePoint(code_point));
//         }
//     }
// }
// utf_16_string_loop(utf_16_string);
// // 正则表达式匹配: u描述符
// const utf_16_string_reg_exp = /^.{4}$/;
// const utf_16_string_reg_exp = /^𠮷𠮷.{2}$/;
// const utf_16_string_reg_exp = /^𠮷{2}.{2}$/u;
// const utf_16_string_reg_exp = /^\u{20bb7}{2}.{2}$/u;
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// 方法
// 获取字符子串: includes,startsWith,endsWith
// const string = 'hello, black_myth_wtw, 28 year\'s old~';
// console.log(string.startsWith('h'));
// console.log(string.startsWith('l', 8));
// console.log(string.endsWith('~'));
// console.log(string.endsWith('l', 35));
// console.log(string.endsWith('\'', 31));
// console.log(string.includes('_'));
// console.log(string.includes('9'));
// console.log(string.includes('y'));
// // 重复添加: repeat
// console.log(string.repeat(2));
// console.log(string.repeat(4));
// // 填充扩展字符串: padStart
// // 从字符串左边填充扩展指定字符(无指定为空字符),如果填充长度小于字符串长度,则直接返回此字符串
// console.log(string.padStart(38, '^'));
// console.log(string.padStart(36, '^'));
// 正则表达式
// 粘滞描述符: y 描述符
// 判断是否存在粘滞描述符: sticky
// const black_myth_wtw = 'hello1 hello2 hello3 hello4 hello5';
// const black_myth_wtw = 'hello1 hello2 hello3hello4 hello5';
// const reg_exp_flags_y = /hello\d\s/y,
//     reg_exp_flags_g = /hello\d\s/g,
//     reg_exp_flags = /hello\d\s/;
// console.log('no flags:');
// console.log(reg_exp_flags.test(black_myth_wtw));
// console.log(reg_exp_flags.exec(black_myth_wtw));
// console.log(reg_exp_flags.lastIndex);
// console.log(reg_exp_flags.exec(black_myth_wtw));
// console.log(reg_exp_flags.lastIndex);
// console.log('y flags:');
// // console.log(reg_exp_flags_y.test(black_myth_wtw));
// console.log(reg_exp_flags_y.exec(black_myth_wtw));
// console.log(reg_exp_flags_y.lastIndex);
// console.log(reg_exp_flags_y.exec(black_myth_wtw));
// console.log(reg_exp_flags_y.lastIndex);
// console.log(reg_exp_flags_y.exec(black_myth_wtw));
// console.log(reg_exp_flags_y.lastIndex);
// console.log(reg_exp_flags_y.exec(black_myth_wtw));
// console.log(reg_exp_flags_y.lastIndex);
// console.log(reg_exp_flags_y.exec(black_myth_wtw));
// console.log(reg_exp_flags_y.lastIndex);
// console.log('g flags:');
// // console.log(reg_exp_flags_g.test(black_myth_wtw));
// console.log(reg_exp_flags_g.exec(black_myth_wtw));
// console.log(reg_exp_flags_g.lastIndex);
// console.log(reg_exp_flags_g.exec(black_myth_wtw));
// console.log(reg_exp_flags_g.lastIndex);
// console.log(reg_exp_flags_g.exec(black_myth_wtw));
// console.log(reg_exp_flags_g.lastIndex);
// console.log(reg_exp_flags_g.exec(black_myth_wtw));
// console.log(reg_exp_flags_g.lastIndex);
// console.log(reg_exp_flags_g.exec(black_myth_wtw));
// console.log(reg_exp_flags_g.lastIndex);
// console.log(reg_exp_flags.sticky);
// console.log(reg_exp_flags_g.sticky);
// console.log(reg_exp_flags_y.sticky);
// 复制描述符覆盖
// 获取描述符内容: flags
// 获取正则内容: source
// const utf_16_string = '𠮷𠮷千兆DD';
// const utf_16_string_reg_exp = /^\u{20bb7}{2}.{2}\w{2}$/u;
// const utf_16_string_reg_exp = /^\u{20bb7}{2}.{2}d{2}$/u;
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// console.log(utf_16_string_reg_exp.source);
// console.log(utf_16_string_reg_exp.flags);
// const utf_16_string_reg_exp_transform = new RegExp(utf_16_string_reg_exp, 'uig');
// console.log(utf_16_string_reg_exp_transform.test(utf_16_string));
// console.log(utf_16_string_reg_exp_transform.source);
// console.log(utf_16_string_reg_exp_transform.flags);
// 模拟获取描述符内容: flags
// function get_reg_exp_flags(reg_exp) {
//     if (!reg_exp instanceof RegExp) throw new TypeError(`The params reg_exp ${reg_exp} must be a RegExp!`);
//     const reg_exp_string = String(reg_exp) || reg_exp.toString();
//     return reg_exp_string.substring(reg_exp_string.lastIndexOf('/') + 1);
// }
//
// const utf_16_string = '𠮷𠮷千兆DD';
// // const utf_16_string_reg_exp = /^\u{20bb7}{2}.{2}\w{2}$/u;
// const utf_16_string_reg_exp = /^\u{20bb7}{2}.{2}d{2}$/u;
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// console.log(utf_16_string_reg_exp.source);
// console.log(get_reg_exp_flags(utf_16_string_reg_exp));
// const utf_16_string_reg_exp_transform = new RegExp(utf_16_string_reg_exp, 'uig');
// console.log(utf_16_string_reg_exp_transform.test(utf_16_string));
// console.log(utf_16_string_reg_exp_transform.source);
// console.log(get_reg_exp_flags(utf_16_string_reg_exp_transform.flags));
// 模板字符串
// 基本用法(占位符)
// 多行字符串
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: 'male',
// };
// const string = `Hi, My name is ${black_myth_wtw.name},\n
// ${black_myth_wtw.age} year's old,\n
// I'm a ${black_myth_wtw.gender}!`;
// console.log(string);
// 模板标签
// function person(strings, ...params) {
//     let result_str = '',
//         params_length = params.length;
//     for (let i = 0; i < params_length; i++) {
//         result_str = `${result_str}${strings[i]}`;
//         result_str = `${result_str}${params[i]}`;
//     }
//     result_str = `${result_str}${strings[params_length]}`;
//     return result_str;
// }
//
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: 'male',
// };
// const string = person`Hi, My name is ${black_myth_wtw.name},${black_myth_wtw.age} year's old,I'm a ${black_myth_wtw.gender}!`;
// console.log(string);
// function person_raw(strings, ...params) {
//     let result_str = '',
//         params_length = params.length;
//     for (let i = 0; i < params_length; i++) {
//         result_str = `${result_str}${strings.raw[i]}`;
//         result_str = `${result_str}${params[i]}`;
//     }
//     result_str = `${result_str}${strings.raw[params_length]}`;
//     return result_str;
// }
//
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: 'male',
// };
// const string = String.raw`Hi, My name is ${black_myth_wtw.name},\n${black_myth_wtw.age} year's old,\nI'm a ${black_myth_wtw.gender}!`;
// console.log(string);
// const string_raw = person_raw`Hi, My name is ${black_myth_wtw.name},\n${black_myth_wtw.age} year's old,\nI'm a ${black_myth_wtw.gender}!`;
// console.log(string_raw);
