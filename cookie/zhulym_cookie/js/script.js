const regButton = document.querySelector('.reg_button');
const formWrapper = document.querySelector('.form-wrapper');
const myForm = document.forms['myForm'];
const formSubmit = document.querySelector('.form-submit');
const formItems = document.querySelectorAll('.form_item');
const modalWindow = document.querySelector('.modal_window');
const closeButton = document.querySelector('.close_button');
const userName = getCookie('name');
const options = { secure: true, 'max-age': 3600 * 24 * 15 };


regButton.addEventListener('click', () => {
    formWrapper.classList.toggle('form_open');
})

closeButton.addEventListener('click', closeModal);
closeButton.addEventListener('click', () => formWrapper.classList.toggle('form_open'));

// 1. Чекаем куки, если что-то есть предлагаем продолжить и восстанавливаем значения
document.addEventListener("DOMContentLoaded", checkData);

// 2. Сетим куки по блюру
formItems.forEach(item => {
    item.addEventListener('blur', () => {
        setCookie(item.name, item.value, options);
    })
});

// 3. Сетим куки если юзер ввёл что-то и закрыл страницу(ушёл)
window.addEventListener('unload', () => {
    if (myForm[0].value && myForm[1].value && myForm[2].value) {
        return;
    }
    formItems.forEach(item => {
        if (item.value) {
            setCookie(item.name, item.value, options);
        }
    });
})

// 4. Если все поля регистрации заполнены удаляем куки по сабмиту
formSubmit.addEventListener('click', delCookie);


function checkData() {
    if (userName) {
        modalWindow.classList.add('show__modal_window');
        document.querySelector('.modal_text').innerHTML = `Привет, ${userName.toUpperCase()}! Закончи регистрацию!`;
    }

    formItems.forEach(item => {
        if (getCookie(item.name)) {
            item.value = getCookie(item.name);
        }
    });
}

function delCookie() {
    formItems.forEach(item => {
        deleteCookie(item.name);
    });
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function closeModal() {
    modalWindow.classList.remove('show__modal_window');
}







