import Link from "next/link";

export async function getStaticProps() {
    return {
        props: {
            headerStyle: 'page-header--white'
        }
    }
}

const About = () => (
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
        <div className="contact-page__raw">
            <p>Компания «Экопоролон» достаточно молодое, но очень целеустремленное и ответственное предприятие.
                Основным направлением деятельности является производство и реализация вторично-вспененного пенополиуретана (ПВВ). </p>
            <p>Вторичный поролон, благодаря своим уникальным свойствам, очень востребован во многих отраслях производства.
                Производственная база нашей компании  оснащена качественным и высокотехнологичным оборудованием. </p>
            <p>При проектировании и обустройстве производственных линий, производились тщательные расчеты, с учетом всех особенностей технологического процесса.
                Благодаря нашиим специалистам, а также разработанной нами технологии, на сегодняшний день мы можем производить ПВВ высокого качества различных марок. </p>
            <p>Производственные мощности  постоянно увеличиваются, что способствует наращиванию объемов выпуска необходимого объема готовой продукции в соответствии с потребностями наших партнеров.
                Компания «Экопоролон» осуществляет индивидуальный подход в работе к каждому клиенту.</p>
        </div>
    </div>
);

export default About;