import Link from "next/link";
import {ProductInterface} from "@/interfaces/product.interface";
import {products} from "@/data";
import Header from "@/components/header/header";
import FeedbackScreen from "@/components/feedback-screen/feedback-screen";
import Footer from "@/components/footer/footer";
import Head from "next/head";

type Product = {
    id: number;
    title: string;
    desc: string;
    photos: string[];
}

type productsProps = {
    products: Product[];
}

const Products = () => {
    return (
        <>
            <Head>
                <title>Экопоролон | Наша продукция</title>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks"/>
                <meta name="google" content="notranslate" />
                <meta
                    name="description"
                    content="Наша продукция. Поролон малой, средней и высокой плотности."
                    key="desc"
                />
            </Head>
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
                        </ul>
                    </section>
                    <section className="catalog">
                        <h2 className="catalog__title">Наша продукция</h2>
                        <ul className="catalog__list">
                            {products.map(({id, title, desc}: ProductInterface) => (
                                <li key={id} className="catalog__item catalog-item">
                                    <Link className="catalog-item__wrapper" href={`/products/${id}`}>
                                        <h3 className="catalog-item__title">{title}</h3>
                                        <p className="catalog-item__desc">{desc}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <FeedbackScreen/>
            </main>
            <Footer/>
        </>
    )
};

export default Products;
