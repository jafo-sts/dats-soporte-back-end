import mongoose from "mongoose";

const Ticketschema = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true
        },
        Descripcion: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Ticket', Ticketschema)