// lesson 1

// #1.1 Привет, мир!
// #1.2 Внешние скрипты, порядок исполнения

// alert('Я - JavaScript!');

// #1.3 Структура кода

// #1.4 Современный стандарт, "use strict"

// #1.5 Переменные

// var admin;
// var name;

// name = 'Василий';
// admin = name;

// alert(admin);

// var planet = "Земля";
// var UserName = "Петя";

// Шесть типов данных, typeof

// alert(1 / 0); //  NaN, ошибка
// 
// var string = "Мама мыла раму";
// string = 'Одиночные кавички тоже пойдут'

// typeof

// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof true // "boolean"
// typeof 'foo' // "string"
// typeof {} // "object" (1)
// typeof function() // "fintion" (2)
// {}

// Основные операторы

// var a = "моя" + "строка";
// 
// alert(a); 
// моя строка

// var a = 2;
// var x = 1 + (a *= 2);

// Операторы сравнения и логические значения

// alert( undefined > 0); // false (1)
// alert ( undefined < 0 ); // false (2)
// alert ( undefined == 0); // false (3)

// Побитовые операторы

// Взаимодействие с пользователем: alert, prompt, confir

// var userName = prompt('User Name', 'Name');

// alert(userName);


// Условные операторы

// let year;

// if( year != 2011 ){
//   alert('А вот и неправильно!')
// }

// year = prompt("yers ES6 ?", '');
// year != 2011 ? alert('А вот и неправильно!') : alert("правильно"); 

// var nameJavaScript = prompt( "Каково 'официальое' название JavaScript", "");

// if( nameJavaScript == 'EcmaScript' ) {
//   alert("Верно");
// } else {
//   alert("Не знаете? EcmaScript");
// }

// var value = prompt("Какое значение?", "");
// var message;

// if( value > 0){
//   message = 1;
// } else if(value < 0){
//   message = -1;
// } else {
//   message = 0;
// }
// alert(message);

// var userName = prompt("Кто пришел?", "");
// var password = prompt("Пароль", "");

// if( userName == "Админ") {
//   if( password == "Черный Властелин" ) {
//     alert("Welcome!");
//   } else if(password === null) {
//     alert("Вход отменен");
//   } else {
//     alert("fail password!")
//   }
// } else if ( userName === null ) {
//   alert("Вход отменен");
// } else {
//   alert("Я вас не знаю");
// }

// userName != "Админ" ? 

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = a + b < 4 ? result = "Мало" : result = "Много";

// var message;

// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// message = login == ("Вася") ? message = "Привет" :
//  login == "Директор" ? message = "Здравствуйте":
//  login == '' ? message = "Нет логина":
//  message = '';