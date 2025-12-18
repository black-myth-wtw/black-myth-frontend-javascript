// esm 模块化导入导出
// 导出模块
// 导入模块
// 导入单个绑定
// import {number} from './export/index.mjs';
// console.log(number);
// 导入多个绑定
// import {number, name, drink} from './export/index.mjs';
// console.log(number, name, drink);
// 导入整个模块,注意可导入整个模块的默认值,通过 default 实行调用
// import * as module from './export/index.mjs';
// console.log(module.name);
// console.log(module.number);
// console.log(module.drink);
// 重命名导入导出模块
// import {number, count as add} from './export/index.mjs';
// console.log(number);
// add();
// console.log(number);
// 模块的默认值
// 导入模块的默认值
// import sum, {number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// 导出模块的默认值,注意只能导出一个模块的默认值,如果出现存在多个导出模块的默认值,会直接抛出语法错误
// import sum, {number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// 重命名导入导出模块的默认值
// import {default as pow, number} from './export/index.mjs';
// console.log(number);
// pow();
// console.log(number);
// import pow, {number} from './export/index.mjs';
// console.log(number);
// pow();
// console.log(number);
// 重新导出绑定
// import {number, name, drink, count} from './export/index.mjs';
// console.log(number, name, drink);
// count();
// console.log(number);
// 无绑定导入
// import './export/index.mjs';
// const arr = ['black_myth_wtw', 32, true];
// const information = [{hobby: {sports: ['basketball', 'computer games']}}, '1993-06-30'];
// console.log(arr.pushAll(information));
// console.log(arr);
// ESM 特性
// 静态分析
// 赋值引用
// import sum, {number} from './export/index.mjs';
// console.log(number);
// sum();
// console.log(number);
// commonjs 特性
// 动态导入
// 赋值复制变量(基本类型数据和引用类型数据)
// Web 浏览器内加载执行模块顺序
// 下载并分析入口模块
// 递归下载并分析入口模块所导入的资源
// 递归执行入口模块所导入的资源
// 执行入口模块
// import * as modules from './export/index.mjs';
// console.log(modules.number);
// modules.default();
// console.log(modules.number);
