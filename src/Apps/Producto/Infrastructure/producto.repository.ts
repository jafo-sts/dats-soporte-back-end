import connectMongo from "../../../Db/db";
import Ticket from '../../../Domain/Producto/ticket.schema'

export const GetProducts = async() => {
    try {

        const responseConnect = await connectMongo()
        
        if(responseConnect)
            return await Ticket.find()
        return null
    } catch (error) {
            console.log(error)
        return []
    }
}

export const PostTickets = async (tickets: Array<{ Nombre: string, Descripcion: string }>) => {
  try {
    const responseConnect = await connectMongo();

    if (responseConnect) {
      const responseTickets = await Ticket.insertMany(tickets);
      return responseTickets;
    } else {
      console.error('MongoDB connection failed.');
      return null;
    }
  } catch (error) {
    console.error('Error in PostTickets:', error);
    return [];
  }
};