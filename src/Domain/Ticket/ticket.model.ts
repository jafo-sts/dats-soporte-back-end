export interface TicketModel{
    descripcion: string,
    status: Array<StatusModel>,
    evidencia: Array<EvidenciaModel>,
    comentarios: Array<ComentariosModel>,
    softdelete: boolean
}

export interface StatusModel{
    nombre: string,
    comentario: string,
    fecha: Date,
}

export interface EvidenciaModel{
    url: string,
    descripcion: string,
    fecha: Date
}

export interface ComentariosModel{
    usuario: string,
    comentario: string,
    fecha: Date
}