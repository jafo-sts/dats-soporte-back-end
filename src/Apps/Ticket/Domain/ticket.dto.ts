export interface EvidenciaDTO {
    url: string;
    descripcion: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ComentarioDTO {
    mensaje: string;
    usuario: string; // Assuming the user ID is a string, adjust if necessary
}

export interface StatusDTO {
    nombre: 'Creado' | 'En Revision' | 'Pendiente' | 'Finalizado' | 'Cerrado' | 'Eliminado' | 'Resuelto';
    code: 'CRE' | 'REV' | 'PEN' | 'FIN' | 'CER' | 'DEL' | 'RES';
}

export interface TicketDTO {
    descripcion: string;
    status: StatusDTO[];
    evidencias: EvidenciaDTO[];
    comentarios: ComentarioDTO[];
}



