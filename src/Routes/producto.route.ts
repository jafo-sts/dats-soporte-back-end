import { Router } from "express";
const router = Router()
import * as CtrlProducto from '../Controllers/producto.controller'

router.get('/producto',  CtrlProducto.GetProductos)

export default router
