let form = document.forms[0];
form.addEventListener('submit', function (event, form) {
    if (!name.validate() || !phone.validate() || !passwords.validate()) {
        event.preventDefault();
    }
})

let validators = {
    validateLength(min, max, value) {
        return value.length >= min && value.length <= max;
    },

    validateForNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
}

let name = {
    name: 'Name',
    rules: {
        min: 1,
        max: 50
    },

    getField() {
        return document.getElementById('name');
    },

    getFieldValue() {
        return this.getField().value;
    },

    validate() {
        let valid = validators.validateLength(this.rules.min, this.rules.max, this.getFieldValue());
        if (!valid) {
            this.showError();
            return false;
        }
        this.setValid();
        return true
    },

    showError() {
        this.getField().classList.add('is-invalid');
        document.querySelector('.nameError').innerHTML = `Длина поля ${this.name} должна быть больше ${this.rules.min} и меньше ${this.rules.max}`;
    },

    setValid() {
        let field = this.getField();
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
};

let phone = {
    name: 'Phone',
    rules: {
        type: "number",
        typeRu: "число",
        length: 11,
    },

    getField() {
        return document.getElementById('phone');
    },

    getFieldValue() {
        return this.getField().value;
    },

    validate() {
        let validNumber = validators.validateForNumber(parseInt(this.getFieldValue()));
        let validLength = validators.validateLength(this.rules.length, this.rules.length, this.getFieldValue());
        if (!validNumber || !validLength) {
            this.showError();
            return false;
        }
        this.setValid();
        return true
    },

    showError() {
        this.getField().classList.add('is-invalid');
        document.querySelector('.phoneError').innerHTML = `Длина поля ${this.name} должна быть больше ${this.rules.length} и быть типом ${this.rules.typeRu}`;
    },

    setValid() {
        let field = this.getField();
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
};

let passwords = {
    namePass: "Пароль",
    namePassRepeat: "Повтор пароля",

    getFieldPass() {
        return document.getElementById('password');
    },

    getFieldPassRepeat() {
        return document.getElementById('pass-repeat');
    },

    validate() {
        let pass = this.getFieldPass().value;
        let passRepeat = this.getFieldPassRepeat().value;
        if (pass !== passRepeat || pass === '') {
            this.showError();
            return false;
        }
        this.setValid();
        return true
    },

    showError() {
        this.getFieldPass().classList.add('is-invalid');
        this.getFieldPassRepeat().classList.add('is-invalid');
        document.querySelector('.passwordError').innerHTML = 'Пароли должны совпадать, поле ПАРОЛЬ не может быть пустым';
    },

    setValid() {
        let fieldPass = this.getFieldPass();
        fieldPass.remove('is-invalid');
        fieldPass.add('is-valid');

        let fieldPassRepeat = this.getFieldPassRepeat();
        fieldPassRepeat.classList.remove('is-invalid');
        fieldPassRepeat.classList.add('is-valid');
    }
}