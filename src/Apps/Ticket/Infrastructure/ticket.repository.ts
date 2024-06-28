import connectMongo from "../../../Db/db";
import ticketSchema from "../../../Domain/Ticket/ticket.schema";
import Ticket from '../../../Domain/Ticket/ticket.schema'
import * as DatesRepository from "../../../Infrastructure/DateFormat.repository";
import { TicketDTO, TicketUpdateDto } from "../Domain/ticket.dto";

export const GetTickets = async () => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.aggregate([
        {
          $match:{
            'isDelete': false
          }
        },{
          $project:{
            descripcion: 1,
            status:{
              $arrayElemAt: ["$status", -1]
            },
            historial:{
              $arrayElemAt: ["$historial", -1]
            }
          }
        }])
    return null
  } catch (error) {
    console.log(error)
    return []
  }
}

export const GetTicketById = async (idTicket: string) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findById(idTicket)
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
          { idusuario: "276c954cfb2d4b5681bd14cd6559cf9b", estado: "CRE", mensaje: "", fecha: DatesRepository.DateTimeNowUtc() }
        ],
        historial: [
          { idusuario: "276c954cfb2d4b5681bd14cd6559cf9b", movimiento: "CREA", mensaje: "", fecha: DatesRepository.DateTimeNowUtc() }

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

export const SoftDeleteTicket = async (idTicket: string) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findByIdAndUpdate(idTicket, { isDelete: true })
    return null
  } catch (error) {
    return []
  }
}

export const UpdateTicket = async (updateTicket: TicketUpdateDto) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findByIdAndUpdate(updateTicket.id, {
        descripcion: updateTicket.descripcion,
        $push: {
          historial: { idusuario: "276c954cfb2d4b5681bd14cd6559cf9b", movimiento: "Actualizacion", mensaje: "", fecha: DatesRepository.DateTimeNowUtc() }
        }
      })
    return null
  } catch (error) {
    return []
  }
}