import { Router } from "express";
const router = Router()
import * as TicketController from '../Controllers/ticket.controller'

/// End Points para Ticket
router.get('/ticket',  TicketController.getTickets)
router.post('/ticket', TicketController.postTickets)
router.get('/ticket/:uuidSearch',TicketController.GetTicketById)

export default router
