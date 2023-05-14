import Link from "next/link";
import {ProductInterface} from "@/interfaces/product.interface";
import process from "process";

type productsProps = {
    products: ProductInterface[];
}

export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/products`);
    const products = await response.json();

    return {
        props: {
            products,
            headerStyle: 'page-header--white'
        }
    }
}

const Products = ({products}: productsProps) => {
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
    )
};

export default Products;
