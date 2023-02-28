const ContactsScreen = () => (
    <section className="index-page__contacts-screen section contacts-screen">
        <div className="contact-screen__container section__container container">
            <h2 className="visually-hidden">Контакты</h2>
            <ul className="contacts-screen__list">
                <li className="contacts-screen__item contacts-screen-item">
                    <h3 className="contacts-screen-item__title">По общим вопросам и предложениям:</h3>
                    <a className="contacts-screen-item__phone" href="tel:+79065459008">+7 (906) 545-90-08</a>
                </li>
                <li className="contacts-screen__item contacts-screen-item">
                    <h3 className="contacts-screen-item__title">Отдел продаж:</h3>
                    <a className="contacts-screen-item__phone" href="tel:+79206386130">+7 (920) 638-61-30</a>
                </li>
                <li className="contacts-screen__item contacts-screen-item">
                    <h3 className="contacts-screen-item__title">Email:</h3>
                    <a className="contacts-screen-item__phone"
                       href="mailto:ooo.plastrom@mail.ru">ooo.plastrom@mail.ru</a>
                </li>
            </ul>
        </div>
    </section>
);

export default ContactsScreen;