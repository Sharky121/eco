import Image from 'next/image';
import Link from "next/link";

const getYear = () => new Date().getFullYear();

const Footer = () => (
    <footer className="page__footer page-footer">
        <div className="page-footer__container container">
            <Link className="page-footer__logo" href="/">
                <Image
                    src="/images/logo-green.png"
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
                <symbol id="ico-cross" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </symbol>
                <symbol id="ico-ok" viewBox="0 0 26 26">
                    <path fill="currentColor" d="m4.721 12.881c-.613 1.205.083 1.781 1.671 2.765 1.35.834 3.215 1.139 4.413 1.261-.491.472 1.759-1.692-4.721 4.541-1.374 1.317.838 3.43 2.211 2.141l3.717-3.585c1.423 1.369 2.787 2.681 3.717 3.59 1.374 1.294 3.585-.801 2.226-2.141-.102-.097-5.037-4.831-4.736-4.541 1.213-.122 3.05-.445 4.384-1.261l-.001-.001c1.588-.989 2.284-1.564 1.68-2.769-.365-.684-1.349-1.256-2.659-.267 0 0-1.769 1.355-4.622 1.355-2.854 0-4.622-1.355-4.622-1.355-1.309-.994-2.297-.417-2.658.267z"/>
                    <path fill="currentColor" d="m11.999 12.142c3.478 0 6.318-2.718 6.318-6.064 0-3.36-2.84-6.078-6.318-6.078-3.479 0-6.319 2.718-6.319 6.078 0 3.346 2.84 6.064 6.319 6.064zm0-9.063c1.709 0 3.103 1.341 3.103 2.999 0 1.644-1.394 2.985-3.103 2.985s-3.103-1.341-3.103-2.985c-.001-1.659 1.393-2.999 3.103-2.999z"/>
                </symbol>
            </svg>
        </div>
    </footer>
);

export default Footer;
