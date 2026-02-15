// esm 模块导入导出✅
// 导出模块✅
// 导入模块✅
// 导入单个绑定✅
// import {number} from './exports/index.mjs';
// console.log('number:', number);
// 导入多个绑定✅
// import {number, play, eat, drink} from './exports/index.mjs';
// console.log('number:', number);
// console.log('play:', play);
// console.log('eat:', eat);
// console.log('drink:', drink);
// 导入整个模块,注意可导入整个模块的默认值,通过使用 default 方法实行调用✅
// import * as exports_module from './exports/index.mjs';
// console.log('exports_module_number:', exports_module.number);
// console.log('exports_module_play:', exports_module.play);
// console.log('exports_module_eat:', exports_module.eat);
// console.log('exports_module_drink:', exports_module.drink);
// exports_module.count();
// console.log('exports_module_number:', exports_module.number);
// 重命名导入导出模块✅
// import {number, count as add} from './exports/index.mjs';
// console.log('number:', number);
// add();
// console.log('number:', number);
// 模块导入导出的默认值✅
// 导入模块的默认值✅
// import sum, {number} from './exports/index.mjs';
// console.log('number:', number);
// sum();
// console.log('number:', number);
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import pow, {number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// 导出模块的默认值,注意只可导入单个模块的默认值,如果出现存在多个导出模块的默认值,则直接抛出语法错误✅
// SyntaxError: Duplicate export of 'default'
// import pow from './exports/index.mjs';
// 重命名导入导出模块的默认值✅
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import pow, {number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// 重新导出绑定✅
// import {number, play, eat, drink, sum} from './exports/index.mjs';
// console.log('number:', number);
// console.log('play:', play);
// console.log('eat:', eat);
// console.log('drink:', drink);
// sum();
// console.log('number:', number);
// 无绑定导入✅
// import './exports/index.mjs';
// const black_myth_wtw = [
//     'black*myth*wtw',
//     28,
//     false,
// ];
// const black_myth_wtw_part = [
//     '1994-04-24',
//     {
//         sports: ['Black Myth WuKong', 'Elden Ring', 'Sekiro', 'Dark Souls', 'Cyberpunk 2077']
//     },
//     'WangJinJin',
// ];
// black_myth_wtw.pushAll(black_myth_wtw_part);
// console.log(black_myth_wtw);
// esm 模块化导入导出与 commonjs 模块化导入导出的区别✅
// esm 模块化导入导出✅
// 静态分析✅
// 赋值引用✅
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import {default as pow, hobby} from './exports/index.mjs';
// console.log('hobby:', hobby);
// console.log(pow());
// hobby.sports = ['Black Myth WuKong', 'Elden Ring', 'Dark Souls', 'Sekiro', 'Cyberpunk 2077', 'Final Fantasy VII'];
// commonjs 模块化导入导出✅
// 动态导入✅
// 赋值变量复制✅
// Web 浏览器内加载执行模块顺序✅
// 下载并分析入口模块✅
// 递归下载并分析入口模块所导入的资源✅
// 递归执行入口模块所导入的资源✅
// 执行入口模块✅
// import * as modules_default from './exports/index.mjs';
// console.log('number:', modules_default.number);
// modules_default.default();
// console.log('number:', modules_default.number);
