// 排序
// 冒泡排序
// function bubble_sort(bubble_arr) {
//     const result_arr = [...bubble_arr],
//         {length} = result_arr;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             if (result_arr[j + 1] <= result_arr[j]) {
//                 const temp = result_arr[j + 1];
//                 result_arr[j + 1] = result_arr[j];
//                 result_arr[j] = temp;
//             }
//         }
//     }
//     return result_arr;
// }
// const bubble_arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// const bubble_arr_result = bubble_sort(bubble_arr);
// console.log(bubble_arr_result);
// 插入排序
// function insert_sort(insert_arr) {
//     const result_arr = [...insert_arr],
//         {length} = result_arr;
//     for (let i = 0; i < length; i++) {
//         let j = i;
//         while ((result_arr[j - 1] => result_arr[j]) && j > 0) {
//             const temp = result_arr[j - 1];
//             result_arr[j - 1] = result_arr[j];
//             result_arr[j] = temp;
//             j--;
//         }
//     }
//     return result_arr;
// }
// const insert_arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// const insert_arr_result = insert_sort(insert_arr);
// console.log(insert_arr_result);
// 归并排序
// function merge(a, b) {
//     const {length: a_length} = a,
//         {length: b_length} = b,
//         arr = []
//     let i = 0,
//         j = 0;
//     while (i < a_length && j < b_length) {
//         if (a[i] <= b[j]) {
//             arr.push(a[i++]);
//         } else {
//             arr.push(b[j++]);
//         }
//     }
//     while (j === b_length && i < a_length) {
//         arr.push(a[i++]);
//     }
//     while (i === a_length && j < b_length) {
//         arr.push(b[j++]);
//     }
//     return arr;
// }
// function merge_sort(merge_arr) {
//     const result_arr = [...merge_arr],
//         {length} = result_arr;
//     if (length <= 1) return result_arr;
//     const middle = Math.floor(length / 2),
//         left = merge_arr.slice(0, middle),
//         right = merge_arr.slice(middle);
//     return merge(merge_sort(left), merge_sort(right));
// }
// const merge_arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// const merge_arr_result = merge_sort(merge_arr);
// console.log(merge_arr_result);
// 快速排序
// function partition(partition_arr, left, right) {
//     let i = left,
//         j = right,
//         x = partition_arr[i];
//     while (i < j) {
//         while (i < j && partition_arr[j] > x) {
//             j--;
//         }
//         if (i < j) {
//             partition_arr[i] = partition_arr[j];
//         }
//         while (i < j && partition_arr[i] <= x) {
//             i++;
//         }
//         if (i < j) {
//             partition_arr[j] = partition_arr[i];
//         }
//     }
//     partition_arr[i] = x;
//     return i;
// }
// function quick_sort(quick_sort_arr, left = 0, right = quick_sort_arr.length - 1) {
//     let start = left,
//         end = right;
//     if (start < end) {
//         let index = partition(quick_sort_arr, start, end);
//         quick_sort(quick_sort_arr, start, index - 1);
//         quick_sort(quick_sort_arr, index + 1, end);
//     }
//     return quick_sort_arr;
// }
// const quick_arr = [22, 2, 1, 36, 16, 24, 64, 32, 66, 100, 22, 16, 55, 64, 44, 3, 24, 22, 100, 33, 1];
// const quick_arr_result = quick_sort(quick_arr);
// console.log(quick_arr_result);
// 获取最长非重复字符子串
// function getLongStr(str) {
//     let arr = [], max = 0;
//     for (let i = 0; i < str.length; i++) {
//         const index = arr.indexOf(str[i]);
//         if (index !== -1) {
//             arr.splice(0, index + 1);
//         }
//         arr.push(str.charAt(i));
//         max = Math.max(arr.length, max);
//     }
//     return max;
// }
// const str = 'aaaaabcdefghcbbcbedeee';
// console.log(getLongStr(str));
