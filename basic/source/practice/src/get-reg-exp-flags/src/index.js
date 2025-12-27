// ES5
// get-reg-exp-flags 模拟获取正则表达式描述符内容
// function get_reg_exp_flags(reg_exp) {
//     if (!reg_exp instanceof RegExp) throw new TypeError(`The params ${reg_exp} must be a RegExp expression`);
//     var reg_exp_string = reg_exp.toString() || String(reg_exp);
//     return reg_exp_string.substring(reg_exp_string.lastIndexOf('/') + 1);
// }
// var reg_exp = /\u{20bb7}.{2}/uig;
// console.log(get_reg_exp_flags(reg_exp));

// ES6
// const get_reg_exp_flags = reg_exp => {
//     if (!reg_exp instanceof RegExp) throw new TypeError(`The params ${reg_exp} must be a RegExp expression`);
//     const reg_exp_string = reg_exp.toString() || String(reg_exp);
//     return reg_exp_string.substring(reg_exp_string.lastIndexOf('/') + 1);
// }
// const reg_exp = /\u{20bb7}.{2}/uig;
// console.log(get_reg_exp_flags(reg_exp));
