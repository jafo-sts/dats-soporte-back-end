import mongoose from 'mongoose';

const evidenciaSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
}, 
{
    _id: false,
    timestamps: true
});

const comentariosSchema = new mongoose.Schema({
    mensaje:{
        type: String,
        require: true
    },
    usuario: {
        type: mongoose.Schema.ObjectId,
        ref:'User',
        require: true
    }
});

const statusShcema= new mongoose.Schema(
    {
        nombre: {
            type: String,
            enum: ['Creado','En Revision', 'Pendiente', 'Finalizado', 'Cerrado', 'Eliminado','Resuelto'],
            require:true
        },
        code: {
            type: String,
            enum: ['CRE', 'REV', 'PEN', 'FIN', 'CER', 'DEL', 'RES'],
            required: true
        },
});

const ticketSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    status:{
        type:[statusShcema],
        required: true
    },
    evidencias: {
        type: [evidenciaSchema],
        required: true
    },
    comentarios: {
        type: [comentariosSchema],
        required: true
    }
});



export default mongoose.model('Ticket', ticketSchema);