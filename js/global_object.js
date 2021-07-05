var foo = "foobar";
foo === window.foo; // Возвращает: true



function greeting() {
    console.log("Hi!");
}

window.greeting(); // Тоже самое что и обычный вызов: greeting();


// Глобальная функция greeting была сохранена в объекте window,
// подобно следующему примеру:

// greeting: function greeting() {
//     console.log("Hi!");
// }