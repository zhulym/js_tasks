// Наверстать структуру меню через JS-DOM
const body = document.querySelector('body');
const header = document.createElement('header');
const headerLogo = document.createElement('div');
const headerMenu = document.createElement('div');
const menu = document.createElement('ul');

header.classList.add('header');
headerLogo.classList.add('header__logo');
headerMenu.classList.add('header__menu');
menu.classList.add('header__menu-container');

const menuList = ["Главная", "О нас", "Отзывы", "Контакты", "Общие вопросы"];

menuList.forEach((item) => {
    let listItem = document.createElement('li');
    let listAnchor = document.createElement('a');
    listItem.classList.add('header__menu_item');
    listAnchor.classList.add('header__menu_item-link');
    listAnchor.setAttribute('href', '#');
    listAnchor.innerHTML = item;
    listItem.append(listAnchor);
    menu.append(listItem);
});

headerMenu.append(menu);
headerLogo.innerHTML = "LOGO";
header.append(headerLogo, headerMenu);
body.append(header);



// Добавить на страницу 3 тега p и сделать чтоб второй пропал через 2сек.

let contentContainer = document.createElement('div');
let content = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'];

content.forEach((item) => {
    let contentItem = document.createElement('p');
    contentItem.innerHTML = item;
    contentContainer.append(contentItem);
    body.append(contentContainer);
});

setTimeout(() => contentContainer.children[1].remove(), 2000);
let extraText = document.querySelector('p');
extraText.insertAdjacentHTML("afterend", "<p>Next text</>");



// //Написать код, как получить…элемент <div>?   <ul>?  второй <li> (с именем Пит)?

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




// /*===================================================================================================================*/
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



// /*===================================================================================================================*/
// //Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// let deleteContent = document.getElementById('text');
// let hideText = document.getElementById('hide-text');

// // hideText.addEventListener('click', () => deleteContent.remove());
// //или
// // hideText.onclick = () => deleteContent.hidden = true;
// //или
// hideText.addEventListener('click', () => deleteContent.style.display = 'none');



// /*===================================================================================================================*/
// //Создайте кнопку, которая будет скрывать себя по нажатию.
// let deleteButt = document.getElementById('hide-yourself');

// deleteButt.onclick = () => deleteButt.hidden = true;




// /*===================================================================================================================*/
// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');


// titleElem.onclick = function () {
//     menuElem.classList.toggle('open');
// }



// /*===================================================================================================================*/
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




// //================================= 'contextmenu' ==========================================
// // вывести в консоль событие contextmenu по клику на странице, потом запретить показ меню и вывести в консоль координаты

// document.addEventListener('contextmenu', function (event) {
//     console.log('context menu!!!');
//     event.preventDefault(); // отключение (событие срабатывает, но меню не показывается)
//     console.log(event.clientX, event.clientY);
// });



// //================================= 'copy' ==========================================
// // Задача сделать чтобы при копировании текста с сайта, при вставке в инпут или другое место на другом сайте
// // также вставлялся дополнительный текст (например адрес исходного сайта)

// document.addEventListener('copy', function (event) {    // copy событие на выделение
//     const copyText = document.getSelection().toString();  // getSelection() взять выделение и приводим к строке
//     event.clipboardData.setData('text/plain', copyText + " Этот текст скопирован с сайта: js.ru");
//     // clipboardData - обратиться к буферу обмена, setData - установить новые данные, 'text/plain' - указываем тип (простой текст) 
//     event.preventDefault(); // запрет на обычное копирование (так как мы сделали новую логику)
// })




// //================================= 'cut' ==========================================
// // Задача сделать чтобы после вырезании текста со страницы он вставлялся в Апперкейсе в другое место
// document.addEventListener('cut', function (event) {
//     const cuttinText = document.getSelection();
//     event.clipboardData.setData('text/plain', cuttinText.toString().toUpperCase());
//     event.preventDefault();
// })



// //================================ 'resize' ===========================================
// // Вывести в консоль размеры изменённого окна браузера
// window.addEventListener('resize', function (event) {
//     console.log(event.target.innerWidth, event.target.innerHeight);
// })



// //================================ 'scroll' ===========================================
// // вывести в консоль координату прокрутки страницы(координата от верхнего края)

// window.addEventListener('scroll', function (event) {
//     console.log(window.pageYOffset);
// })




