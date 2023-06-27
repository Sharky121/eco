import React, {FormEvent, useCallback, useId, useState} from 'react';
import OverlayingPopup from "@/components/overlaying-popup/overlaying-popup";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

type CallbackPopupType = {
    isOpened: boolean;
    onClose: (arg0: boolean) => void;
}

const CallbackPopup = ({isOpened, onClose}: CallbackPopupType) => {
    const formId = useId();
    const phoneId = useId();
    const nameId = useId();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successSubmit, setSuccessSubmit,] = useState<boolean>(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();

            if (!executeRecaptcha) {
                return;
            }

            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                submitEnquiryForm(gReCaptchaToken);
            });
        },
        [executeRecaptcha, phone]
    );

    const submitEnquiryForm = (gReCaptchaToken: string) => {
        setIsLoading(true);

        fetch("/api/callback-form", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setSuccessSubmit(true);
            })
            .finally(() => {
                setIsLoading(false);
                setSuccessSubmit(false);
            });
    };

    return (
        <OverlayingPopup onClose={() => onClose(false)} isOpened={isOpened}>
            <div className="popup">
                <div className="popup__content">
                    <button className="popup__close" onClick={() => onClose(false)}>
                        <svg viewBox="0 0 24 24"
                             width="24"
                             height="24"
                             aria-hidden="true"
                             focusable="false">
                            <use xlinkHref="#ico-cross" x="0" y="0"></use>
                        </svg>
                        <span className="visually-hidden">Закрыть модальное окно</span>
                    </button>
                    <div className="popup__header">
                        <h3 className="popup__title">Заказать обратный звонок</h3>
                    </div>
                    <div className="popup__body">
                        {successSubmit
                            ? (<p>Спасибо! Мы вас перезвоним</p>)
                            : (
                                <form className="callback-form" action="" onSubmit={handleSubmit} id={formId}>
                                <ul className="callback-form__list">
                                    <li className="callback-form__field">
                                        <label className="callback-form__label" htmlFor={nameId}>Ваше имя</label>
                                        <input id={nameId} className="callback-form__input"
                                               type="text"
                                               name="name"
                                               onChange={(evt) => setName(evt.target.value) }/>
                                    </li>
                                    <li className="callback-form__field">
                                        <label className="callback-form__label" htmlFor={phoneId}>Ваш номер телефона</label>
                                        <input id={phoneId} className="callback-form__input"
                                               type="text"
                                               name="phone"
                                               onChange={(evt) => setPhone(evt.target.value) }/>
                                    </li>
                                </ul>
                            </form>
                            )
                        }
                    </div>
                    <div className="popup__footer">
                        <button className="btn btn--primary" form={formId} type="submit" disabled={isLoading}>
                            {isLoading ? 'Письмо отправляется' : 'Отправить'}
                        </button>
                    </div>
                </div>
            </div>
        </OverlayingPopup>
    );
}

export default CallbackPopup;
