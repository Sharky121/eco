import ReactDOM from 'react-dom';
import {ReactNode, useEffect, useState} from 'react';

type PortalProps = {
    children: ReactNode;
};

const Portal = ({children}: PortalProps) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    }, []);

    return ReactDOM.createPortal(children, container);
}

export default Portal;
