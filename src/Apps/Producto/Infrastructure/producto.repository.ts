import connectMongo from "../../../Db/db";
import Producto from '../../../Domain/Producto/producto.schema'

export const GetProducts = async() => {
    try {

        const responseConnect = await connectMongo()
        
        if(responseConnect)
            return await Producto.find()
        return null
    } catch (error) {
            console.log(error)
        return []
    }
}