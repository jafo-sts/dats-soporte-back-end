import connectMongo from "../../../Db/db";
import Producto from '../../../Domain/Producto/producto.schema'

export const GetProducts = async() => {
    try {
        await connectMongo()
        const response = await Producto.find()
        return response
    } catch (error) {
            console.log(error)
        return []
    }
}