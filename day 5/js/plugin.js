// Конструкция switch

// Синтаксис
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// задачи 
// #1
// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }


// var value = 'IE';
// if( value == 'IE' ) {
//   alert( 'О, да у вас IE!' );
// } else if ( value == 'Chrome' || value == 'Firefox' || value == 'Safari' || value == 'Opera' ) {
//   alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
//   alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// #2

// var a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch(a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert(2,3);
//     break;
// }


/*
getAge(..)          // get, "получает" возраст
calcD(..)           // calc, "вычисляет" дискриминант
createForm(..)      // create, "создает" форму
checkPermission(..) // check, "проверяет" разрешение, возвращает true/false
*/

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// // function

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function num(a, b) {
//   // return ( a > b ) ? b : a;  
//   if ( a > b) {
//     return b;
//   } else{
//     return a;
//   }
// }
// num(2, 4);

function row (x, n) {
  var result = x;
  for ( var i = 1; i < n; i++ ) {
    result *= x;
  }

  return result;
}

var x = prompt('x?', '');
var n = prompt('n?', '');

if ( n <= 1 ) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1');
} else {
  alert(row(x, n));
}




