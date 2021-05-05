"use strict"
// /*================================================= HW DOM 3 ======================================================*/
// //       3. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
// // желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// // Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// //       4. (усложненное задание, делайте по желанию) Заполнить созданную таблицу фигурами, фигуры должны выглядеть
// // как картинки, либо можно использовать символы (существуют символы шахматных фигур) причем все фигуры
// // должны стоять на своих местах и быть соответственно черными и белыми.

let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        // генерируем доску
        let board = this.generateBoard();
        // добавляем доску в body
        document.body.innerHTML = board;
        // помещаем на доску фигуры, кроме пешек
        this.insertFiguresOnDesk();
        // добавляем пешки
        this.insertPawns();
        // добавляем колонку с номерами строк
        this.insertRowsNumbers();
        // добавляем строку с названиями колонок
        this.insertColsChars();
    },

    generateBoard() {
        let board = "";
        let rowStartWithColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = "";
            if (rowStartWithColor == 'white') {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'black';
            } else {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'white';
            }
            board += row;
        }
        return `<table>${board}</table>`;
    },

    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },


}

app.run();