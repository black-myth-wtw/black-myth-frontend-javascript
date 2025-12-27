// javascript typed array 改进的数组
// 基本用法
// Array.of 用于规整数组声明时具有混乱意义的参数,注意 Array.of 所创建的派生类数组对象,并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是绑定至构造对象的 this 上,由构造函数来确定值类型
// const arr = Array.of(22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3);
// console.log(arr, arr.length);
// Array.from 用于将类数组对象或者是可迭代对象转化为普通数组,并可实行操作,且可改变操作函数的 this 绑定,注意 Array.from 所创建的派生类数组对象并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是直接绑定至构造对象的 this 上,由构造函数来确定值类型
// 用一行代码创建一个从 1-100 的数组
// const arr_num = Array.from(Array.apply(null, {length: 100}), (item, index) => index + 1);
// console.log(arr_num);
// 可迭代对象,使用 Array.from 进行转化为普通数组
// const black_myth_wtw = {
//     name: 'black_myth_wtw',
//     age: 32,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr = Array.from(black_myth_wtw);
// console.log(arr, arr.length);
// for (const val of black_myth_wtw) {
//     console.log(`Array.from:values-value:${val}`);
// }
// Array.from 第三个参数,用于可改变操作函数的 this 绑定
// const num = [2, 4, 6, 8];
// const numeric = {
//     base: 10,
//     // add: num => num + this.base,
//     add(num) {
//         return num + this.base
//     },
// };
// // const num_transform = Array.from(num, numeric.add);
// const num_transform = Array.from(num, numeric.add, numeric);
// console.log(window.num, num, num_transform);
// console.log(num);
// 方法
// find 用于匹配第一个符合标准的数组元素
// const arr = [22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3];
// const find_item = arr.find(item => item > 50);
// console.log(find_item);
// findIndex 用于匹配第一个符合标准的数组元素下标
// const arr = [22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3];
// const find_item_index = arr.findIndex(item => item > 80);
// console.log(find_item_index);
// fill 用于向指定的数组位置填充覆盖指定的数据
// const arr = [22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3];
// // const fill_item = arr.fill(108);
// // const fill_item = arr.fill(108, 4);
// // const fill_item = arr.fill(108, 5, -2);
// const fill_item = arr.fill(108, 6, -1);
// console.log('fill_item:', fill_item);
// copyWithin 用于向指定的数组位置填充覆盖指定数组范围内的数据
// const arr = [22, 11, 16, 66, 88, 99, 32, 77, 55, 44, 3];
// const copy_with_in_arr = arr.copyWithin(3, 7, -2);
// const copy_with_in_arr = arr.copyWithin(2, 5, -2);
// const copy_with_in_arr = arr.copyWithin(2, 5);
// console.log('copy_with_in_arr:', copy_with_in_arr);
// fromEntries 用于将二维可迭代对象或者二维类数组对象转化为普通对象
// 定型数组
// 创建方式
// 三种创建方式
// 通过自定义的数组缓冲区创建视图
// const arr_buffer = new ArrayBuffer(8),
//     data_view = new DataView(arr_buffer),
//     data_view_ano = new DataView(arr_buffer, 3, 4);
// console.log(arr_buffer.byteLength, arr_buffer.byteOffset);
// console.log(data_view.byteLength, data_view.byteOffset);
// console.log(data_view_ano.byteLength, data_view_ano.byteOffset);
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 257);
// data_view.setInt8(8, 513);
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 512);
// console.log(data_view.byteLength, data_view.byteOffset);
// console.log(data_view.getInt8(0));
// console.log(data_view.getInt8(1));
// console.log(data_view.getInt8(2));
// console.log(data_view.getInt8(3));
// console.log(data_view.getInt8(4));
// console.log(data_view.getInt8(5));
// console.log(data_view.getInt8(6));
// console.log(data_view.getInt8(7));
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 512);
// console.log(data_view.byteLength, data_view.byteOffset);
// console.log(data_view.getInt16(0));
// console.log(data_view.getInt16(1));
// console.log(data_view.getInt16(2));
// console.log(data_view.getInt16(3));
// console.log(data_view.getInt16(4));
// console.log(data_view.getInt16(5));
// console.log(data_view.getInt16(6));
// console.log(data_view.getInt16(7));
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 512);
// console.log(data_view.byteLength, data_view.byteOffset);
// console.log(data_view.getInt32(0));
// console.log(data_view.getInt32(1));
// console.log(data_view.getInt32(2));
// console.log(data_view.getInt32(3));
// console.log(data_view.getInt32(4));
// data_view.setInt16(0, 1);
// // data_view.setInt16(1, 2);
// // data_view.setInt16(2, 3);
// // data_view.setInt16(3, 4);
// // data_view.setInt16(4, 5);
// // data_view.setInt16(5, 6);
// // data_view.setInt16(6, 512);
// // console.log(data_view.byteLength, data_view.byteOffset);
// // console.log(data_view.getInt8(0));
// // console.log(data_view.getInt8(1));
// // console.log(data_view.getInt8(2));
// // console.log(data_view.getInt8(3));
// // console.log(data_view.getInt8(4));
// // console.log(data_view.getInt8(5));
// // console.log(data_view.getInt8(6));
// // console.log(data_view.getInt8(7));
// 通过定型数组构造声明创建视图
// const arr_int8 = new Int8Array([0, 1, 2, 3, 4, 5, 6, 257]);
// console.log(arr_int8);
// console.log(arr_int8.length, arr_int8.byteLength, arr_int8.byteOffset);
// console.log(arr_int8[0]);
// console.log(arr_int8[1]);
// console.log(arr_int8[2]);
// console.log(arr_int8[3]);
// console.log(arr_int8[4]);
// console.log(arr_int8[5]);
// console.log(arr_int8[6]);
// console.log(arr_int8[7]);
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32768]);
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32767]);
// console.log(arr_int16);
// console.log(arr_int16.length, arr_int16.byteLength, arr_int16.byteOffset);
// console.log(arr_int16[0]);
// console.log(arr_int16[1]);
// console.log(arr_int16[2]);
// console.log(arr_int16[3]);
// console.log(arr_int16[4]);
// const arr_int32 = new Int32Array([0, 1, 2, 3, 32768]);
// console.log(arr_int32);
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// 通过已声明的定型数组构造对象创建视图
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32768]);
// // const arr_int32 = new Int32Array(arr_int16, 3, 2);
// const arr_int32 = new Int32Array(arr_int16);
// console.log(arr_int32);
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// 对于以上的三种创建方式,都可指定字节偏移量与字节长度
// 定型数组与普通数组的区别
// 相似之处
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
// const arr_int32 = new Int32Array([0, 1, 2, 3, 32768]);
// const arr_int32_map = arr_int32.map(arr_int32_item => arr_int32_item + 66);
// console.log(arr_int32_map);
// 同为可迭代对象,可使用展开运算符
// const arr_int32 = new Int32Array([0, 1, 2, 3, 32768]);
// for (const val of arr_int32) {
//     console.log(`iterator val:${val}`);
// }
// console.log(...arr_int32);
// 不同之处
// 定型数组缺失的方法
// push
// pop
// shift
// unshift
// concat
// splice
// 定型数组缺失的特性
// 定型数组内的数组元素不可扩展
// 定型数组的数组长度不可配置且不可修改
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32768]);
// // const arr_int32 = new Int32Array(arr_int16, 3, 2);
// const arr_int32 = new Int32Array(arr_int16);
// console.log(arr_int32);
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// arr_int32.length = 10;
// arr_int32[9] = 288;
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// console.log(arr_int32[9]);
// 定型数组特有的特性
// set
// 用于向指定的定型数组位置覆盖指定的范围内的数组元素
// subArray
// 类似于普通数组的 slice 方法,用于截取定型数组
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32768]);
// const arr_int32 = new Int32Array(arr_int16, 3, 2);
// const arr_int32 = new Int32Array(arr_int16);
// console.log(arr_int32);
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// arr_int32.length = 10;
// arr_int32[9] = 288;
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// console.log(arr_int32[9]);
// arr_int32.set([66, 88, 96, 108], 2);
// arr_int32.set([66, 88, 96], 2);
// arr_int32.set([66, 88, 96], 1);
// console.log(arr_int32.length, arr_int32.byteLength, arr_int32.byteOffset);
// console.log(arr_int32[0]);
// console.log(arr_int32[1]);
// console.log(arr_int32[2]);
// console.log(arr_int32[3]);
// console.log(arr_int32[4]);
// const arr_int16 = new Int16Array([0, 1, 2, 3, 32768]);
// // const arr_int32 = new Int32Array(arr_int16, 3, 2);
// const arr_int32 = new Int32Array(arr_int16);
// console.log(arr_int32.subarray(1, 3));
// console.log(arr_int32.subarray(1, -1));