// //================================ 'focus'  'blur' ===========================================
// // вывести в консоль событие focus и blur (происходит в момент когда юзер убрал фокус с инпута или textarea и т.д)
// // применить стили к инпуту и удалить стиль
// // focus - в момент входа в поле ввода

// const inputBlur = document.querySelector('#checkBlur');

// inputBlur.addEventListener('focus', function (event) {
//     console.log('Фокус и произошло событие')
//     const stylesForInput = "outline: 5px green; background: yellow;";
//     event.target.style.cssText = stylesForInput;
// })

// inputBlur.addEventListener('blur', function (event) {
//     console.log('Фокус убрался, и произошло событие');
//     event.target.style.background = "white";
//     event.target.style.removeProperty('outline');
// })



// //================================ 'reset' ===========================================
// // Есть форма, добавить инпут и две кнопки отправить-очистить, с событием reset на вторую кнопку

// const formEl = document.querySelector('form');

// formEl.addEventListener('reset', function (event) {
//     if (!confirm('Вы уверены что хотите очистить поле?')) {
//         event.preventDefault();
//     }
// });


// //================================ 'submit' 'change' ===========================================
// const submitEventForm = document.querySelector('#submit_event');
// const submitEventInput = document.querySelector('.submit_event_input');
// const submitError = document.querySelector('.error');

// submitEventForm.addEventListener('submit', function (event) {
//     if (submitEventInput.value == "") {
//         event.preventDefault();
//         submitError.style.color = 'red';
//         submitError.innerHTML = 'Поле не может быть пустым';
//     }

// })

// submitEventForm.addEventListener('change', function () {     // change событие срабатывает, в момент изменения инпута или текстареа или т.п
//     submitError.innerHTML = ''; // убираем ошибку
// })



// /*===================================================================================================================*/
// //Задача. Изменение текста в инпуте
// //Задача. Повторите поведение кнопки по нажатию на нее (она меняет текст в инпуте):


// let submitEvent = document.querySelector('.submit_event_button');
// let submitEventInput = document.querySelector('.submit_event_input');

// submitEvent.onclick = changeValue;
// function changeValue() {
//     submitEventInput.value = '???';
// }



// // ================================ HW DOM 1 ===========================================//
// // При клике на элемент его цыет долже меняться

// let containerBox = document.querySelector('.contForHw');
// let elementBox = document.querySelectorAll('.elementClick');


// containerBox.addEventListener('click', (event) => {
//     elementBox.forEach((item) => {
//         item.classList.remove('color_for_box');
//     })
//     event.target.classList.add('color_for_box');
// });




// // ================================ HW DOM 2 ===========================================//
// // Сделать несколько карточек товара c кнопкой (подробнее) подробнее, по клику вместо картинки появляется описание
// // текст кнопки меняется на (назад) 

//Вариан №1
// let buttonElem = document.querySelectorAll('.button-item');
// let descriptionCard = document.querySelectorAll('.item-descript');
// let imageCard = document.querySelectorAll('.item-imgage');
// let container = document.querySelector('container-cards');

// buttonElem.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         if (event.target.innerText === 'Подробнее') {
//             event.target.parentNode.children[2].style.display = 'none';
//             event.target.parentNode.children[1].style.display = 'block';
//             event.target.innerText = 'Назад';
//         } else {
//             event.target.parentNode.children[2].style.display = 'block';
//             event.target.parentNode.children[1].style.display = 'none';
//             event.target.innerText = 'Подробнее';
//         }
//     })
// })




// /*================================================= HW DOM 3 ========================================================*/
// // Сделайте кнопку и модальное (появляющееся и исчезающее) окно, по клику окно появляется и исчезает

// let container = document.querySelector('.cont_for_modal');
// let modalText = document.querySelector('.modal_text');
// let button = document.querySelector('.show_modal');
// let closeButton = document.querySelector('.close_modal');

// button.addEventListener('click', () => {
//     container.classList.add('animate__animated', 'animate__fadeInLeft');
//     container.classList.remove('animate__fadeOutRight', 'hidden');
// })

// closeButton.addEventListener('click', () => {
//     container.classList.remove('animate__fadeInLeft');
//     container.classList.add('animate__fadeOutRight');
//     setTimeout(() => {
//         container.classList.add('hidden');
//     }, 1000)
// })


/*================================================= HW DOM 5 ======================================================*/


