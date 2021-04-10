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


//================================ 'submit' 'change' ===========================================

const submitEventForm = document.querySelector('#submit_event');
const submitEventInput = document.querySelector('.submit_event_input');
const submitError = document.querySelector('.error');

submitEventForm.addEventListener('submit', function (event) {
    if (submitEventInput.value == "") {
        event.preventDefault();
        submitError.style.color = 'red';
        submitError.innerHTML = 'Поле не может быть пустым';
    }

})

submitEventForm.addEventListener('change', function () {     // change событие срабатывает, в момент изменения инпута или текстареа или т.п
    submitError.innerHTML = ''; // убираем ошибку
})
