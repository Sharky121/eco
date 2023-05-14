import React, {ReactElement} from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";

type ChildProps = {
    headerStyle: string;
};

type LayoutProps = {
    children: ReactElement<ChildProps>;
};

const Layout = ({children}: LayoutProps) => {
    const {headerStyle} = children.props;

    return (
        <>
            <Header headerStyle={headerStyle}/>
            <main className="page__main index-page">
                {children}
                <FeedbackScreen/>
            </main>
            <Footer/>
        </>
    )
};

export default Layout;
