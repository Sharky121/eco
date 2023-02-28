import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";

type childrenProps = {
    children?: React.ReactNode;
};

const Layout = ({children}: childrenProps) => (
    <>
        <Header headerStyle={children.props.headerStyle}/>
        <main className="page__main index-page">
            {children}
            <FeedbackScreen/>
        </main>
        <Footer/>
    </>
);

export default Layout;