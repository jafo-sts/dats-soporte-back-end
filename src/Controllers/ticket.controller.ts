import { Request, Response } from "express"
import * as TicketService from '../Apps/Ticket/Applications/ticket.service'
import { TicketDTO } from "../Apps/Ticket/Domain/ticket.dto"

export const getTickets = async (req: Request, res: Response) => {
    const responseTickets = await TicketService.getTickets()
    return res.status(200).json(responseTickets)
}

export const postTickets = async (req: Request, res: Response) => {
    const ticket: TicketDTO = req.body
    const responseAdd = await TicketService.postTickets(ticket)

    if(responseAdd)
      return res.status(200).json(responseAdd)
}