import Image from 'next/image';

const FeaturesScreen = () => (
    <section className="index-page__section section features-screen">
        <div className="section__container container">
            <h2 className="section__title">Преимущества</h2>
            <ul className="features-screen__list">
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-1.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Идеально поддерживает <br/> форму</h3>
                </li>
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-2.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Небольшой вес</h3>
                </li>
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-3.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Высокие показатели <br/> амортизации</h3>
                </li>
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-4.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Повышенные показатели <br/> эластичности</h3>
                </li>
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-5.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Безопасен, не выделяет <br/> в атмосферу <br/>токсичные
                            вещества.</h3>
                </li>
                <li className="features-screen__item features-item">
                    <Image
                        src="/images/features-6.png"
                        height={97}
                        width={97}
                        alt=""
                    />
                    <h3 className="features-item__title">Отличные <br/>звукоизоляционные<br/> характеристики</h3>
                </li>
            </ul>
        </div>
    </section>
);

export default FeaturesScreen;