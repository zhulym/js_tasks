"use strict"

let ticTakToe = {

    gameTableElement: document.getElementById('container-game'),
    status: 'playing',
    mapValues: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    phase: 'X',


    // Инициализация игры.
    init() {
        this.renderMap();           // Выводим все ячейки.
        this.initEventHandlers();   // Инициализируем обработчики событий.
    },


    // Create cells in table
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();          // Добавляем в data-аттрибуты данные с номерами этой ячейки.
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    },


    // Инициализация обработчиков событий
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    },

    //Обработчик события клика
    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {   // Если клик не нужно обрабатывать, уходим из функции.
            return;
        }
        this.fillCell(event);          // Заполняем ячейку.

        if (this.hasWon()) {           // Если кто-то выиграл, заходим в if.
            this.setStatusStopped();   // Ставим статус в "остановлено".
            this.sayWonPhrase();       // Сообщаем о победе пользователя.
        }

        this.togglePhase();            // Меняем фигуру (крестик или нолик).
    },


    // Проверка был ли корректный клик, что описан в событии event.
    // Вернет true в случае если статус игры "играем", клик что описан в объекте event был
    // по ячейке и ячейка куда был произведен клик был по пустой ячейке.
    isCorrectClick(event) {
        return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    },


    // Проверка что мы "играем", что игра не закончена.
    isStatusPlaying() {
        return this.status === 'playing';
    },


    // Проверка что клик был по ячейке.
    // Вернет true, если клик был по ячейке, иначе false.

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    },

    // Проверка что в ячейку не ставили значение (крестик или нолик).
    // Вернет true, если ячейка пуста, иначе false.

    isCellEmpty(event) {
        let row = +event.target.dataset.row;  // Получаем строку и колонку куда кликнули.
        let col = +event.target.dataset.col;
        return this.mapValues[row][col] === '';
    },


    // Заполняет ячейку в которую кликнул пользователь в событии event.
    fillCell(event) {
        let row = +event.target.dataset.row;  // Получаем строку и колонку куда кликнули.
        let col = +event.target.dataset.col;

        this.mapValues[row][col] = this.phase; // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        event.target.textContent = this.phase;
    },


    // Проверка есть ли выигрышная ситуация на карте.
    // Вернет true, если игра выиграна, иначе false.
    hasWon() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    },

    /**
     * Проверка есть ли выигрышная ситуация на линии.
     * @param {{x: int, y: int}} a 1-ая ячейка.
     * @param {{x: int, y: int}} b 2-ая ячейка.
     * @param {{x: int, y: int}} c 3-я ячейка.
     * @returns {boolean} Вернет true, если линия выиграна, иначе false.
     */
    isLineWon(a, b, c) {
        let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    },

    // Ставит статус игры в "остановлена".
    setStatusStopped() {
        this.status = 'stopped';
    },


    // Сообщает о победе.
    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    },


    // Меняет фигуру (крестик или нолик).
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    },
};

// Запускаем игру при полной загрузке страницы.
window.addEventListener('load', ticTakToe.init());


