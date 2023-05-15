import Link from "next/link";
import Image from 'next/image';
import Nav from "@/components/nav/nav";
import MobileNav from "@/components/mobile-nav/mobile-nav";

type headerStyleProps = {
    headerStyle?: string;
}

const Header = ({headerStyle}: headerStyleProps) => {
    const logoImage = headerStyle
        ? '/images/logo-green.png'
        : '/images/logo-white.png'

    return (
        <header className={`page__header page-header ${headerStyle}`}>
            <div className="page-header__container container">
                <Link className="page-header__logo logo" href="/">
                    <Image
                        src={logoImage}
                        height={40}
                        width={151}
                        className="logo__img"
                        alt="Логотип Экопоролон"
                    />
                </Link>
                <button className="page-header__hamburger hamburger-menu" id="hamburger-menu">
                    <span className="hamburger-menu__line"></span>
                </button>
                <Nav/>
                <MobileNav/>
                <div className="page-header__contacts header-contacts">
                    <a className="header-contacts__phone" href="tel:+79065459008"><span>+7 906</span>545-90-08</a>
                    <a className="header-contacts__callback" href="">Перезвоните мне</a>
                </div>
            </div>
        </header>
    )
};

export default Header;
