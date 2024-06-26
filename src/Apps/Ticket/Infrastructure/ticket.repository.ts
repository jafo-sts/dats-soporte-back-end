import connectMongo from "../../../Db/db";
import ticketSchema from "../../../Domain/Ticket/ticket.schema";
import Ticket from '../../../Domain/Ticket/ticket.schema'
import * as DatesRepository from "../../../Infrastructure/DateFormat.repository";
import { TicketDTO } from "../Domain/ticket.dto";

export const getProducts = async () => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.find()
    return null
  } catch (error) {
    return []
  }
}

export const postTickets = async (ticket: TicketDTO) => {
  try {
    const responseConnect = await connectMongo();
    if (responseConnect) {
      const responseAdd = new ticketSchema({
        descripcion: ticket.descripcion,
        status: [
          { nombre: "CRE", comentario: "", fecha: DatesRepository.DateTimeNowUtc() }
        ]
      })
      responseAdd.save()
      return responseAdd
    }
    return null
  } catch (error) {
    return null;
  }
}