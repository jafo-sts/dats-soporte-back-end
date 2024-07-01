import { ServerResponseDto } from "../../../Domain/ServerResponse/serverresponse.dto"
import { TicketModel } from "../../../Domain/Ticket/ticket.model"
import ticketSchema from "../../../Domain/Ticket/ticket.schema"
import { TicketAddCommentDto, TicketAddEvidenciaDto, TicketDTO, TicketUpdateDto, TicketUpdateStateDto } from "../Domain/ticket.dto"
import * as TicketRepository from '../Infrastructure/ticket.repository'

export const getTickets = async () => {
    return await TicketRepository.GetTickets()
}

export const GetTicketById=async(idTicket: string)=>{
    const response = await TicketRepository.GetTicketById(idTicket)
    return response
}

export const postTickets = async (ticket: TicketDTO) => {
    const response = await TicketRepository.postTickets(ticket)
    if(response)
        return {
            message: "Ticket Agregado Correctamente",
            succeeded: true
        } as ServerResponseDto
    else
        return {
            message: "Se ha presentado un problema agregando el ticket",
            succeeded: false
        } as ServerResponseDto
};

export const SoftDeleteTicket = async(idTicket: string)=>{
    const response = await TicketRepository.SoftDeleteTicket(idTicket)
    if(response)
        return {
            message: "Ticket eliminado Correctamente",
            succeeded: true
        } as ServerResponseDto
    else
        return {
            message: "Se ha presentado un problema eliminando el ticket",
            succeeded: false
        } as ServerResponseDto
}

export const UpdateTicket =  async (updateTicket: TicketUpdateDto)=>{
    const response = await TicketRepository.UpdateTicket(updateTicket)
    if(response)
        return {
            message: "Ticket actualizado Correctamente",
            succeeded: true
        } as ServerResponseDto
    else
        return {
            message: "Se ha presentado un problema actualizando el ticket",
            succeeded: false
        } as ServerResponseDto
}

export const AddComment = async (addComment: TicketAddCommentDto) =>{
    const response = await TicketRepository.AddCommentTicket(addComment);
    if(response){
        return {
            message: "Comentario Agregado Correctamente",
            succeeded: true
        } as ServerResponseDto
    }
    else
    return {
        message: "Se ha presentado un problema agregando el comentario",
        succeeded: false
    } as ServerResponseDto
}

export const AddEvidenciaTicket = async (addEvidencia: TicketAddEvidenciaDto) =>{
    const response = await TicketRepository.AddEvidenciaTicket(addEvidencia);
    if(response){
        return {
            message: "Evidencia registrada correctamente",
            succeeded: true
        } as ServerResponseDto
    }
    else
    return {
        message: "Se ha presentado un problema registrando la evidencia",
        succeeded: false
    } as ServerResponseDto
}

export const ChangeStateTicket = async (updateState: TicketUpdateStateDto) =>{
    const response = await TicketRepository.ChangeStateTicket(updateState);
    if(response){
        return {
            message: "Estado del ticket actualizado correctamente",
            succeeded: true
        } as ServerResponseDto
    }
    else
    return {
        message: "Se ha presentado un problema actualizando el estado del ticket",
        succeeded: false
    } as ServerResponseDto
}
