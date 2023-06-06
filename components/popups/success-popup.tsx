import React from 'react';
import OverlayingPopup from "@/components/overlaying-popup/overlaying-popup";

type SuccessPopupProps = {
    isOpened: boolean;
    text: string;
    onClose: (arg0: boolean) => void;
}

const SuccessPopup = ({isOpened, text, onClose}: SuccessPopupProps) => {
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
                        <h3 className="popup__title">Иконка успеха</h3>
                    </div>
                    <div className="popup__body">
                        <p>{text}</p>
                    </div>
                    <div className="popup__footer">
                        <button className="btn btn--primary" type="button" onClick={() => onClose(false)}>Хорошо</button>
                    </div>
                </div>
            </div>
        </OverlayingPopup>
    )
}

export default SuccessPopup;
