import {useState} from "react";

const FeedbackScreen = () => {
    const [text, setText] = useState('Hello World');

    return (
        <section className="section feedback-screen">
            <div className="feedback-screen__container container">
                <h2 className="feedback-screen__title section__title">Обратная связь:</h2>
                <form className="feedback-screen__form form feedback-form" id="feedback" action="sendForm" method="post">
                    <ul className="feedback-form__list">
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="name">Ваше имя</label>
                            <input className="form-field__input" id="name" name="name" type="text" placeholder="Ваше имя"/>
                        </li>
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="email">Ваше email</label>
                            <input className="form-field__input" id="email" name="email" type="email"
                                   placeholder="Ваше email"/>
                        </li>
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="message">Сообщение</label>
                            <textarea
                                className="form-field__textarea"
                                id="message"
                                name="message"
                                value={text}
                                onChange={(e) => setText(e.target.value) }></textarea>
                        </li>
                    </ul>
                    <div className="feedback-form__submit">
                        <div className="feedback-form__politics checkbox">
                            <label className="checkbox__label">
                                <input className="checkbox__input" type="checkbox"/>
                                <span className="checkbox__text">Согласен с <a href="">условиями обработки</a> персональных данных</span>
                            </label>
                        </div>
                        <button className="feedback-form__btn btn btn--primary btn--full-width">Отправить</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FeedbackScreen;