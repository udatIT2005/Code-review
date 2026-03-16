/**
 *
 * Được hoisted nhưng truy cập trước biến thì sẽ thành underfind
 * Var : Có thể khai báo lại tên biến
 * Có thể gán lại giá trị cho biến
 * Phạm vio là global scope function scope
 *
 * Được hoisted nhưng truy cập trước biến thì sẽ và cùng bộ nhớ chết timezone
 * Let : Có thể  khai báo lại tên biến
 * không thể gán lại giá trị cho biến
 * Phạm vi là block scope
 *
 * Được hoisted nhưng cũng giống let bị vào vùng bộ nhớ chết timezone
 * Const : Không thể khai báo lại tên biến
 * Không thể gán lại giá trị cho biến
 * Phạm vi là global scope
 */
// console.log(b);
// console.log(a);
// var b = 10;
// let a = 10;
/**
 * Kiểu dữ liệu nguyên thủy (Primitive)
 * Number
 * Bollean
 * String 
 * Symbol
 * Bing Int 
 * Underfined
 * Null
 * Kiểu dữ liệu tham chiếu (Reference )
 * Object 
 * Array 
 * Function 
 * Date
 * * Cách kiểm tra kiểu dữ liệu typeof
 * Ép kiểu tự động 
 * Khi có phép tính cộng 1 số với chuỗi thì sẽ ép về chuỗi
 * Khi có phép tính số học bình thường thì sẽ về toán học 
 * ép kiểu chủ động
 * sẽ dùng Number , string ,boolean , parseint( ép về số nguyên) parseFloat (  ép về số thực )
 * Giá trị falsy : Null . underfined 0 flase -0 "" NaN
 * Còn lại là giá trị truethy 
 */

