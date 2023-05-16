import {ReactNode} from "react";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main className="page__main">
                {children}
                <FeedbackScreen/>
            </main>
        </>
    )
};

export default Layout;
