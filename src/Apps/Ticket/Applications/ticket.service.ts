import { ServerResponseDto } from "../../../Domain/ServerResponse/serverresponse.dto"
import { TicketModel } from "../../../Domain/Ticket/ticket.model"
import ticketSchema from "../../../Domain/Ticket/ticket.schema"
import { TicketDTO } from "../Domain/ticket.dto"
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