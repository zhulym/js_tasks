import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    return (
        <li>
            <a href={props.href}>
                {props.title}
            </a>
        </li>
    )
}


// при необходимости проверить тип данных у пропсов:

MenuItem.propTypes = {   // здесь propTypes с малой буквы, а ниже с БОЛЬШОЙ!
    href: PropTypes.string.isRequired,  // string, т.к. ожидаем строку, если что другое то меняем и если придёт не 
    title: PropTypes.string.isRequired  // строка то метод в консоль выкинет ошибку
}
export default MenuItem