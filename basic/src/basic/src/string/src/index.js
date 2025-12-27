// javascript string 字符串
// utf-8
// 存在 2^8 个码位
// 基本多文种平面
// 字符位: charAt
// 字符编码: charCodeAt
// 编码转换: fromCharCode
// const utf_8_string = '千兆';
// // 获取 utf-8 字符串字符数组
// function get_utf_8_string_arr(str) {
//     return str.match(/[\s\S]/ug);
// }
// // 获取 utf-8 字符串长度
// function get_utf_8_string_length(str) {
//     return get_utf_8_string_arr(str).length;
// }
// // 获取 utf-8 字符串字符数组并获取字符位、字符编码以及编码转换
// function get_utf_8_string_arr_func(str) {
//     const uff_8_string_length = get_utf_8_string_length(str);
//     for (let i = 0; i < uff_8_string_length; i++) {
//         console.log('char:', str[i]);
//         console.log('char_at:', str.charAt(i));
//         console.log('char_code_at:',str.charCodeAt(i));
//         let charCode = str.charCodeAt(i);
//         console.log('from_char_code', String.fromCharCode(charCode));
//     }
// }
// get_utf_8_string_arr_func(utf_8_string);
// utf-16
// 存在 2^16 个码位
// 辅助平面
// 判断是否是一个 utf-16字符
// 字符串长度
// 正则表达式匹配: u描述符
// 字符编码 codePointAt
// 编码转换 fromCodePoint
// const utf_16_string = '𠮷𠮷千兆',
//     // utf_16_string_reg_exp = /𠮷𠮷.{2}/;
//     // utf_16_string_reg_exp = /𠮷{2}.{2}/u;
//     utf_16_string_reg_exp = /\u{20bb7}{2}.{2}/u;
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// 判断是否是一个 utf-16 字符
// const utf_16_string = '𠮷𠮷千兆',
//     utf_8_string = '千兆';
// function is_utf_16_character(string) {
//     return (String(string) || string.toString()).codePointAt(0) > 0xFFFF;
// }
// console.log(is_utf_16_character(utf_16_string));
// console.log(is_utf_16_character(utf_8_string));
// 获取 utf-16 字符串字符数组
// function get_utf_16_string_arr(string) {
//     return (String(string) || string.toString()).match(/[\s\S]/ug);
// }
// const utf_16_string = '𠮷𠮷千兆';
// console.log(get_utf_16_string_arr(utf_16_string));
// 获取 utf-16 字符串长度
// function get_utf_16_string_length(string) {
//     return (String(string) || string.toString()).match(/[\s\S]/ug).length;
// }
// const utf_16_string = '𠮷𠮷千兆';
// console.log(get_utf_16_string_length(utf_16_string));
// 获取 utf-16 字符串字符数组并获取字符位、字符编码以及编码转换
// const utf_16_string = '𠮷𠮷千兆';
// function is_utf_16_character(string) {
//     return (String(string) || string.toString()).codePointAt(0) > 0xFFFF;
// }
// function get_utf_16_string_arr(string) {
//     return (String(string) || string.toString()).match(/[\s\S]/ug);
// }
// function get_utf_16_string_length(string) {
//     return get_utf_16_string_arr(string).length;
// }
// function get_utf_16_string_arr_func(str) {
//     // for (let i = 0; i < str.length; i++) {
//     //     console.log('char:', str[i]);
//     //     console.log('char_at:', str.charAt(i));
//     //     console.log('char_code_at:', str.charCodeAt(i));
//     //     const charCode = str.charCodeAt(i);
//     //     console.log('from_char_code:', String.fromCharCode(charCode));
//     // }
//     const str_arr = get_utf_16_string_arr(str),
//         str_length = get_utf_16_string_length(str);
//     for (let i = 0; i < str_length; i++) {
//         if (is_utf_16_character(str_arr[i])) {
//             console.log('char:', str_arr[i]);
//             console.log('code_point_at:', str_arr[i].codePointAt(0));
//             const code_point = str_arr[i].codePointAt(0);
//             console.log('from_code_point:', String.fromCodePoint(code_point));
//         } else {
//             console.log('char:', str_arr[i]);
//             console.log('char_at:', str_arr[i].charAt(0));
//             console.log('char_code_at:', str_arr[i].charCodeAt(0));
//             const char_code = str_arr[i].charCodeAt(0);
//             console.log('from_char_code:', String.fromCharCode(char_code));
//         }
//     }
// }
// get_utf_16_string_arr_func(utf_16_string);
// 方法
// 获取字符子串
// startsWith,endsWith,includes
// const black_myth_wtw = 'Hi,My name is black_myth_wtw,32 year\'s old~~~~~~';
// console.log(black_myth_wtw.startsWith('H'));
// console.log(black_myth_wtw.startsWith('e', 9));
// console.log(black_myth_wtw.startsWith('s', 12));
// console.log(black_myth_wtw.startsWith('d', 41));
// console.log(black_myth_wtw.endsWith('~'));
// console.log(black_myth_wtw.endsWith('d', 42));
// console.log(black_myth_wtw.includes('\''));
// console.log(black_myth_wtw.includes('2', 30));
// 重复添加
// repeat
// const black_myth_wtw = 'Hi,My name is black_myth_wtw,32 year\'s old~~~~~~';
// console.log(black_myth_wtw.repeat(6));
// 填充扩展字符串
// padStart: 从字符串左边填充扩展指定字符(无指定为空字符),如果填充长度小于字符串长度,则直接返回此字符串
// const black_myth_wtw = 'Hi,My name is black_myth_wtw,32 year\'s old~~~~~~';
// console.log(black_myth_wtw.padStart(3, '@@'));
// console.log(black_myth_wtw.padStart(50, '@'));
// console.log(black_myth_wtw.padStart(52, '##'));
// 正则表达式
// 粘滞描述符: y 描述符
// 判断是否存在 y 描述符: stick
// const reg_exp_string = 'hello1 hello2 hello3 hello4 hello5 ';
// // const reg_exp_string = 'hello1 hello2hello3 hello4 hello5 ';
// const sticky_reg_exp = /hello\d\s/y,
//     global_reg_exp = /hello\d\s/g,
//     normal_reg_exp = /hello\d\s/;
// console.log(normal_reg_exp.exec(reg_exp_string));
// console.log(normal_reg_exp.lastIndex);
// console.log(normal_reg_exp.exec(reg_exp_string));
// console.log(normal_reg_exp.lastIndex);
// console.log(normal_reg_exp.exec(reg_exp_string));
// console.log(normal_reg_exp.lastIndex);
// console.log(normal_reg_exp.exec(reg_exp_string));
// console.log(normal_reg_exp.lastIndex);
// console.log(normal_reg_exp.exec(reg_exp_string));
// console.log(normal_reg_exp.lastIndex);
// console.log(normal_reg_exp.sticky);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.exec(reg_exp_string));
// console.log(sticky_reg_exp.lastIndex);
// console.log(sticky_reg_exp.sticky);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.exec(reg_exp_string));
// console.log(global_reg_exp.lastIndex);
// console.log(global_reg_exp.sticky);
// 获取描述符内容: flags
// 获取正则内容: source
// const utf_16_string_reg_exp = /\u{20bb7}{2}.{2}d{2}/ugi,
//     utf_16_string = '𠮷𠮷千兆DD';
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// console.log(utf_16_string_reg_exp.source);
// console.log(utf_16_string_reg_exp.flags);
// 模拟获取描述符内容
// function get_reg_exp_flags(reg_exp) {
//     const reg_exp_string = (String(reg_exp) || reg_exp.toString()),
//         reg_exp_last_index = reg_exp_string.lastIndexOf('/');
//     return reg_exp_string.substring(reg_exp_last_index + 1);
// }
// const utf_16_string_reg_exp = /\u{20bb7}{2}.{2}d{2}/ugi,
//     utf_16_string = '𠮷𠮷千兆DD';
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// console.log(utf_16_string_reg_exp.source);
// console.log(utf_16_string_reg_exp.flags);
// console.log(get_reg_exp_flags(utf_16_string_reg_exp));
// 复制描述符覆盖
// const utf_16_string_reg_exp = /\u{20bb7}{2}.{2}d{2}/ugi,
//     utf_16_string = '𠮷𠮷千兆DD';
// console.log(utf_16_string_reg_exp.test(utf_16_string));
// const utf_16_string_reg_exp_fall_in = new RegExp(utf_16_string_reg_exp, 'ugiy');
// console.log(utf_16_string_reg_exp_fall_in.flags);
// console.log(utf_16_string_reg_exp.flags);
// 模板字符串
// 基本用法(占位符)
// 多行字符串
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// const template_string = `Hi,My name is ${name},
// ${age} year's old,
// I'm a ${gender ? 'boy' : 'girl'},
// My birthday is ${birthday},
// I love ${hobby.sports.join(',')}!
// `;
// console.log(template_string);
// 模板标签
// 字符串集合长度 - 变量集合长度 = 1
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// function template_span(strings, ...params) {
//     const {length: params_length} = params;
//     let template_span_string = '';
//     for (let i = 0; i < params_length; i++) {
//         template_span_string += strings[i];
//         template_span_string += params[i];
//     }
//     template_span_string += strings[params_length];
//     return template_span_string;
// }
// const template_string = `Hi,My name is ${name},\n${age} year's old,\nI'm a ${gender ? 'boy' : 'girl'},\nMy birthday is ${birthday},\nI love ${hobby.sports.join(',')}!`,
//     template_span_string = template_span`${template_string}`;
// console.log(template_string);
// console.log(template_span_string);
// 字符串集合当中的每一个元素都拥有获取其原生内容的方法-raw
// const name = 'black_myth_wtw',
//     age = 30,
//     gender = true,
//     birthday = '1993-06-30',
//     hobby = {sports: ['basketball', 'computer games']};
// function template_span(strings, ...params) {
//     const {length: params_length} = params;
//     let template_span_string = '';
//     for (let i = 0; i < params_length; i++) {
//         template_span_string += strings[i];
//         template_span_string += params[i];
//     }
//     template_span_string += strings[params_length];
//     return template_span_string;
// }
// function template_span_raw(strings, ...params) {
//     const {length: params_length} = params;
//     let template_span_raw_string = '';
//     for (let i = 0; i < params_length; i++) {
//         template_span_raw_string += strings.raw[i];
//         template_span_raw_string += params[i];
//     }
//     template_span_raw_string += strings.raw[params_length];
//     return template_span_raw_string;
// }
// const template_string = `Hi,My name is ${name},\n${age} year's old,\nI'm a ${gender ? 'boy' : 'girl'},\nMy birthday is ${birthday},\nI love ${hobby.sports.join(',')}!`,
//     template_span_string = template_span`${template_string}`,
//     template_span_raw_string = template_span_raw`Hi,My name is ${name},\n${age} year's old,\nI'm a ${gender ? 'boy' : 'girl'},\nMy birthday is ${birthday},\nI love ${hobby.sports.join(',')}!`,
//     template_span_raw_source_string = String.raw`Hi,My name is ${name},\n${age} year's old,\nI'm a ${gender ? 'boy' : 'girl'},\nMy birthday is ${birthday},\nI love ${hobby.sports.join(',')}!`;
// console.log(template_string);
// console.log(template_span_string);
// console.log(template_span_raw_string);
// console.log(template_span_raw_source_string);
