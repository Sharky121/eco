import {ProductInterface} from "@/interfaces/product.interface";
import Image from "next/image";

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
    return (
        <div className="container">
            <h1>{product.id}</h1>
            {product.photos.map((photo) => (
                <li key={photo}>
                    <Image
                        src={photo}
                        fill
                        alt="экопоролон"
                    />
                </li>

            ))}
        </div>
    )
};

export default Product;