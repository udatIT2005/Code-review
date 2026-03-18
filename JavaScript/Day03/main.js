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
// const arr = [1, 2, 3, 4];
// arr.slice(1, 3);
// console.log(arr);
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
// join gộp mảng thành chuỗi
// flat : làm phảng mảng - có thể truyền infinity : dương vô cùng
// includes : kiểm tra phần tử có ở mảng hay không trả về giá trị boolean
// const array = [1, 2, 4, , 5, 6, 7];

// console.log(array.includes("hihi"));
// const users = [
//   { name: "An", age: 18 },
//   { name: "Bình", age: 22 },
//   { name: "Cường", age: 16 },
// ];
// users.forEach((item, index, arr) => {
//   console.log("Tên :", item.name, "tuổi : ", item.age);
// });

// các phương thức cơ bản của mảng
/**
 * push : thêm phần tử vào cuối mảng
 * pop : xóa phần tử vào cuối mảng
 * unshif : thêm phần tử vào đầu mảng
 * shifft : xóa phần tử đầu mảng
 * concat : nối nhiều mảng thành 1 mảng
 * flat : làm phảng mảng
 * includes : tìm phần tử thỏa mãn đk trong mảng trả về giá trị boolean
 * reverse : đảo ngược mảng
 * toReverse : đảo ngược mảng nhưng không thay đổi mảng gốc
 * toString L chuyển mảng thành chuỗi
 * join : gộp mảng thành chuỗi
 * indexof : tìm index đầu tiên thỏa mãn điều kiện
 * lastindexof : tìm index cuối thỏa mãn điều kiện
 * slice : cắt mảng
 * splice : thêm sửa xóa mảng
 * // Phương thức duyệt qua từng phần tử của mảng callback
 * foreach : là phuowng thức của mảng dùng để duyệt qua từng phần tử của mảng thực thi một hành động của mỗi phần tử và không có giá trị trả về
 * input : item , index, arr
 * output : không có giá trị chả về chari
 * map : là phương thức của mảng dùng để ánh xạ mảng duyệt qua từng phần tử của mảng và trả về 1 mảng mới sau khi được biến đổi
 * find : là phương thuwscc của mảng dùng để tìm kiếm phần tử đầu tiên thỏa mãn điều kiện
 * input : item , index, arr
 * output : item/ underfind
 * findlast : là phương thức của mảng dùng để tìm kiếm phần tử cuối cùng thỏa mãn điều kiện
 * findindex : là phương thức của mảng dùng để tìm kiếm index đầu tiên thoải mãn
 * input: item , index, arr
 * output : boolean/ -1
 * filter : là phương thức của mảng dùng để lọc các phần tử thỏa mãn điều kiện
 * some : là phương thức của mảng chỉ cần 1 phần thỏa mãn điều kiện
 * every : là phương thức của mảng cần tất cả các điều kiện thỏa mãn
 * sort : đảo ngược mảng
 * input : (a, b) => (a-b)
 * output : trả về 1 mảng mới thay đổi mảng gốc
 * tosort: đảo ngược mảng
 * input : (a,b) => (a-b)
 * ouput : trả về 1 mảng mới nhưng không thay đổi mảng gốc
 * reduce : là phương thức của mảng dùng để rút gọn tất cả các phần tử trong mảng trả về 1 biến tích lũy (accunulator
 * input : acc, cur, index, arr
 * output : acc
 * initivalValue : giá trị khởi tạp
 */

const arr = [1, 2, 3, 4, 5];
arr.reduce((acc, cur, index, arr) => {
  console.log(acc);
  console.log(cur);
  console.log(index);
  console.log(arr);

  return acc;
}, 0);
