import mongoose from "mongoose";
import { ComentariosModel, EvidenciaModel, StatusModel, TicketModel } from "./ticket.model";

const ComentarioSchema = new mongoose.Schema<ComentariosModel>({
    usuario: String,
    comentario: String,
    fecha: String
})

const EvidenciaSchema = new mongoose.Schema<EvidenciaModel>({
    url: String,
    descripcion: String,
    fecha: String
})

const StatusSchema = new mongoose.Schema<StatusModel>({
    nombre: String,
    comentario: String,
    fecha: Date
})

const TicketSchema = new mongoose.Schema<TicketModel>({
    descripcion:{type: String, required: true},
    status: [StatusSchema],
    evidencia: [EvidenciaSchema],
    comentarios: [ComentarioSchema],
    softdelete: Boolean
})

export default mongoose.model('Ticket', TicketSchema)