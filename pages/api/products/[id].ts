import {NextApiRequest, NextApiResponse} from "next";
import {ProductInterface} from "@/interfaces/product.interface";
import {ResponseError} from "@/interfaces/responseError.interface";
import {products} from "@/data";

export default function productHandler(
    _req: NextApiRequest,
    res: NextApiResponse<ProductInterface | ResponseError>
) {
    const {query} = _req;
    const { id } = query;
    const product = products.find((product: ProductInterface) => product.id === parseInt(id as string, 10));

    return product
        ? res.status(200).json(product)
        : res.status(404).json({ message: `User with id: ${id} not found.` })
}
