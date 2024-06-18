import { ServerReponseDto } from "../../../Domain/ServerResponse/ServerResponseDto"
import { productodto } from "../Domain/producto.dto"
import * as CtrlRepository from '../Infrastructure/producto.repository'

export const GetProductos = async () => {
    return await CtrlRepository.GetProducts()
}

