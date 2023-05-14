import {ProductInterface} from "@/interfaces/product.interface";
import Image from "next/image";
import * as process from "process";

type productsProps = {
    product: ProductInterface;
}

export const getServerSideProps = async (context: { params: { id: any; }; }) => {
    const { id } = context.params;
    const response = await fetch(`${process.env.API_HOST}/products/${id}`);
    const product = await response.json();

    return {
        props: {
            product,
        }
    }
}

const Product = ({product}: productsProps) => {
    return (
        <section className="product">
            <div className="product__wrapper container">
                <h2>{product.title}</h2>
                <p className="product__desc">{product.desc}</p>
                <ul className="product__list">
                    {product.photos.map((photo) => (
                        <li className="product__item" key={photo}>
                            <Image
                                src={photo}
                                fill
                                className="product__img"
                                alt="экопоролон"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default Product;
