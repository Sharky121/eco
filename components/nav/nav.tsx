import Link from "next/link";

const Nav = () => (
    <nav className="page-header__main-nav main-nav">
        <ul className="main-nav__list">
            <li className="main-nav__item">
                <Link className="main-nav__link" href="/about">О компании</Link>
            </li>
            <li className="main-nav__item">
                <Link className="main-nav__link" href="/products">Продукция</Link>
            </li>
            <li className="main-nav__item">
                <Link className="main-nav__link" href="/contacts">Контакты</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;