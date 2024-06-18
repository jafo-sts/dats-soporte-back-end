import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true
        },
        Descripcion: {
            type: String,
            required: true
        },
        Costo: {
            type: Number,
            required: true
        }
    }
)

export default mongoose.model('Producto', ProductoSchema)