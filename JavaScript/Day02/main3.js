/**
 * 🟢 Level 1 – Cơ bản
Bài 1: In số chẵn từ 1 → n

Input: n = 10
Output: 2 4 6 8 10

Bài 2: Tính tổng số chia hết cho 3

Input: n = 10
Output: 3 + 6 + 9 = 18

Bài 3: Đếm số lượng số lẻ

Input: n = 7
Output: 4 (1,3,5,7)

Bài 4: Kiểm tra số nguyên tố

Input: n = 7
Output: true

🟡 Level 2 – Tư duy hơn chút
Bài 5: Đảo ngược số

Input: 1234
Output: 4321

Bài 6: Tính giai thừa

Input: n = 5
Output: 120

Bài 7: Tìm số lớn nhất trong dãy

Input: [3, 7, 2, 9, 5]
Output: 9


Bài 8: Kiểm tra số đối xứng

Input: 121
Output: true

🔴 Level 3 – Hack não nhẹ
Bài 9: FizzBuzz (kinh điển)

In từ 1 → n:

chia hết 3 → "Fizz"

chia hết 5 → "Buzz"

chia hết cả 2 → "FizzBuzz"

Bài 10: Tìm số hoàn hảo

(Số có tổng ước = chính nó, trừ nó ra)

Input: 6
Output: true
(vì 1 + 2 + 3 = 6)

Bài 11: In tam giác sao
*
**
***
****
Bài 12: Tìm số Fibonacci thứ n

Input: n = 7
Output: 13

🔥 Level 4 – Khá căng
Bài 13: Tìm số xuất hiện nhiều nhất

Input: [1,2,2,3,3,3,4]
Output: 3

Bài 14: Tìm cặp số có tổng = target

Input: [2, 7, 11, 15], target = 9
Output: [2,7]

Bài 15: Đếm số chữ số của 1 số

Input: 12345
Output: 5

⚡ Bonus (đúng kiểu mẹo logic)
Bài 16: Tìm số bị thiếu

Input: [1,2,3,5]
Output: 4
 */

// let n = parseInt(prompt("Vui lòng nhập số nguyên dương"));
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// Xong bài 1
// Bài 2: Tính tổng số chia hết cho 3

// Input: n = 10
// Output: 3 + 6 + 9 = 18

// let n = parseInt(prompt("Vui lòng nhập số nguyên dương"));
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0) {
//     count += i;
//   }
// }
// console.log(count);

// Bài 3: Đếm số lượng số lẻ

// Input: n = 7
// Output: 4 (1,3,5,7)

// let n = parseInt(prompt("Vui lòng nhập số nguyên dương"));
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     sum++;
//   }
// }
// console.log("Tổng sum ", sum);

// Bài 4: Kiểm tra số nguyên tố

// Input: n = 7
// Output: true
// Bài 7: Tìm số lớn nhất trong dãy

// Input: [3, 7, 2, 9, 5]
// Output: 9
// let arr = [3, 7, 5, 9, 10];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// Bài 11: In tam giác sao
// *
// **
// ***
// ****
let n = 5;
for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

const hihi = "àiaskhfafhashfah";
console.log(hihi.length);

let arr = [3, 7, 5, 9, 10];
console.log(arr.length);
console.log(typeof hihi);
