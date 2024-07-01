import connectMongo from "../../../Db/db";
import { TicketModel } from "../../../Domain/Ticket/ticket.model";
import ticketSchema from "../../../Domain/Ticket/ticket.schema";
import Ticket from '../../../Domain/Ticket/ticket.schema'
import * as DatesRepository from "../../../Infrastructure/DateFormat.repository";
import { DictTicketStates, TicketAddCommentDto, TicketAddEvidenciaDto, TicketDTO, TicketUpdateDto, TicketUpdateStateDto } from "../Domain/ticket.dto";

export const GetTickets = async () => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.aggregate([
        {
          $match: {
            'isDelete': false
          }
        }, {
          $project: {
            descripcion: 1,
            evidencia: 1,
            estado: {
              $arrayElemAt: ["$estado", -1]
            },
            historial: {
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

export const GetTicketById= async (idTicket: string) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findById(idTicket) as TicketModel
    return null
  } catch (error) {
    return null
  }
}

export const postTickets = async (ticket: TicketDTO) => {
  try {
    const responseConnect = await connectMongo();
    if (responseConnect) {
      const responseAdd = new ticketSchema({
        descripcion: ticket.descripcion,
        estados: [
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
    return null
  }
}

export const AddCommentTicket = async (addcomment: TicketAddCommentDto) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findByIdAndUpdate(addcomment.id, {
        $push: {
          comentarios: { idusuario: "276c954cfb2d4b5681bd14cd6559cf9b", mensaje: addcomment.comment, fecha: DatesRepository.DateTimeNowUtc() }
        }
      })
    return null
  } catch (error) {
    return null
  }
}

export const AddEvidenciaTicket = async (addEvidencia: TicketAddEvidenciaDto) => {
  try {
    const responseConnect = await connectMongo()
    if (responseConnect)
      return await Ticket.findByIdAndUpdate(addEvidencia.id, {
        $push: {
          evidencia: { url: addEvidencia.url, descripcion: addEvidencia.descripcion, fecha: DatesRepository.DateTimeNowUtc() }
        }
      })
    return null
  } catch (error) {
    return null
  }
}

export const ChangeStateTicket = async(updateState: TicketUpdateStateDto) => {
  try {
    const responseConnect = await connectMongo()
    //encontrar el estado actual
    const ticket:TicketModel | null= await GetTicketById(updateState.id)
    //buscar si el estado actual permite el nuevo estado
    const estadoactual = ticket?.estado.pop()?.estado ?? ""
    const validstate = flowstates[estadoactual].find(x => x == updateState.nuevoEstado)
    //actualizar estado o devolver false

    if(validstate)
    {
      const response = await Ticket.findByIdAndUpdate(updateState.id, {
        $push: {
          estado: { idusuario: "276c954cfb2d4b5681bd14cd6559cf9b", estado: updateState.nuevoEstado, mensaje: "",fecha: DatesRepository.DateTimeNowUtc() }
        }
      })
      return true
    } 
    return false 
  } catch (error) {
    console.log(error)
    return false
  }
}

const flowstates: DictTicketStates = {
  CRE: ["REV"],
  REV: ["PEN", "FIN", "CER", "DEL", "RES"],
  PEN: ["FIN", "CER", "DEL", "RES"],
  FIN: ["CER", "DEL"],
  CER: ["DEL"],
}