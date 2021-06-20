
import { React, useState } from 'react';

const Greeting = (props) => {

    const closeModal = () => document.getElementById('greeting__modal').classList.add('hide__modal');
    const [name, setName] = useState('NoName');
    const editName = () => setName(document.getElementById('modal__input').value);
    const changeName = () => document.getElementById('greeting__modal').classList.remove('hide__modal');
    // сделать открыв и закрыв мод окно

    return (
        <div className="greeting__wrap">
            <div className="greeting__container">
                <p id="greeting__content">Hello, {props.greetingName} {name}</p>
            </div>
            <div className="greeting__button-container">
                <button className="greeting__content-button" onClick={changeName}>↑ Change Name ↑</button>
            </div>
            <div id="greeting__modal">
                <span className="modal__close-button" onClick={closeModal}>&times;</span>
                <div className="modal-control">
                    <label htmlFor="modal__input" className="modal__label">Enter your Name!</label>
                    <input id="modal__input" type="text" className="modal__input" />
                </div>
                <button className="modal__submit" onClick={editName}>Ok</button>
            </div>
        </div>
    )
}

export default Greeting