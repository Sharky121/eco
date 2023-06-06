import React, {ReactNode} from 'react';
import Portal from '../portal/portal';

type OverlayingPopupType = {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
};

const OverlayingPopup = ({children, onClose, isOpened}: OverlayingPopupType) => {
    if (!isOpened) {
        return null;
    }

    return (
        <Portal>
            <div className="popup-container" role="dialog">
                <div className="popup-overlay" role="button" tabIndex={0} onClick={onClose}></div>
                {children}
            </div>
        </Portal>
    )
}

export default OverlayingPopup;
