export interface TicketDTO {
    descripcion: String,
}


export interface TicketUpdateDto{
    id: string,
    descripcion: string
}

export interface TicketAddCommentDto{
    id:string,
    comment: string
}

export interface TicketAddEvidenciaDto{
    id:string,
    url: string,
    descripcion: string,
}

export interface TicketUpdateStateDto{
    id: string,
    nuevoEstado: string
}

export interface DictTicketStates{
    [key: string]: Array<string>
}