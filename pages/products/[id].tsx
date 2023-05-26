import Link from "next/link";
import Image from 'next/image';
import {products} from "@/data";
import Fancybox from "@/components/fancybox/fancybox";
import Header from "@/components/header/header";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";
import Footer from "@/components/footer/footer";

type ProductType = {
    productId: string;
}

const Product = ({ productId }: ProductType) => {
    const product = products[parseInt(productId, 10) - 1];

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
                                <Link className="breadcrumbs__link" href="/products">Наша продукция</Link>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__link">{product.title}</span>
                            </li>
                        </ul>
                    </section>
                    <section className="product">
                        <h2 className="product__title">{product.title}</h2>
                        <ul className="product__list">
                            {
                                product.photos.map((photo, index) => (
                                    <li className="product__item" key={index}>
                                        <Fancybox
                                            options={{
                                                Carousel: {
                                                    infinite: false,
                                                },
                                            }}
                                         delegate="">
                                            <a className='product__link' data-fancybox="gallery" href={photo}>
                                                <Image fill className="product__img" alt="" src={photo} />
                                            </a>
                                        </Fancybox>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </div>
                <FeedbackScreen/>
            </main>
            <Footer/>
        </>
    )
};

export async function getServerSideProps(context: { query: { id: string; }; }) {
    const { id } = context.query;
    return {
        props: {
            productId: id,
        },
    };
}

export default Product;
