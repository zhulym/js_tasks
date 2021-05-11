"use strict"

document.addEventListener('DomContentLoader', function () {
    const form = document.forms('myForm');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {

    }


})