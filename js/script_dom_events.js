// //Напишите код, как получить…элемент <div>?   <ul>?  второй <li> (с именем Пит)?
// //for div
// console.log(document.body.children[0]);
// console.log(document.body.firstElementChild);
// //или(первый узел пробел, поэтому выбираем второй)
// console.log(document.body.childNodes[1]);


// //for ul
// console.log(document.body.children[1]);
// console.log(document.body.childNodes[3]);

// //for li
// console.log(document.body.children[1].children[1]);

// //=============================================================================

// //Повесить несколько обработчиков на элемент

// let elem = document.getElementById('elem');

// function handler1() {
//     alert('Hello again');
// };
// function handler2() {
//     alert('Hello again again');

// };
// function handler3(event) {
//     alert(event.type + event.currentTarget);
//     alert(event.clientX + ':' + event.clientY);


// };

// elem.onclick = () => alert('Hello', 'handler1()');

// elem.addEventListener('click', handler1);
// elem.addEventListener('click', handler2);
// elem.addEventListener('click', handler3);


// //===============================================================================


// //Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// let deleteContent = document.getElementById('text');
// let hideText = document.getElementById('hide-text');

// // hideText.addEventListener('click', () => deleteContent.remove());
// //или
// // hideText.onclick = () => deleteContent.hidden = true;
// //или
// hideText.addEventListener('click', () => deleteContent.style.display = 'none');
// //===============================================================================
// //Создайте кнопку, которая будет скрывать себя по нажатию.
// let deleteButt = document.getElementById('hide-yourself');

// deleteButt.onclick = () => deleteButt.hidden = true;


// //===============================================================================
// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');


// titleElem.onclick = function () {
//     menuElem.classList.toggle('open');
// }



// //===============================================================================


// //1, Cделать по клику замену цвета элементу 2, Через вопрос перейти или не перейти по ссылке

// let button = document.querySelector('#changeColor');
// let box = document.querySelector('.box');

// function changeColor() {
//     box.classList.toggle('colorred');

// }

// button.addEventListener('click', changeColor);

// let anchor = document.querySelector('a');

// // //вариант №1 вопрос при переходе(из on-обработчика вернуть true или false)
// // anchor.onclick = () => { return confirm('Вы уверены, что хотите покинуть сайт?') };

// //вариант №2 event.preventDefault()

// function noAnchor(event) {
//     let question = confirm('Вы уверены, что хотите покинуть сайт?');
//     if (!question) {
//         event.preventDefault();
//     }

// }
// anchor.onclick = noAnchor;

//===========================================================================

