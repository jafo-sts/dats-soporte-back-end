export interface TicketModel{
    descripcion: string,
    estado: Array<StatusModel>,
    evidencia: Array<EvidenciaModel>,
    comentarios: Array<ComentariosModel>,
    historial: Array<HistorialModel>,
    isDelete: boolean
}

export interface StatusModel{
    idusuario: string,
    estado: string,
    mensaje: string,
    fecha: Date,
}

export interface EvidenciaModel{
    url: string,
    descripcion: string,
    fecha: Date
}

export interface ComentariosModel{
    idusuario: string,
    mensaje: string,
    fecha: Date
}

export interface HistorialModel{
    idusuario: string,
    movimiento: string,
    mensaje: string,
    fecha: Date
}
