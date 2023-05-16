import {ProductInterface} from "@/interfaces/product.interface";
import Link from 'next/link';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type productsProps = {
    product: ProductInterface;
}

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await response.json();

    return {
        props: {
            product,
            headerStyle: 'page-header--white'
        }
    }
}

const Product = ({product}: productsProps) => {
    // @ts-ignore
    const [activeThumb, setActiveThumb] = useState<Swiper | null>(null);

    return (
        <div className="container">
            <section className="page__breadcrumbs breadcrumbs">
                <h2 className="visually-hidden">Хлебная крошка</h2>
                <Link className="breadcrumbs__back" id="history-back" href="/">Назад</Link>
                <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                        <Link className="breadcrumbs__link" href="/">Главная</Link>
                    </li>
                    <li className="breadcrumbs__item">
                        <Link className="breadcrumbs__link" href="/products">Продукция</Link>
                    </li>
                    <li className="breadcrumbs__item">
                        <span className="breadcrumbs__link">{product.title}</span>
                    </li>
                </ul>
            </section>

            <section className="page__product product">
                <div className="product__wrapper">
                    <div className="product__image">
                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation, Thumbs]}
                            grabCursor={true}
                            thumbs={{swiper: activeThumb}}
                            className="mySwiper2"
                        >
                            {product.photos.map((photo, index) => (
                                <SwiperSlide key={photo + index}>
                                    <img src={photo} alt=""/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setActiveThumb}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}

                            modules={[Navigation, Thumbs]}
                        >
                            {product.photos.map((photo, index) => (
                                <SwiperSlide key={photo + index}>
                                    <img src={photo} alt=""/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="product__content">
                        <h2 className="product__title">{product.title}</h2>
                        <p className="product__description">
                            <b>Поролон вторичного вспенивания</b> производится из измельченного поролона, спрессованого
                            под большим давлением, с применением специального клеевого состава.
                            Имеет более высокую плотность, упругость и износостойкость, по сравнению с обычным
                            поролоном. не выделяет токсичных веществ, обладает отличными шумо и
                            теплоизоляционными свойствами. выпускается в кубах и листах различной плотности.</p>
                        <p className="product__description"><b>Листовой ПВВ</b> выпускается в листах 2х1м толщиной от
                            4мм, в зависимости от потребностей габариты листа могут быть увеличены.</p>
                        <p className="product__description">Ассортимент: <b>ПВВ-60, ПВВ-80, ПВВ-100, ПВВ-120
                            кг\м<sup>3</sup></b></p>
                        <form className="product__form product-form" id="product-order" action="sendForm" method="post">
                            <ul className="product-form__list">
                                <li className="product-form__item product-form-field">
                                    <label className="product-form-field__label" htmlFor="email">Ваша почта</label>
                                    <input className="product-form-field__input" id="email" name="email" type="email"
                                           placeholder="Email"/>
                                        <span className="product-form-field__measure">@</span>
                                </li>
                                <li className="product-form__item product-form-field">
                                    <label className="product-form-field__label" htmlFor="density">Плотность</label>
                                    <input className="product-form-field__input" id="density" name="density"
                                           type="number" placeholder="Плотность" />
                                        <span className="product-form-field__measure">кг/м<sup>3</sup></span>
                                </li>
                                <li className="product-form__item product-form-field">
                                    <label className="product-form-field__label" htmlFor="size">Размер листа</label>
                                    <input className="product-form-field__input" id="size" name="size" type="text"
                                           placeholder="Размер листа" />
                                        <span className="product-form-field__measure">см</span>
                                </li>
                                <li className="product-form__item product-form-field">
                                    <label className="product-form-field__label" htmlFor="quantity">Количество</label>
                                    <input className="product-form-field__input" id="quantity" name="quantity"
                                           type="number" placeholder="Количество"/>
                                        <span className="product-form-field__measure">шт.</span>
                                </li>
                            </ul>
                            <button className="product-form__btn btn btn--primary">Сделать заказ</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Product;
