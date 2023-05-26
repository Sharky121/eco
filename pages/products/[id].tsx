type ProductType = {
    productId: string;
}

const Product = ({ productId }: ProductType) => {
    return (
        <h1>{ productId }</h1>
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
