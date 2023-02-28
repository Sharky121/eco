import Image from 'next/image';
import Link from "next/link";

const getYear = () => new Date().getFullYear();

const Footer = () => (
    <footer className="page__footer page-footer">
        <div className="page-footer__container container">
            <Link className="page-footer__logo" href="/">
                <Image
                    src="/images/logo-black.png"
                    height={40}
                    width={151}
                    alt="Логотип Экопоролон"
                />
            </Link>
            <p className="page-footer__copyright">
                ЭКОПОРОЛОН © 2016-{getYear()} <br/>
                Создано с любовью - Студия 620
            </p>
            <div className="page-footer__form footer-form">
                <form className="subscription-form" action="">
                    <div className="subscription-form__form-field subscription-form-field">
                        <label className="subscription-form-field__label" htmlFor="email">Подписаться на информационную
                            рассылку:</label>
                        <input className="subscription-form-field__input" id="email" name="email" type="email"
                               placeholder="Введите ваш e-mail и нажмите на галочку"/>
                            <button className="subscription-form-field__btn btn" type="submit">
                                <svg width="25" height="25" aria-hidden="true" focusable="false">
                                    <use xlinkHref="#ico-check" x="0" y="0"/>
                                </svg>
                            </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="page__icons">
            <svg preserveAspectRatio="xMinYMid">
                <symbol id="ico-check" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </symbol>
            </svg>
        </div>
    </footer>
);

export default Footer;