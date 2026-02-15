// esm 模块导入导出构建✅
// 模块导入导出✅
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
// import * as modules_default from './exports/index.mjs';
// console.log('modules_default_number:', modules_default.number);
// console.log('modules_default_play:', modules_default.play);
// console.log('modules_default_eat:', modules_default.eat);
// console.log('modules_default_drink:', modules_default.drink);
// console.log('modules_default_count:', modules_default.count());
// console.log('modules_default_numb:', modules_default.number);
// 重命名模块导入导出✅
// import {count as add, number} from './exports/index.mjs';
// console.log('number:', number);
// add();
// console.log('number:', number);
// 模块导入导出的默认值✅
// 导入模块的默认值✅
// import pow, {number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import sum, {number} from './exports/index.mjs';
// console.log('number:', number);
// sum();
// console.log('number:', number);
// 导出模块的默认值,注意只可导入单个模块的默认值,如果出现存在导出多个模块的默认值,则直接抛出语法错误✅
// SyntaxError: Duplicate export of 'default'
// import sum, {number} from './exports/index.mjs';
// 重命名模块导入导出默认值✅
// import pow, {number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import sum, {number} from './exports/index.mjs';
// console.log('number:', number);
// sum();
// console.log('number:', number);
// 重新导出绑定✅
// import {number, eat, drink, play, pow} from './exports/index.mjs';
// console.log('number:', number);
// console.log('eat:', eat);
// console.log('drink:', drink);
// console.log('play:', play);
// pow();
// console.log('number:', number);
// 无绑定导入✅
// import "./exports/index.mjs";
// const black_myth_wtw = ["black|myth|wtw", 18, false];
// const black_myth_wtw_part = [
//   "1996-06-26",
//   { sports: ["basketball", "football", "volleyball", "badminton"] },
//   "ZhaoYue",
// ];
// black_myth_wtw.pushAll(black_myth_wtw_part);
// console.log('black_myth_wtw:', black_myth_wtw);
// esm 模块导入导出与 commonjs 模块导入导出的区别✅
// esm 模块导入导出✅
// 静态分析✅
// 赋值引用✅
// import {default as pow, number} from './exports/index.mjs';
// console.log('number:', number);
// pow();
// console.log('number:', number);
// import { hobby, default as play_hobby } from "./exports/index.mjs";
// console.log("hobby:", hobby);
// console.log("play_hobby:", play_hobby());
// hobby.sports = [
//   "Black Myth WuKong",
//   "Black Myth ZhongKui",
//   "Elden Ring",
//   "Sekiro: Shadows Die Twice",
//   "Dark Souls",
//   "Elder Scrolls V: Skyrim",
//   "The Witcher 3: Wild Hunt",
// ];
// commonjs 模块导入导出✅
// 动态导入✅
// 赋值变量复制✅
// Web 浏览器页面内加载执行模块顺序✅
// 下载并分析入口模块✅
// 递归下载并分析入口模块所导入的资源✅
// 递归执行入口模块所导入的资源✅
// 执行入口模块✅
// 导入整个模块,注意可导入整个模块的默认值,通过使用 default 方法实行调用✅
// import * as modules_default from './exports/index.mjs';
// console.log('modules_default_number:', modules_default.number);
// modules_default.default();
// console.log('modules_default_number:', modules_default.number);
