import Link from "next/link";
import Header from "@/components/header/header";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";
import Footer from "@/components/footer/footer";
import Fancybox from "@/components/fancybox/fancybox";
import Image from "next/image";
import {photosAbout} from "@/data";

const About = () => (
    <>
        <Header headerStyle="page-header--white" />
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
                            <Link className="breadcrumbs__link" href="/about">О компании</Link>
                        </li>
                    </ul>
                </section>
                <h1>О компании</h1>
                <div className="about-page__raw">
                    <p>Компания «Экопоролон» достаточно молодое, но очень целеустремленное и ответственное предприятие.
                        Основным направлением деятельности является производство и реализация вторично-вспененного пенополиуретана (ПВВ). </p>
                    <p>Вторичный поролон, благодаря своим уникальным свойствам, очень востребован во многих отраслях производства.
                        Производственная база нашей компании  оснащена качественным и высокотехнологичным оборудованием. </p>
                    <p>При проектировании и обустройстве производственных линий, производились тщательные расчеты, с учетом всех особенностей технологического процесса.
                        Благодаря нашиим специалистам, а также разработанной нами технологии, на сегодняшний день мы можем производить ПВВ высокого качества различных марок. </p>
                    <p>Производственные мощности  постоянно увеличиваются, что способствует наращиванию объемов выпуска необходимого объема готовой продукции в соответствии с потребностями наших партнеров.
                        Компания «Экопоролон» осуществляет индивидуальный подход в работе к каждому клиенту.</p>
                    <div className="about-photo">
                        <ul className="about-photo__list">
                            {
                                photosAbout.map((photo, index) => (
                                    <li className="about-photo__item" key={index}>
                                        <Fancybox
                                            options={{
                                                Carousel: {
                                                    infinite: false,
                                                },
                                            }}
                                            delegate="">
                                            <a className='about-photo__link' data-fancybox="gallery" href={photo}>
                                                <Image fill className="about-photo__img" alt="" src={photo} />
                                            </a>
                                        </Fancybox>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <FeedbackScreen/>
        </main>
        <Footer/>
    </>

);

export default About;
