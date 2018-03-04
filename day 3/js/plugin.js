// Преобразование типов для примитивов

// #1 Строковое преобразование

// alert( true + "test" ); // "truetest"
// alert( "123" + undefined ); // "123undefined"

// // #2 Численное преобразование

// var a = +"123"; // 123
// var a = Number("123"); // 123 также
// var a = Number(undefined); // NaN
// var a = Number(null); // 0
// var a = Number(true); // 1
// var a = Number(false); // 0
// var a = Number(' '); // 0// 

// // #3 Логическое преобразование

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45

// "4" - 2 // 2

// "4px" - 2 // 2px

// 7 / 0 // infinity

// "  -9\n" + 5 // -4
// "  -9\n" - 5 // -14
// 5 && 2 // true 2

// 2 && 5 // 5 true

// 5 || 0 //  5 true

// 0 || 5 // 5 true
// null + 1 // 1
// undefined + 1 // NaN
// null == "\n0\n" // false
// +null == +"\n0\n" // 0


// Циклы while, for

// Цикл while

var i;

// while( i < 3 ) {
//   alert(i);
//   i++;
// }
// while(i) {
//   alert(i);
//   i--
// }

// цикл  for

// for (начало, условие, шаг) {
//   // ... тело цыкла ...
// }

// for ( i = 0; i < 3; i++) {
//   alert(i); 
//}

//  var sum = 0;
//  while (true) {
//   var value = +prompt("Введите число", '')
//   if (!value) break; 

//   sum += value;
// }
// alert("Сумма: " + sum);

// for (var i = 0; i < 10; i++) {

//   if (i % 2) {
//     alert( i );
//   }
// }
// var i = 0;
// while (++i < 5) alert( i );


// Сначала выводи в ALERT(VALUE) А ПОТОМ ДОБАВЛЯЕТ.

// for (var i = 0; i < 5; i++) {
//   alert(i);
// }
// for (var i = 0; i < 5; ++i) {
//   alert(i);
// }

// for( let i = 2 ; i <= 10; i++) {
//   if(i % 2 == 0) {
//     alert(i);
//   }
// }
// Чётность проверяется по остатку при делении на 2,
//  используя оператор «деление с остатком» %: i % 2

// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }
// var i = 0;
// while( i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

var num = +prompt("ввести число, большее 100", '');

while(true){
  if(num <= 100) break;
};
