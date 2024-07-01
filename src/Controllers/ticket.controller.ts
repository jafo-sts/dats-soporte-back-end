import { Request, Response } from "express"
import * as TicketService from '../Apps/Ticket/Applications/ticket.service'
import { TicketAddCommentDto, TicketAddEvidenciaDto, TicketDTO, TicketUpdateDto, TicketUpdateStateDto } from "../Apps/Ticket/Domain/ticket.dto"

export const getTickets = async (req: Request, res: Response) => {
    const responseTickets = await TicketService.getTickets()
    return res.status(200).json(responseTickets)
}

export const GetTicketById = async (req: Request, res: Response) => {
    const uuidSearch: string = String(req.params["uuidSearch"]) ?? ""
    const responseTickets = await TicketService.GetTicketById(uuidSearch)
    return res.status(200).json(responseTickets)
}
export const postTickets = async (req: Request, res: Response) => {
    const ticket: TicketDTO = req.body
    const responseAdd = await TicketService.postTickets(ticket)

    if(responseAdd)
        return res.status(200).json(responseAdd)
    else
        return res.status(400).json(responseAdd)
}

export const SoftDeleteTicket= async(req: Request, res: Response)=>{
    const uuidSearch: string = String(req.params["uuidSearch"]) ?? ""
    const responseTickets = await TicketService.SoftDeleteTicket(uuidSearch)
    return res.status(200).json(responseTickets)
}

export const UpdateTicket = async(req: Request, res: Response)=>{
    const updateTicket: TicketUpdateDto = req.body
    const responseTickets = await TicketService.UpdateTicket(updateTicket)
    return res.status(200).json(responseTickets)
}

export const AddComment = async(req: Request, res: Response)=>{
    const updateTicket: TicketAddCommentDto = req.body
    const responseTickets = await TicketService.AddComment(updateTicket)
    if(responseTickets)
        return res.status(200).json(responseTickets)
    return res.status(400).json(responseTickets)
}
export const AddEvidencia = async(req: Request, res: Response)=>{
    const updateTicket: TicketAddEvidenciaDto = req.body
    const responseTickets = await TicketService.AddEvidenciaTicket(updateTicket)
    if(responseTickets)
        return res.status(200).json(responseTickets)
    return res.status(400).json(responseTickets)
}
export const UpdateState = async(req: Request, res: Response)=>{
    const updateTicket: TicketUpdateStateDto = req.body
    const responseTickets = await TicketService.ChangeStateTicket(updateTicket)
    if(responseTickets)
        return res.status(200).json(responseTickets)
    return res.status(400).json(responseTickets)
}
