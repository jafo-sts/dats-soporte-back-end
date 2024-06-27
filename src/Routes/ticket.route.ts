import { Router } from "express";
const router = Router()
import * as TicketController from '../Controllers/ticket.controller'

/// End Points para Ticket
router.get('/ticket',  TicketController.getTickets)
router.post('/ticket', TicketController.postTickets)

export default router
