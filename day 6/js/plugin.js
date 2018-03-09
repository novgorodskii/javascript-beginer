// Function Expression
// var f = function() { }

// Function Declaration
// function f() {} 

// Рекурсия, стек

// 1 pow(2, 4) = 2 * pow(2, 3)
// 2 pow(2, 3) = 2 * pow(2, 2)
// 3 pow(2, 2) = 2 * pow(2, 1)
// 4 pow(2, 1) = 2

// function sumTo(n) { // параметр функции  = n
//   var sum = 0; // создаем переменую sum и присваеваем ей 0
//   for ( var i = 1; i <= n; i++ ) { // i = 1; цикл РАБОТАЕТ пока i не будет <= n; i++ добавяляем на каждой итерации 1 
//   sum += i; // добавляем после каждой итерации к сумме значение итератора и саму сумму
//   }
//   return sum // получаем сумму
// }
// alert(sumTo(100)); // задаем аргумент функции 

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// alert( sumTo(100) );

$('.close, .submit').click(function(){
  if((document.contact_form.user-name.value != "") || (document.contact_form.phone.value != "")) { 
  $('.qwest').removeClass('active');
$('.qwest[data-index="0"]').addClass('active');
arr = [];
answer = 0;
if (answer == 0) {$('.wrap-footer').show('fast');}
$('.num-progress').css({width: '15%'})} else {alert('fuck') };
});