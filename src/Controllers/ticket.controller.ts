import { Request, Response } from "express"
import * as TicketService from '../Apps/Ticket/Applications/ticket.service'
import TicketSchema from "../Domain/Ticket/ticket.schema"
import ticketSchema from "../Domain/Ticket/ticket.schema"

export const getTickets = async (req: Request, res: Response) => {
    const responseTickets = await TicketService.getTickets()
    return res.status(200).json(responseTickets)
}


export const postTickets = async (req: Request, res: Response) => {
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
