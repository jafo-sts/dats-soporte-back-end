import ticketSchema from "../../../Domain/Producto/ticket.schema"
import { ServerReponseDto } from "../../../Domain/ServerResponse/ServerResponseDto"
import { Ticketdto } from "../Domain/ticket.dto"
import * as CtrlRepository from '../Infrastructure/producto.repository'

export const GetProductos = async () => {
    return await CtrlRepository.GetProducts()
}

export const PostTickets = async (tickets: Array<{ Nombre: string, Descripcion: string }>) => {
    for (const ticket of tickets) {
        if (!ticket.Nombre || !ticket.Descripcion) {
            throw new Error("Cada ticket debe tener un nombre y una descripción.");
        }
    }

    try {
        return await CtrlRepository.PostTickets(tickets);
    } catch (error) {
        console.error('Error en PostTickets:', error);
        throw new Error("Error insertando tickets");
    }
};