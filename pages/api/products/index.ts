import type { NextApiRequest, NextApiResponse } from 'next'
import {products} from "@/data";
import {ProductInterface} from "@/interfaces/product.interface";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<ProductInterface[]>
) {
    res.status(200).json(products);
}
