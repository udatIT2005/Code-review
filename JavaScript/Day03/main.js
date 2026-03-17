/**
 * Array (mảng) là gì ?
 * - Là tập hợp các tập giá trị , lưu trong 1 biến duy nhất
 * Thay vì khai báo nhiều biến riêng lẻ thì ta khai báo luôn 1 biến
 */
// 1 . Tính tổng mảng
// const arr = [1, 2, 3, 4];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   count += arr[i];
// }
// console.log(count);

//output : 10

// const arr = [1, 2, 3];
// const arr2 = [4, 5];
// arr.concat(arr2);

// const result = arr.concat(arr2);
// console.log(result);
const arr = [1, 2, 3, 4];
arr.slice(1, 3);
console.log(arr);
// arr.splice(0, 1, 7, 8);
// console.log(arr);

// Thêm / xóa
// push thêm phần tử vào cuối mảng
// pop xóa phần tử ở cuối mảng
// shift xóa phần tử đầu mảng
// unshift thêm phần tử ở đầu mảng
// concat nối nhiều mảng thành 1 mảng và trả về mảng mới không thay đổi mảng gốc
// slice cắt phần tử trong mảng và trả về 1 mảng mới không thay đổi mảng gốc
// splice cắt xóa thêm phần tử vào mảng và thay đổi mảng gốc
// indexOf tìm phần tử có index ở đầu mảng
// lastIndexOf tìm phần tử có index ở cuối mảng
// Reverse : Đảo ngược mảng nhưng không thay đổi mảng gốc
// toReverse : Đảo ngược mảng nhưng thay đổi mảng gốc
// toString đổi mảng thành chuỗi
// includes : kiểm tra phần tử có ở mảng hay không trả về giá trị boolean
const array = [1, 2, 4, , 5, 6, 7];

console.log(array.includes("hihi"));
