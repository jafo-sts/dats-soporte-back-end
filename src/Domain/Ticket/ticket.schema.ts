import mongoose from "mongoose";
import { ComentariosModel, EvidenciaModel, HistorialModel, StatusModel, TicketModel } from "./ticket.model";

const HistorialSchema = new mongoose.Schema<HistorialModel>({
    idusuario: String,
    movimiento: String,
    mensaje: String,
    fecha:Date
})
const ComentarioSchema = new mongoose.Schema<ComentariosModel>({
    idusuario: String,
    mensaje: String,
    fecha: Date
})

const EvidenciaSchema = new mongoose.Schema<EvidenciaModel>({
    url: String,
    descripcion: String,
    fecha: Date
})

const StatusSchema = new mongoose.Schema<StatusModel>({
    idusuario: String,
    estado: String,
    mensaje: String,
    fecha: Date
})

const TicketSchema = new mongoose.Schema<TicketModel>({
    isDelete: {type: Boolean, default: false},
    descripcion:{type: String, required: true},
    status: [StatusSchema],
    evidencia: [EvidenciaSchema],
    comentarios: [ComentarioSchema],
    historial: [HistorialSchema],
})

export default mongoose.model('Ticket', TicketSchema)