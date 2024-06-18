import { Request, Response } from "express"
import * as CtrlProducto from '../Apps/Producto/Applications/producto.service'

export const GetProductos = async (req: Request, res: Response) => {
    const responseProducts = await CtrlProducto.GetProductos()
    return res.status(200).json(responseProducts)
}