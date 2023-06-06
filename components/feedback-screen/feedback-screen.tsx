import {FormEvent, useCallback, useState} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SuccessPopup from "@/components/popups/success-popup";

const FeedbackScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [notification, setNotification] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successModalIsOpen, setSuccessModalIsOpen] = useState<boolean>(false);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();

            if (!executeRecaptcha) {
                return;
            }

            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                submitEnquiryForm(gReCaptchaToken);
            });
        },
        [executeRecaptcha, name, email, message]
    );

    const submitEnquiryForm = (gReCaptchaToken: string) => {
        setNotification('');
        setIsLoading(true);

        fetch("/api/feedback-form", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setSuccessModalIsOpen(true);

                if (res?.status === "success") {
                    setNotification(res?.message);
                } else {
                    setNotification(res?.message);
                }
            })
            .finally(() => {
            setIsLoading(false);
            setName('');
            setEmail('');
            setMessage('');
        });
    };

    return (
        <>
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
                            <button className="feedback-form__btn btn btn--primary btn--full-width" disabled={!isLoading}>
                                {isLoading ? 'Письмо отправляется' : 'Отправить'}
                            </button>
                        </div>
                    </form>
                    {notification && <p>{notification}</p>}
                </div>
            </section>
            {successModalIsOpen && (
                <SuccessPopup
                    isOpened={successModalIsOpen}
                    text="Спасибо. Ваше сообщение отправлено."
                    onClose={() =>setSuccessModalIsOpen(false)}/>
            )}
        </>

    );
};

export default FeedbackScreen;
