import { Request, Response } from "express"
import * as TicketService from '../Apps/Ticket/Applications/ticket.service'
<<<<<<< HEAD
import TicketSchema from "../Domain/Ticket/ticket.schema"
import ticketSchema from "../Domain/Ticket/ticket.schema"
=======
import { TicketDTO, TicketUpdateDto } from "../Apps/Ticket/Domain/ticket.dto"
>>>>>>> 500f7632631a13e2c48a65a38293f8c8997d5512

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
<<<<<<< HEAD
  try {
      const { descripcion, status, evidencias, comentarios } = req.body;

      // Validate required fields
      if (!descripcion || !status || !Array.isArray(status) || status.length === 0) {
          return res.status(400).json({ message: "Los campos descripción y status son obligatorios" });
      }

      if (!evidencias || !Array.isArray(evidencias) || evidencias.length === 0) {
          return res.status(400).json({ message: "El campo evidencias es obligatorio y debe contener al menos una evidencia" });
      }

      if (!comentarios || !Array.isArray(comentarios) || comentarios.length === 0) {
          return res.status(400).json({ message: "El campo comentarios es obligatorio y debe contener al menos un comentario" });
      }

      const ticket = new ticketSchema(req.body);
      const responseTickets = await TicketService.postTickets(ticket);

      return res.status(201).json(responseTickets);
  } catch (error) {
      console.error('Error en PostTickets:', error);
      return res.status(500).json({ message: "Error insertando tickets" });
  }
};
=======
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
>>>>>>> 500f7632631a13e2c48a65a38293f8c8997d5512
