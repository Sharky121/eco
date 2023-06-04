import {FormEvent,useState} from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReCAPTCHA from 'react-google-recaptcha';

const FeedbackScreen = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(true);

    const MySwal = withReactContent(Swal);

    const handleVerify = (response: any) => {
        if (response) {
            setIsVerified(true);
        }
    };

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (isVerified) {
            const data = {
                name: name,
                email: email,
                message: message,
            };

            const JSONdata = JSON.stringify(data);
            const endpoint = '/api/feedback-form';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            };

            await fetch(endpoint, options)
                .then(() => {
                    MySwal.fire({
                        title: <strong>Сообщение отправлено</strong>,
                        icon: 'success',
                        confirmButtonColor: '#00d64b',
                    })
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                });
        } else {
            alert('Подтвердите, что вы не робот');
        }
    };

    return (
        <section className="section page__feedback-screen feedback-screen">
            <div className="feedback-screen__container container">
                <h2 className="feedback-screen__title section__title">Обратная связь:</h2>
                <form className="feedback-screen__form form feedback-form"
                      id="feedback"
                      action="/api/feedback-form"
                      method="post"
                      onSubmit={handleSubmit}>
                    <ul className="feedback-form__list">
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="name">Ваше имя</label>
                            <input className="form-field__input"
                                   id="name"
                                   name="name"
                                   type="text"
                                   placeholder="Ваше имя"
                                   value={name}
                                   required={true}
                                   onChange={(evt) => setName(evt.target.value) }/>
                        </li>
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="email">Ваше email</label>
                            <input className="form-field__input" id="email" name="email" type="email" value={email}
                                   placeholder="Ваше email"
                                   required={true}
                                   onChange={(evt) => setEmail(evt.target.value) }/>
                        </li>
                        <li className="feedback-form__item form-field">
                            <label className="form-field__label visually-hidden" htmlFor="message">Сообщение</label>
                            <textarea
                                className="form-field__textarea"
                                id="message"
                                name="message"
                                value={message}
                                placeholder="Сообщение"
                                required={true}
                                onChange={(evt) => setMessage(evt.target.value) }></textarea>
                        </li>
                    </ul>
                    <div className="feedback-form__submit">
                        <div className="feedback-form__politics">
                            <label className="checkbox">
                                <input className="checkbox__input" type="checkbox" checked={isChecked} onChange={checkHandler}/>
                                <span className="checkbox__text">Согласен с <a href="">условиями обработки</a> персональных данных</span>
                            </label>
                        </div>
                        <button className="feedback-form__btn btn btn--primary btn--full-width">Отправить</button>
                    </div>
                    <ReCAPTCHA sitekey="6LfyrmkmAAAAAPHvhpfMWlUR-4O80XTqSC2XiGU5" onChange={handleVerify} />
                </form>
            </div>
        </section>
    );
};

export default FeedbackScreen;
