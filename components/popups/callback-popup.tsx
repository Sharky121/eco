import React, {FormEvent, useCallback, useState} from 'react';
import OverlayingPopup from "@/components/overlaying-popup/overlaying-popup";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

type CallbackPopupType = {
    isOpened: boolean;
    onClose: (arg0: boolean) => void;
}

const CallbackPopup = ({isOpened, onClose}: CallbackPopupType) => {
    const [phone, setPhone] = useState('');
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
        fetch("/api/callback-form", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone: phone,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .finally(() => {

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
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" name="phone" onChange={(evt) => setPhone(evt.target.value) }/>
                            <button className="btn btn--primary" type="submit">Отправить</button>
                        </form>
                    </div>
                    <div className="popup__footer">

                    </div>
                </div>
            </div>
        </OverlayingPopup>
    );
}

export default CallbackPopup;
