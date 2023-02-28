import Link from "next/link";

const MobileNav = () => (
    <nav className="page-header__mobile-nav mobile-nav" data-menu="mobile-menu">
        <div className="mobile-nav__wrapper">
            <button className="mobile-nav__close-menu" id="close-mobile-nav">Закрыть</button>
            <ul className="mobile-nav__list">
                <li className="mobile-nav__item">
                    <Link className="mobile-nav__link" href="/about">О компании</Link>
                </li>
                <li className="mobile-nav__item">
                    <Link className="mobile-nav__link" href="/products">Продукция</Link>
                </li>
                <li className="mobile-nav__item">
                    <Link className="mobile-nav__link" href="/contacts">Контакты</Link>
                </li>
            </ul>
            <a className="mobile-nav__phone" href="tel:+79065459008"><span>+7 906 </span>545-90-08</a>
            <a className="mobile-nav__address" href="">Рязань 197 км окружной дороги, строение 2</a>
        </div>
    </nav>
);

export default MobileNav;