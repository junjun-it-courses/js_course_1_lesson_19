// Global scope
// https://developer.mozilla.org/ru/docs/Glossary/Global_object
// https://www.w3schools.com/js/js_scope.asp

// var foo = "foobar";
// foo === window.foo; // Возвращает: true

// function greeting() {
//     console.log("Hi!");
// }


// Functional scope / Local Scope

// function myFunction() {
//     let carName = "Volvo";
//     var ExVar = 'string';
//     const ExConstVar = 'some const variable'
//     // code here CAN use carName
// }
//
// console.log(carName, ExVar, ExConstVar)


// Block Scope / ES6 JS Standart
// Переменные, объявленные с помощью ключевого слова var,
// НЕ могут иметь область видимости блока.

// Блочная видимость подразумевает объявление любых переменных
// (let, const) в {} - Функции, условия, Циклы ...

// {
//     let x = 2;
//     var y = 3;
// }
//
// console.log(x, y)