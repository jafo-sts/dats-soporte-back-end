import { Request, Response } from "express"
import * as CtrlProducto from '../Apps/Producto/Applications/producto.service'
import ticketSchema from "../Domain/Producto/ticket.schema"

export const GetProductos = async (req: Request, res: Response) => {
    const responseProducts = await CtrlProducto.GetProductos()
    return res.status(200).json(responseProducts)
}

export const PostTickets = async (req: Request, res: Response) => {
    try { 
      const tickets = req.body.Ticket;
      const responseTickets = await CtrlProducto.PostTickets(tickets);
      return res.status(201).json(responseTickets);
    } catch (error) {
      console.error('Error en PostTickets:', error);
      return res.status(500).json({ message: "Error insertando tickets" });
    }
  };