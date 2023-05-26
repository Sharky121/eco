import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useRef} from "react";

function Fancybox(props: { delegate: string; options: {}; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
