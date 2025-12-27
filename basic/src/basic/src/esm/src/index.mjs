// javascript esm 模块化导入导出
// 导出模块
// 导入模块
// 导入单项绑定(单个绑定)
// import {number} from './export/index.mjs';
// console.log(number);
// 导入多项绑定(多个绑定)
// import {number, gender, drink} from './export/index.mjs';
// console.log(number, gender, drink);
// 导入整个模块,注意可导入整个模块的默认值,通过 default 方法实行调用
// import * as export_modules from './export/index.mjs';
// console.log(export_modules, export_modules.number, export_modules.gender, export_modules.drink);
// 重命名导入导出模块
// import {count as sum, number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// 导入导出模块的默认值
// 导入模块的默认值
// import sum, {number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// 导入模块的默认值,注意只可导出一个模块的默认值,如果出现多个导出模块的默认值,则会直接抛出语法错误
// 重命名导入导出模块的默认值
// import {number, default as add} from './export/index.mjs';
// console.log(number);
// add();
// console.log(number);
// 重新导出绑定
// import {number, gender, drink, add as count} from './export/index.mjs';
// console.log(number, gender, drink);
// count();
// console.log(number);
// 无绑定导入
// import './export/index.mjs';
// const black_myth_wtw = ['black+myth+wtw', 32],
//     black_myth_wtw_information = [true, '1994-03-10', {sports: ['basketball', 'computer games', 'Elden Ring']}];
// black_myth_wtw.push_all(black_myth_wtw_information);
// console.log(black_myth_wtw);
// commonjs 特性
// 动态导入
// 赋值变量复制
// esm 特性
// 静态分析
// 赋值引用
// import sum, {number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// Web 浏览器内加载执行模块顺序
// 下载并解析入口模块
// 递归下载并解析入口模块所导入的资源
// 递归执行入口模块所导入的资源
// 执行入口模块
