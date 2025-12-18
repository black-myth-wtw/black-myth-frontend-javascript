// array 改进的数组
// Array.of 用于规整数组声明时具有混乱意义的参数,注意 Array.of 所创建的类对象并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是直接绑定至构造对象 this 上,由构造函数来确定值类型
// const arr = Array.of(24, 68, 44);
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
// const arr_ano = Array.of(36, 24);
// console.log(arr_ano);
// console.log(arr_ano[1]);
// console.log(arr_ano.length);
// Array.from 是用于将类数组对象或者可迭代对象转换为普通数组,同时可实行操作,并可改变操作函数的 this 绑定,注意 Array.from 所创建的类对象并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是直接绑定至构造对象 this 上,由构造函数来确定值类型
// const enum_arr = length => Array.from(Array.apply(null, {length}), (item, index) => index + 1);
// const enum_arr_result = enum_arr(100);
// console.log(enum_arr_result);
// console.log(enum_arr_result.length);
// 生成器的对象方法
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     * [Symbol.iterator]() {
//         for (const value of Object.values(this)) {
//             yield value;
//         }
//     }
// };
// const generator_arr = Array.from(black_myth_wtw);
// console.log(generator_arr.length);
// console.log(generator_arr);
// for (const value of generator_arr) {
//     console.log(value);
// }
// Array.from 的第三个参数,可改变操作函数的 this 绑定
// const base_add_num = {
//     base: 2,
//     add(num) {
//         return num + this.base;
//     }
// };
// const base_add_arr = [4, 6, 8];
// const base_add_arr_transform = Array.from(base_add_arr, base_add_num.add, base_add_num);
// console.log(base_add_arr_transform);
// for (const value of base_add_arr_transform) {
//     console.log(value);
// }
// 方法
// find 匹配第一个符合条件的数组元素
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.find(item => item > 25));
// findIndex 匹配第一个符合条件的数组元素下标
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.findIndex(item => item > 50));
// fill 用于向指定的数组位置填充覆盖指定的数据
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.fill(100));
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.fill(100, 3));
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.fill(100, 3, 5));
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.fill(100, 3, -2));
// copyWithin 用于向指定的数组位置填充覆盖指定的数组范围内的数据
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.copyWithin(1, 3));
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.copyWithin(2, 3, 5));
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.copyWithin(0, 2, -1));
// includes 判断数组内是否存在某个数据
// const num = [25, 30, 20, 45, 88, 66];
// console.log(num.includes(35));
// console.log(num.includes(30));
// console.log(num.includes(66));
// console.log(num.includes(99));
// fromEntries 用于将二维可迭代对象或者二维类数组对象转换为普通对象
// 定型数组
// 创建方式
// 通过使用自定义数组缓冲区来创建视图
// const array_buffer = new ArrayBuffer(8);
// console.log(array_buffer.byteLength);
// const arr_data_view = new DataView(array_buffer),
//     arr_data_view_ano = new DataView(array_buffer, 2, 4);
// console.log(arr_data_view.byteLength, arr_data_view.byteOffset);
// console.log(arr_data_view_ano.byteLength, arr_data_view_ano.byteOffset);
// arr_data_view.setInt8(0, 0);
// arr_data_view.setInt8(1, 1);
// // arr_data_view.setInt8(8, 255);
// arr_data_view.setInt8(6, 65537)
// arr_data_view.setInt8(7, 30);
// console.log(arr_data_view.getInt8(0));
// console.log(arr_data_view.getInt8(1));
// console.log(arr_data_view.getInt8(2));
// console.log(arr_data_view.getInt8(6));
// console.log(arr_data_view.getInt8(7));
// console.log(arr_data_view.buffer === array_buffer);
// // arr_data_view_ano.setInt16(0, 512);
// console.log(arr_data_view_ano.byteOffset, arr_data_view_ano.byteLength);
// arr_data_view_ano.setInt16(0, 32767);
// arr_data_view_ano.setInt16(2, 255);
// console.log(arr_data_view_ano.getInt16(0));
// // console.log(arr_data_view_ano.getInt8(1));
// console.log(arr_data_view_ano.getInt16(2));
// console.log(arr_data_view_ano.buffer === array_buffer);
// 通过使用定型数组声明来创建视图
// const arr_int_8 = new Int8Array([22, 48, 59, 32, 512]);
// console.log(arr_int_8.length, arr_int_8.byteLength);
// console.log(arr_int_8[0]);
// console.log(arr_int_8[1]);
// console.log(arr_int_8[2]);
// console.log(arr_int_8[3]);
// console.log(arr_int_8[4]);
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// console.log(arr_int_32.length, arr_int_32.byteLength);
// console.log(arr_int_32[0]);
// console.log(arr_int_32[1]);
// console.log(arr_int_32[2]);
// console.log(arr_int_32[3]);
// console.log(arr_int_32[4]);
// console.log(arr_int_32[5]);
// console.log(arr_int_32[6]);
// console.log(arr_int_32[7]);
// const arr_int_16 = new Int16Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// console.log(arr_int_16.length, arr_int_16.byteLength);
// console.log(arr_int_16[0]);
// console.log(arr_int_16[1]);
// console.log(arr_int_16[2]);
// console.log(arr_int_16[3]);
// console.log(arr_int_16[4]);
// console.log(arr_int_16[5]);
// console.log(arr_int_16[6]);
// console.log(arr_int_16[7]);
// console.log(arr_int_16.byteOffset);
// 通过使用已声明的定型数组构造对象来创建视图
// const arr_int_8 = new Int8Array([22, 48, 59, 32, 512]);
// console.log(arr_int_8.length, arr_int_8.byteLength);
// console.log(arr_int_8[0]);
// console.log(arr_int_8[1]);
// console.log(arr_int_8[2]);
// console.log(arr_int_8[3]);
// console.log(arr_int_8[4]);
// console.log([...arr_int_8]);
// const arr_int_16 = new Int16Array([...arr_int_8, 32788, 512]);
// console.log(arr_int_16.length, arr_int_16.byteLength);
// console.log(arr_int_16[0]);
// console.log(arr_int_16[1]);
// console.log(arr_int_16[2]);
// console.log(arr_int_16[3]);
// console.log(arr_int_16[4]);
// console.log(arr_int_16[5]);
// console.log(arr_int_16[6]);
// const arr_int_32 = new Int32Array(arr_int_16, 4, 24);
// console.log(arr_int_32.length, arr_int_32.byteLength);
// console.log(arr_int_32[0]);
// console.log(arr_int_32[1]);
// console.log(arr_int_32[2]);
// console.log(arr_int_32[3]);
// console.log(arr_int_32[4]);
// console.log(arr_int_32[5]);
// console.log(arr_int_32[6]);
// console.log(arr_int_32.byteLength, arr_int_32.byteOffset);
// 对于以上三种创建方式,均可指定字节偏移量与字节长度
// 区别
// 相似的方法
// map
// forEach
// keys
// values
// entries
// some
// every
// filter
// reduce
// reduceRight
// join
// reverse
// sort
// find
// findIndex
// fill
// copyWithin
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// console.log(arr_int_32.map(item => item + 20));
// const arr_int_16 = new Int16Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// console.log(arr_int_16.map(item => item + 40));
// 同为可迭代对象,可使用展开运算符
// const arr_int_16 = new Int16Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// console.log(...arr_int_16);
// console.log([...arr_int_16]);
// for (const value of arr_int_16) {
//     console.log(value);
// }
// 不同之处
// 定型数组缺失的方法
// push
// pop
// shift
// unshift
// concat
// splice
// 定型数组缺失的特性
// 定型数组元素不可扩展
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// arr_int_32[16] = 65536;
// console.log(arr_int_32, arr_int_32.length);
// 定型数组长度不可配置、不可修改
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// arr_int_32.length = 0;
// console.log(arr_int_32, arr_int_32.length);
// 定型数组特定的方法
// set
// 是用于向指定的定型数组位置覆盖指定的范围内的数组元素
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// arr_int_32.set([89, 66, 24], 2);
// console.log(arr_int_32);
// subArray
// 与 slice 方法一致,用于截取定型数组
// const arr_int_32 = new Int32Array([22, 48, 59, 32, 512, 32757, 116, 32788]);
// const arr_int_32_sub_arr = arr_int_32.subarray(4, 6);
// console.log(arr_int_32_sub_arr, arr_int_32_sub_arr.length, arr_int_32_sub_arr.byteLength, arr_int_32_sub_arr.byteOffset);
// for (const value of arr_int_32_sub_arr) {
//     console.log(value);
// }
