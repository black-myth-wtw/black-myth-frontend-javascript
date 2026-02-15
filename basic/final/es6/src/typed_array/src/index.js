// Array.of 用于规整数组声明时具有混乱意义的参数,注意 Array.of 所创建的派生类对象,它并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是直接绑定至构造对象的 this 上,由构造函数来确定值类型✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue'
// };
// const arr_of = Array.of(black_myth_wtw.name, black_myth_wtw.age, black_myth_wtw.gender, black_myth_wtw.birthday, black_myth_wtw.hobby, black_myth_wtw.lover);
// console.log(`arr_of:${arr_of}`);
// Array.from 用于将可迭代对象/类数组对象转化为普通数组,并可实行操作,且可改变操作函数的 this 绑定,注意 Array.from 所创建的派生类对象,它并不是由静态访问器属性 [Symbol.species] 来确定值类型的,而是直接绑定至构造对象的 this 上,由构造函数来确定值类型✅
// 一行代码实现一个从 1-100 的数组
// const length = 100;
// const arr_from = Array.from(Array.apply(null, {length}), function (item, index) {
//     return index + 1;
// });
// console.log('arr_from:', arr_from);
// Array.from 是用于将类数组对象/可迭代对象转化为普通数组
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr_from = Array.from(black_myth_wtw);
// console.log('arr_from:', arr_from);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue'
// };
// class Black_Myth_WTW {
//     constructor(name = black_myth_wtw.name, age = black_myth_wtw.age, gender = black_myth_wtw.gender, birthday = black_myth_wtw.birthday, hobby = black_myth_wtw.hobby, lover = black_myth_wtw.lover) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;
//         this.hobby = hobby;
//         this.lover = lover;
//     }
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// }
// const black_myth_wtw_personal = new Black_Myth_WTW();
// const arr_from = Array.from(black_myth_wtw_personal);
// console.log('arr_from:', arr_from);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue'
// };
// const black_myth_wtw_set = new Set(Object.values(black_myth_wtw));
// const arr_from = Array.from(black_myth_wtw_set);
// console.log('arr_from:', arr_from);
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue'
// };
// const black_myth_wtw_map = new Map([[{name: '姓名'}, black_myth_wtw.name], [{age: '年龄'}, black_myth_wtw.age], [{gender: '性别'}, black_myth_wtw.gender], [{birthday: '生日'}, black_myth_wtw.birthday], [{hobby: '爱好'}, black_myth_wtw.hobby], [{lover: '爱人'}, black_myth_wtw.lover]]);
// const arr_from = Array.from(black_myth_wtw_map);
// console.log('arr_from:', arr_from);
// 改进的数组方法✅
// find-用于匹配第一个符合规则/条件的数组元素✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr_from = Array.from(black_myth_wtw);
// const arr_from_find_item = arr_from.find(arr_from_item => typeof arr_from_item === 'number');
// console.log('arr_from_find_item:', arr_from_find_item);
// findIndex-用于匹配第一个符合规则/条件的数组元素下标✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr_from = Array.from(black_myth_wtw);
// const arr_from_find_item_index = arr_from.findIndex(arr_from_item => typeof arr_from_item === 'object');
// console.log('arr_from_find_item_index:', arr_from_find_item_index);
// fill-用于向指定的数组位置填充覆盖指定的数据✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr_from = Array.from(black_myth_wtw);
// // const arr_from_fill = arr_from.fill('WangJinJin');
// // console.log('arr_from_fill:', arr_from_fill);
// // const arr_from_fill = arr_from.fill('WangJinJin', 2, 4);
// // console.log('arr_from_fill:', arr_from_fill);
// const arr_from_fill = arr_from.fill('WangJinJin', 2, -1);
// console.log('arr_from_fill:', arr_from_fill);
// copyWithin-用于向指定的数组位置填充覆盖指定的数组范围内的数据✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue',
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr_from = Array.from(black_myth_wtw);
// // const arr_from_copy_with_in = arr_from.copyWithin(1, 2);
// // console.log('arr_from_copy_with_in:', arr_from_copy_with_in);
// // const arr_from_copy_with_in = arr_from.copyWithin(1, 3, 5);
// // console.log('arr_from_copy_with_in:', arr_from_copy_with_in);
// // const arr_from_copy_with_in = arr_from.copyWithin(2, 3, -2);
// // console.log('arr_from_copy_with_in:', arr_from_copy_with_in);
// const arr_from_copy_with_in = arr_from.copyWithin(2, 3, -1);
// console.log('arr_from_copy_with_in:', arr_from_copy_with_in);
// fromEntries-是用于将二维类数组对象/二维可迭代对象转化为普通对象✅
// const black_myth_wtw = {
//     name: 'black@myth@wtw',
//     age: 28,
//     gender: true,
//     birthday: '1993-06-30',
//     hobby: {
//         sports: ['basketball', 'computer games']
//     },
//     lover: 'ZhaoYue'
// };
// // const black_myth_wtw_map = new Map([['name', black_myth_wtw.name], ['age', black_myth_wtw.age], ['gender', black_myth_wtw.gender], ['birthday', black_myth_wtw.birthday], ['hobby', black_myth_wtw.hobby], ['lover', black_myth_wtw.lover]]);
// // const black_myth_wtw_from_entries = Object.fromEntries([...black_myth_wtw_map]);
// const black_myth_wtw_map = new Map(Object.entries(black_myth_wtw));
// const black_myth_wtw_from_entries = Object.fromEntries(black_myth_wtw_map);
// console.log('black_myth_wtw_from_entries:', black_myth_wtw_from_entries);
// 定型数组✅
// 声明方式✅
// 通过自定义的数组缓冲区来创建视图✅
// const array_buffer = new ArrayBuffer(9);
// array_buffer_length: 9
// console.log('array_buffer_length:', array_buffer.byteLength);
// array_buffer_offset: undefined
// console.log('array_buffer_offset:', array_buffer.byteOffset);
// 自定义的数组缓冲区
// const data_view = new DataView(array_buffer),
//     data_view_part = new DataView(array_buffer, 3, 5);
// console.log('data_view:', data_view.byteOffset, data_view.byteLength);
// console.log('data_view_part:', data_view_part.byteOffset, data_view_part.byteLength);
// data_view.setInt8(0, 1);
// data_view.setInt8(1, 2);
// data_view.setInt8(2, 3);
// data_view.setInt8(3, 4);
// data_view.setInt8(4, 5);
// data_view.setInt8(5, 6);
// data_view.setInt8(6, 7);
// data_view.setInt8(7, 8);
// data_view.setInt8(8, 9);
// data_view.setInt8(9, 10);
// console.log('data_view_get_int_8:', data_view.getInt8(0));
// console.log('data_view_get_int_8:', data_view.getInt8(1));
// console.log('data_view_get_int_8:', data_view.getInt8(2));
// console.log('data_view_get_int_8:', data_view.getInt8(3));
// console.log('data_view_get_int_8:', data_view.getInt8(4));
// console.log('data_view_get_int_8:', data_view.getInt8(5));
// console.log('data_view_get_int_8:', data_view.getInt8(6));
// console.log('data_view_get_int_8:', data_view.getInt8(7));
// console.log('data_view_get_int_8:', data_view.getInt8(8));
// BE 大端,2 ^ (8 * 1) * 1 + 2 ^ (8 * 0) * 2 = 258
// console.log('data_view_get_int_16:', data_view.getInt16(0));
// BE 大端,2 ^ (8 * 1) * 2 + 2 ^ (8 * 0) * 3 = 515
// console.log('data_view_get_int_16:', data_view.getInt16(1));
// BE 大端,2 ^ (8 * 1) * 3 + 2 ^ (8 * 0) * 4 = 772
// console.log('data_view_get_int_16:', data_view.getInt16(2));
// BE 大端,2 ^ (8 * 1) * 4 + 2 ^ (8 * 0) * 5 = 1029
// console.log('data_view_get_int_16:', data_view.getInt16(3));
// BE 大端,2 ^ (8 * 1) * 5 + 2 ^ (8 * 0) * 6 = 1286
// console.log('data_view_get_int_16:', data_view.getInt16(4));
// BE 大端,2 ^ (8 * 1) * 6 + 2 ^ (8 * 0) * 7 = 1543
// console.log('data_view_get_int_16:', data_view.getInt16(5));
// BE 大端,2 ^ (8 * 1) * 7 + 2 ^ (8 * 0) * 8 = 1800
// console.log('data_view_get_int_16:', data_view.getInt16(6));
// BE 大端,2 ^ (8 * 1) * 8 + 2 ^ (8 * 0) * 9 = 2057
// console.log('data_view_get_int_16:', data_view.getInt16(7));
// RangeError
// console.log('data_view_get_int_16:', data_view.getInt16(8));
// BE 大端,2 ^ (8 * 3) * 1 + 2 ^ (8 * 2) * 2 + 2 ^ (8 * 1) * 3 + 2 ^ (8 * 0) * 4 = 16909060
// console.log('data_view_get_int_32:', data_view.getInt32(0));
// BE 大端,2 ^ (8 * 3) * 2 + 2 ^ (8 * 2) * 3 + 2 ^ (8 * 1) * 4 + 2 ^ (8 * 0) * 5 = 33752069
// console.log('data_view_get_int_32:', data_view.getInt32(1));
// BE 大端,2 ^ (8 * 3) * 3 + 2 ^ (8 * 2) * 4 + 2 ^ (8 * 1) * 5 + 2 ^ (8 * 0) * 6 = 50595078
// console.log('data_view_get_int_32:', data_view.getInt32(2));
// BE 大端,2 ^ (8 * 3) * 4 + 2 ^ (8 * 2) * 5 + 2 ^ (8 * 1) * 6 + 2 ^ (8 * 0) * 7 = 67438087
// console.log('data_view_get_int_32:', data_view.getInt32(3));
// BE 大端,2 ^ (8 * 3) * 5 + 2 ^ (8 * 2) * 6 + 2 ^ (8 * 1) * 7 + 2 ^ (8 * 0) * 8 = 84281096
// console.log('data_view_get_int_32:', data_view.getInt32(4));
// BE 大端,2 ^ (8 * 3) * 6 + 2 ^ (8 * 2) * 7 + 2 ^ (8 * 1) * 8 + 2 ^ (8 * 0) * 9 = 101124105
// console.log('data_view_get_int_32:', data_view.getInt32(5));
// RangeError
// console.log('data_view_get_int_32:', data_view.getInt32(6));
// data_view_part.setInt8(0, 1);
// data_view_part.setInt8(1, 2);
// data_view_part.setInt8(2, 3);
// data_view_part.setInt8(3, 4);
// data_view_part.setInt8(4, 5);
// RangeError
// data_view_part.setInt8(5, 6);
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(0));
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(1));
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(2));
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(3));
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(4));
// RangeError
// console.log('data_view_part_get_int_8:', data_view_part.getInt8(5));
// BE 大端,2 ^ (8 * 1) * 1 + 2 ^ (8 * 0) * 2 = 258
// console.log('data_view_part_get_int_16:', data_view_part.getInt16(0));
// BE 大端,2 ^ (8 * 1) * 2 + 2 ^ (8 * 0) * 3 = 515
// console.log('data_view_part_get_int_16:', data_view_part.getInt16(1));
// BE 大端,2 ^ (8 * 1) * 3 + 2 ^ (8 * 0) * 4 = 772
// console.log('data_view_part_get_int_16:', data_view_part.getInt16(2));
// BE 大端,2 ^ (8 * 1) * 4 + 2 ^ (8 * 0) * 5 = 1029
// console.log('data_view_part_get_int_16:', data_view_part.getInt16(3));
// RangeError
// console.log('data_view_part_get_int_16:', data_view_part.getInt16(4));
// BE 大端,2 ^ (8 * 3) * 1 + 2 ^ (8 * 2) * 2 + 2 ^ (8 * 1) * 3 + 2 ^ (8 * 0) * 4 = 16909060
// console.log('data_view_part_get_int_32:', data_view_part.getInt32(0));
// BE 大端,2 ^ (8 * 3) * 2 + 2 ^ (8 * 2) * 3 + 2 ^ (8 * 1) * 4 + 2 ^ (8 * 0) * 5 = 33752069
// console.log('data_view_part_get_int_32:', data_view_part.getInt32(1));
// RangeError
// console.log('data_view_part_get_int_32:', data_view_part.getInt32(2));
// 通过定型数组构造声明来创建视图✅
// const arr_int_8 = new Int8Array([1, 99, 201, 51, 333, 248, 512, 257]);
// 8
// console.log(arr_int_8.length);
// 8
// console.log(arr_int_8.byteLength);
// 0
// console.log(arr_int_8.byteOffset);
// get_int_8_array: 1
// console.log('get_int_8_array:', arr_int_8[0]);
// get_int_8_array: 99
// console.log('get_int_8_array:', arr_int_8[1]);
// get_int_8_array: -55
// console.log('get_int_8_array:', arr_int_8[2]);
// get_int_8_array: 51
// console.log('get_int_8_array:', arr_int_8[3]);
// get_int_8_array: 77
// console.log('get_int_8_array:', arr_int_8[4]);
// get_int_8_array: -8
// console.log('get_int_8_array:', arr_int_8[5]);
// get_int_8_array: 0
// console.log('get_int_8_array:', arr_int_8[6]);
// get_int_8_array: 1
// console.log('get_int_8_array:', arr_int_8[7]);
// const arr_int_16 = new Int16Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555]);
// 13
// console.log(arr_int_16.length);
// 26
// console.log(arr_int_16.byteLength);
// 0
// console.log(arr_int_16.byteOffset);
// get_int_16_array: 1
// console.log('get_int_16_array:', arr_int_16[0]);
// get_int_16_array: 99
// console.log('get_int_16_array:', arr_int_16[1]);
// get_int_16_array: 201
// console.log('get_int_16_array:', arr_int_16[2]);
// get_int_16_array: 51
// console.log('get_int_16_array:', arr_int_16[3]);
// get_int_16_array: 333
// console.log('get_int_16_array:', arr_int_16[4]);
// get_int_16_array: 248
// console.log('get_int_16_array:', arr_int_16[5]);
// get_int_16_array: 512
// console.log('get_int_16_array:', arr_int_16[6]);
// get_int_16_array: 257
// console.log('get_int_16_array:', arr_int_16[7]);
// get_int_16_array: 1999
// console.log('get_int_16_array:', arr_int_16[8]);
// get_int_16_array: 32766
// console.log('get_int_16_array:', arr_int_16[9]);
// get_int_16_array: -32203
// console.log('get_int_16_array:', arr_int_16[10]);
// get_int_16_array: -32767
// console.log('get_int_16_array:', arr_int_16[11]);
// get_int_16_array: 19
// console.log('get_int_16_array:', arr_int_16[12]);
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// 15
// console.log(arr_int_32.length);
// 60
// console.log(arr_int_32.byteLength);
// 0
// console.log(arr_int_32.byteOffset);
// get_int_32_array: 1
// console.log('get_int_32_array:', arr_int_32[0]);
// get_int_32_array: 99
// console.log('get_int_32_array:', arr_int_32[1]);
// get_int_32_array: 201
// console.log('get_int_32_array:', arr_int_32[2]);
// get_int_32_array: 51
// console.log('get_int_32_array:', arr_int_32[3]);
// get_int_32_array: 333
// console.log('get_int_32_array:', arr_int_32[4]);
// get_int_32_array: 248
// console.log('get_int_32_array:', arr_int_32[5]);
// get_int_32_array: 512
// console.log('get_int_32_array:', arr_int_32[6]);
// get_int_32_array: 257
// console.log('get_int_32_array:', arr_int_32[7]);
// get_int_32_array: 1999
// console.log('get_int_32_array:', arr_int_32[8]);
// get_int_32_array: 32766
// console.log('get_int_32_array:', arr_int_32[9]);
// get_int_32_array: 33333
// console.log('get_int_32_array:', arr_int_32[10]);
// get_int_32_array: 32769
// console.log('get_int_32_array:', arr_int_32[11]);
// get_int_32_array: 65555
// console.log('get_int_32_array:', arr_int_32[12]);
// get_int_32_array: -2000000001
// console.log('get_int_32_array:', arr_int_32[13]);
// get_int_32_array: 2084966666
// console.log('get_int_32_array:', arr_int_32[14]);
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]),
// arr_int_16_part = new Int16Array(arr_int_32, 1, 10);
// 15
// console.log(arr_int_16_part.length);
// 30
// console.log(arr_int_16_part.byteLength);
// 0
// console.log(arr_int_16_part.byteOffset);
// get_int_16_array: 1
// console.log('get_int_16_array:', arr_int_16_part[0]);
// get_int_16_array: 99
// console.log('get_int_16_array:', arr_int_16_part[1]);
// get_int_16_array: 201
// console.log('get_int_16_array:', arr_int_16_part[2]);
// get_int_16_array: 51
// console.log('get_int_16_array:', arr_int_16_part[3]);
// get_int_16_array: 333
// console.log('get_int_16_array:', arr_int_16_part[4]);
// get_int_16_array: 248
// console.log('get_int_16_array:', arr_int_16_part[5]);
// get_int_16_array: 512
// console.log('get_int_16_array:', arr_int_16_part[6]);
// get_int_16_array: 257
// console.log('get_int_16_array:', arr_int_16_part[7]);
// get_int_16_array: 1999
// console.log('get_int_16_array:', arr_int_16_part[8]);
// get_int_16_array: 32766
// console.log('get_int_16_array:', arr_int_16_part[9]);
// get_int_16_array: -32203
// console.log('get_int_16_array:', arr_int_16_part[10]);
// get_int_16_array: -32767
// console.log('get_int_16_array:', arr_int_16_part[11]);
// get_int_16_array: 19
// console.log('get_int_16_array:', arr_int_16_part[12]);
// get_int_16_array: 27647
// console.log('get_int_16_array:', arr_int_16_part[13]);
// get_int_16_array: 4362
// console.log('get_int_16_array:', arr_int_16_part[14]);
// 通过已声明的定型数组构造对象来创建视图✅
// 对于以上三种声明方式,都可指定字节偏移量(byteOffset)以及字节长度(byteLength)✅
// 定型数组与普通数组的区别✅
// 相似点/共通点✅
// 拥有共同的方法✅
// map✅
// forEach✅
// keys✅
// values✅
// entries✅
// some✅
// every✅
// filter✅
// reduce✅
// reduceRight✅
// join✅
// reverse✅
// sort✅
// find✅
// findIndex✅
// fill✅
// copyWithin✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]),
// arr_int_16_part = new Int16Array(arr_int_32, 1, 10);
// const arr_int_16_part_map = arr_int_16_part.map(arr_int_16_part_item => arr_int_16_part_item + 20);
// get_int_16_array: 21
// console.log('get_int_16_array:', arr_int_16_part_map[0]);
// get_int_16_array: 119
// console.log('get_int_16_array:', arr_int_16_part_map[1]);
// get_int_16_array: 221
// console.log('get_int_16_array:', arr_int_16_part_map[2]);
// get_int_16_array: 71
// console.log('get_int_16_array:', arr_int_16_part_map[3]);
// get_int_16_array: 353
// console.log('get_int_16_array:', arr_int_16_part_map[4]);
// get_int_16_array: 268
// console.log('get_int_16_array:', arr_int_16_part_map[5]);
// get_int_16_array: 532
// console.log('get_int_16_array:', arr_int_16_part_map[6]);
// get_int_16_array: 277
// console.log('get_int_16_array:', arr_int_16_part_map[7]);
// get_int_16_array: 2019
// console.log('get_int_16_array:', arr_int_16_part_map[8]);
// get_int_16_array: -32750
// console.log('get_int_16_array:', arr_int_16_part_map[9]);
// get_int_16_array: -32183
// console.log('get_int_16_array:', arr_int_16_part_map[10]);
// get_int_16_array: -32747
// console.log('get_int_16_array:', arr_int_16_part_map[11]);
// get_int_16_array: 39
// console.log('get_int_16_array:', arr_int_16_part_map[12]);
// get_int_16_array: 27667
// console.log('get_int_16_array:', arr_int_16_part_map[13]);
// get_int_16_array: 4382
// console.log('get_int_16_array:', arr_int_16_part_map[14]);
// 同为可迭代对象,都/均可使用展开运算符✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// const arr_int_16 = new Int16Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// const arr_int_32_transform = [...arr_int_32];
// const arr_int_16_transform = [...arr_int_16];
// console.log('arr_int_32_transform:', arr_int_32_transform);
// console.log('arr_int_16_transform:', arr_int_16_transform);
// 不同点/不相似✅
// 定型数组缺失的方法✅
// push✅
// pop✅
// shift✅
// unshift✅
// concat✅
// splice✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]),
// TypeError
// arr_int_32_concat = arr_int_32.concat([88, 2184966666]);
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// TypeError
// console.log(arr_int_32.push(2184966666));
// 定型数组缺失的特性✅
// 定型数组内的数组元素不可扩展✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// arr_int_32[15] = 2184966888;
// get_int_32_array: undefined
// console.log('get_int_32_array:', arr_int_32[15]);
// Int32Array(15) [
//            1,          99,
//          201,          51,
//          333,         248,
//          512,         257,
//         1999,       32766,
//        33333,       32769,
//        65555, -2000000001,
//   2084966666
// ]
// console.log(arr_int_32);
// 定型数组长度不可配置、不可修改✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// arr_int_32.length = 12;
// get_int_16_array: 2084966666
// console.log('get_int_32_array:', arr_int_32[14]);
// Int32Array(15) [
//            1,          99,
//          201,          51,
//          333,         248,
//          512,         257,
//         1999,       32766,
//        33333,       32769,
//        65555, -2000000001,
//   2084966666
// ]
// console.log(arr_int_32);
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// Object.defineProperty(arr_int_32, 'length', {
//     writable: true,
//     value: 12,
// });
// arr_int_32.length = 12;
// get_int_16_array: 2084966666
// console.log('get_int_32_array:', arr_int_32[14]);
// Int32Array(15) [
//            1,          99,
//          201,          51,
//          333,         248,
//          512,         257,
//         1999,       32766,
//        33333,       32769,
//        65555, -2000000001,
//   2084966666
// ]
// console.log(arr_int_32);
// 定型数组特有的方法✅
// set-用于向指定的定型数组位置覆盖指定的定型数组范围内的数组元素✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// arr_int_32.set([2184966888, 65536], 5);
// Int32Array(15) [
//            1,          99,
//          201,          51,
//          333, -2110000408,
//        65536,         257,
//         1999,       32766,
//        33333,       32769,
//        65555, -2000000001,
//   2084966666
// ]
// console.log(arr_int_32);
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]);
// RangeError
// arr_int_32.set([2184966888, 65536], 14);
// arr_int_32.set([2184966888, 65536], 13);
// Int32Array(15) [
//            1,          99,
//          201,          51,
//          333,         248,
//          512,         257,
//         1999,       32766,
//        33333,       32769,
//        65555, -2110000408,
//        65536
// ]
// console.log(arr_int_32);
// subArray-与 slice 一致,用于截取定型数组✅
// const arr_int_32 = new Int32Array([1, 99, 201, 51, 333, 248, 512, 257, 1999, 32766, 33333, 32769, 65555, 2294967295, 2084966666]),
// arr_int_32_sub_array = arr_int_32.subarray(2, 14);
// Int32Array(12) [
//     201,          51,
//     333,         248,
//     512,         257,
//     1999,       32766,
//     33333,       32769,
//     65555, -2000000001
// ]
// console.log(arr_int_32_sub_array);
