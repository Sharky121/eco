import Link from "next/link";
import Header from "@/components/header/header";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";
import Footer from "@/components/footer/footer";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {
    const lat = 55.753215;
    const lng = 37.622504;

    return (
        <>
            <Header headerStyle="page-header--white"/>
            <main className="page__main">
                <div className="container">
                    <section className="page__breadcrumbs breadcrumbs">
                        <h2 className="visually-hidden">Хлебная крошка</h2>
                        <Link className="breadcrumbs__back" id="history-back" href="/">Назад</Link>
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <Link className="breadcrumbs__link" href="/">Главная</Link>
                            </li>
                            <li className="breadcrumbs__item">
                                <Link className="breadcrumbs__link" href="/contacts">Контакты</Link>
                            </li>
                        </ul>
                    </section>
                    <h1>Контакты</h1>
                    <div className="contact-page__raw">
                        <p>Адрес производства: Рязань 197 км окружной дороги, строение 2</p>
                        <p>По общим вопросам и предложениям: <a href="tel:+79065459008">+7 (906) 545-90-08</a></p>
                        <p>Отдел продаж: <a href="tel:+79206386130">+7 (920) 638-61-30</a></p>
                        <p>Email: <a href="mailto:ooo.plastrom@mail.ru">ooo.plastrom@mail.ru</a></p>
                    </div>
                    <YMaps>
                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </YMaps>
                </div>
                <FeedbackScreen/>
            </main>
            <Footer/>
        </>
    )
}

export default Contacts;
