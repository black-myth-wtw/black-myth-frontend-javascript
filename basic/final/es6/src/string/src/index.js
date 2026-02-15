// UTF-8✅
// 存在 2^8 个码位✅
// 基本多文种平面✅
// 获取字符位 charAt✅
// 获取字符位编码 charCodeAt✅
// 获取编码转换 fromCharCode✅
// UTF-16✅
// 存在 2^16 个码位✅
// 辅助平面✅
// 判断是否是一个 UTF-16 字符✅
// const str = '千兆𠮷𠮷';
// const str = '𠮷𠮷千兆';
// function is_utf_16_str(str) {
//     return (String(str) || str.toString()).codePointAt(0) > 0xFFFF;
// }
// console.log(is_utf_16_str(str));
// 获取 utf-16 字符串长度✅
// const str = '千兆𠮷𠮷';
// function get_utf_16_str_length(str) {
//     return (String(str) || str.toString()).match(/[\s\S]/ug).length;
// }
// const utf_16_str_length = get_utf_16_str_length(str);
// console.log('utf_16_str_length:', utf_16_str_length);
// 正则表达式匹配 u 描述符✅
// const str = '𠮷𠮷千兆';
// const utf_16_reg_exp = /𠮷𠮷千兆/;
// const utf_16_reg_exp = /𠮷{2}千兆/;
// const utf_16_reg_exp = /𠮷{2}千兆/u;
// const utf_16_reg_exp = /\u{20bb7}{2}千兆/u;
// console.log(utf_16_reg_exp.test(str));
// 获取字符位编码 codePointAt✅
// 获取编码转换 fromCodePoint✅
// 获取 utf-16 字符串数组✅
// const str = '千兆𠮷𠮷';
// function get_utf_16_str_arr(str) {
//     return (String(str) || str.toString()).match(/[\s\S]/ug);
// }
// const utf_16_str_arr = get_utf_16_str_arr(str);
// console.log('utf_16_str_arr:', utf_16_str_arr);
// const utf_16_str_length = get_utf_16_str_length(str);
// console.log('utf_16_str_length:', utf_16_str_length);
// 获取 utf-16 字符串数组以及其字符位编码与编码转换✅
// const str = '千兆𠮷𠮷';
// console.log(str.length);
// for (let i = 0; i < str.length; i++) {
//     console.log('str:', str[i]);
//     console.log('char_at:', str.charAt(i));
//     const str_char_code = str.charCodeAt(i);
//     console.log('str_char_code:', str_char_code);
//     const str_from_char_code = String.fromCharCode(str_char_code);
//     console.log('str_from_char_code:', str_from_char_code);
// }
// const str = '𠮷𠮷千兆';
// // 判断是否为一个 utf-16 字符
// function is_utf_16_str(str) {
//     return (String(str) || str.toString()).codePointAt(0) > 0xFFFF;
// }
// // 获取 utf-16 字符串数组
// function get_utf_16_str_arr(str) {
//     return (String(str) || str.toString()).match(/[\s\S]/ug);
// }
// // 获取 utf-16 字符串数组以及其字符位编码与编码转换
// function get_utf_16_str_arr_code_point(str) {
//     const utf_16_str_arr = get_utf_16_str_arr(str);
//     for (let i = 0; i < utf_16_str_arr.length; i++) {
//         const utf_16_str_char = utf_16_str_arr[i],
//             is_utf_16_str_judgement = is_utf_16_str(utf_16_str_char);
//         if (is_utf_16_str_judgement) {
//             console.log('char_at:', utf_16_str_char);
//             const utf_16_str_code_point = utf_16_str_char.codePointAt(0);
//             console.log('code_point_at:', utf_16_str_code_point);
//             const utf_16_str_from_code_point = String.fromCodePoint(utf_16_str_code_point);
//             console.log('from_code_point:', utf_16_str_from_code_point);
//         } else {
//             console.log('str:', utf_16_str_char);
//             console.log('char_at:', utf_16_str_char.charAt(0));
//             const utf_16_str_char_code = utf_16_str_char.charCodeAt(0);
//             console.log('char_code_at:', utf_16_str_char_code);
//             const utf_16_str_from_char_code = String.fromCharCode(utf_16_str_char_code);
//             console.log('from_char_code:', utf_16_str_from_char_code);
//         }
//     }
// }
// get_utf_16_str_arr_code_point(str);
// 字符串方法✅
// 获取字符子串: startsWith,endsWith,includes✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// const black_myth_wtw_introduce_length = black_myth_wtw.introduce().length;
// console.log('black_myth_wtw_introduce_length:', black_myth_wtw_introduce_length);
// console.log(black_myth_wtw_introduce.startsWith('H'));
// console.log(black_myth_wtw_introduce.startsWith('M', 4));
// console.log(black_myth_wtw_introduce.startsWith('!', 124));
// console.log(black_myth_wtw_introduce.endsWith('!'));
// console.log(black_myth_wtw_introduce.endsWith('!', 120));
// console.log(black_myth_wtw_introduce.includes('old'));
// console.log(black_myth_wtw_introduce.includes('old', 99));
// 重复添加: repeat✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// console.log(black_myth_wtw_introduce.repeat(3));
// 填充扩展字符串: padStart-从字符串左边填充扩展指定字符(若无指定则为空字符),如果填充长度小于字符串长度,则直接返回此字符串✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// // console.log(black_myth_wtw_introduce.padStart(128, 'xxxxxx'));
// console.log(black_myth_wtw_introduce.padStart(123, 'xxxxxx'));
// 正则表达式✅
// 粘滞描述符: y 描述符✅
// const str = 'hello1 hello2 hello3 hello4 hello5 hello6 ';
// const str = 'hello1 hello2 hello3hello4 hello5 hello6 ';
// const reg_exp_normal = /hello\d\s/,
//     reg_exp_global = /hello\d\s/g,
//     reg_exp_sticky = /hello\d\s/y;
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_normal.exec(str));
// console.log(reg_exp_normal.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_global.exec(str));
// console.log(reg_exp_global.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.test(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// console.log(reg_exp_sticky.exec(str));
// console.log(reg_exp_sticky.lastIndex);
// 判断是否存在粘滞描述符(y 描述符): sticky✅
// console.log(reg_exp_normal.sticky);
// console.log(reg_exp_global.sticky);
// console.log(reg_exp_sticky.sticky);
// 获取描述符内容: flags✅
// const utf_16_reg_exp = /\u{20bb7}{2}千兆/uig;
// console.log(utf_16_reg_exp.flags);
// 模拟获取描述符内容✅
// function get_reg_exp_flags(reg_exp) {
//     if (!reg_exp instanceof RegExp) throw new TypeError(`The params reg_exp:${reg_exp} must be RegExp type!!!!!!`);
//     const reg_exp_str = (String(reg_exp) || reg_exp.toString());
//     return reg_exp_str.substring(reg_exp_str.lastIndexOf('/') + 1);
// }
// const utf_16_reg_exp = /\u{20bb7}{2}千兆/uigy;
// const utf_16_reg_exp_flags = get_reg_exp_flags(utf_16_reg_exp);
// console.log('utf_16_reg_exp_flags:', utf_16_reg_exp_flags);
// 获取正则内容: source✅
// const utf_16_reg_exp = /\u{20bb7}{2}千兆/uig;
// console.log(utf_16_reg_exp.source);
// 复制描述符覆盖✅
// const utf_16_reg_exp = /\u{20bb7}{2}千兆/uig;
// console.log(utf_16_reg_exp.flags);
// const utf_16_reg_exp_copy_fill = new RegExp(utf_16_reg_exp, 'uigy');
// console.log(utf_16_reg_exp_copy_fill.flags);
// 模板字符串✅
// 基本用法(注意占位符)✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 多行字符串✅
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name},
// ${this.age} year's old,
// I'm a ${this.gender ? 'boy' : 'girl'},
// My birthday is ${this.birthday},
// I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// console.log(black_myth_wtw.introduce());
// 模板标签✅
// 字符串集合长度 - 变量集合长度 = 1✅
// 字符串集合当中的每一个元素都拥有获取其原生内容的方法: raw 方法✅
// function black_myth_introduce(strs, ...params) {
//     let strs_result = '';
//     const {length: params_length} = params;
//     for (let i = 0; i < params_length; i++) {
//         strs_result = `${strs_result}${strs[i]}`;
//         strs_result = `${strs_result}${params[i]}`;
//     }
//     strs_result = `${strs_result}${strs[params_length]}`;
//     return strs_result;
// }
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name}, ${this.age} year's old, I'm a ${this.gender ? 'boy' : 'girl'}, My birthday is ${this.birthday}, I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// console.log('black_myth_wtw_introduce:', black_myth_wtw_introduce);
// console.log('black_myth_wtw_introduce_model_span:', black_myth_introduce`${black_myth_wtw_introduce}`);
// function black_myth_introduce_raw(strs, ...params) {
//     let strs_result = '';
//     const {length: params_length} = params;
//     for (let i = 0; i < params_length; i++) {
//         strs_result = `${strs_result}${strs.raw[i]}`;
//         strs_result = `${strs_result}${params[i]}`;
//     }
//     strs_result = `${strs_result}${strs.raw[params_length]}`;
//     return strs_result;
// }
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 16,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['Black Myth WuKong', 'Elden Ring']
//     },
//     introduce() {
//         return `Hi, My name is ${this.name},\n ${this.age} year's old,\n I'm a ${this.gender ? 'boy' : 'girl'},\n My birthday is ${this.birthday},\n I love ${this.hobby.sports.join(',')}!!!!!!`;
//     }
// };
// const black_myth_wtw_introduce = black_myth_wtw.introduce();
// console.log('black_myth_wtw_introduce:', black_myth_wtw_introduce);
// console.log('black_myth_wtw_introduce_raw:', String.raw`Hi, My name is ${black_myth_wtw.name},\n ${black_myth_wtw.age} year's old,\n I'm a ${black_myth_wtw.gender ? 'boy' : 'girl'},\n My birthday is ${black_myth_wtw.birthday},\n I love ${black_myth_wtw.hobby.sports.join(',')}!!!!!!`);
// console.log('black_myth_wtw_introduce_model_aw:', black_myth_introduce_raw`Hi, My name is ${black_myth_wtw.name},\n ${black_myth_wtw.age} year's old,\n I'm a ${black_myth_wtw.gender ? 'boy' : 'girl'},\n My birthday is ${black_myth_wtw.birthday},\n I love ${black_myth_wtw.hobby.sports.join(',')}!!!!!!`);
