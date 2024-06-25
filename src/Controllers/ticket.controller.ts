import { Request, Response } from "express"
import * as TicketService from '../Apps/Ticket/Applications/ticket.service'
import TicketSchema from "../Domain/Ticket/ticket.schema"

export const getTickets = async (req: Request, res: Response) => {
    const responseTickets = await TicketService.getTickets()
    return res.status(200).json(responseTickets)
}

export const postTickets = async (req: Request, res: Response) => {
    try { 
      const ticket =  new TicketSchema(req.body);
      console.log(ticket);
      if (ticket.nombre == "" || ticket.descripcion == "") {
        return res.status(400).json({ message: "Los campos nombre y descripción son obligatorios" });
      }
      const responseTickets = await TicketService.postTickets(ticket);
      return res.status(201).json(responseTickets);
    } catch (error) {
      console.error('Error en PostTickets:', error);
      return res.status(500).json({ message: "Error insertando tickets" });
    }
  };