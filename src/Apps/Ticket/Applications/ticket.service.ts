import ticketSchema from "../../../Domain/Ticket/ticket.schema"
import { ServerReponseDto } from "../Domain/ServerResponse/ServerResponseDto"
import { TicketDTO } from "../Domain/ticket.dto"
import * as TicketRepository from '../Infrastructure/ticket.repository'

export const getTickets = async () => {
    return await TicketRepository.getProducts()
}

export const postTickets = async (ticket: TicketDTO) => {
    return await TicketRepository.postTickets(ticket)
};