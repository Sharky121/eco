import React, {ReactElement} from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";

type LayoutProps = {
    children: ReactElement;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <main className="page__main index-page">
                {children}
                <FeedbackScreen/>
            </main>
            <Footer/>
        </>
    )
};

export default Layout;
