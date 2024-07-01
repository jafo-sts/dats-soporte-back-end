import { Router } from "express";
const router = Router()
import * as TicketController from '../Controllers/ticket.controller'

/// End Points para Ticket
router.get('/ticket',  TicketController.getTickets)
router.post('/ticket', TicketController.postTickets)
router.put('/ticket', TicketController.UpdateTicket)
router.get('/ticket/:uuidSearch',TicketController.GetTicketById)
router.delete('/ticket/:uuidSearch',TicketController.SoftDeleteTicket)

router.post('/ticket/comments', TicketController.AddComment)
router.post('/ticket/evidencia', TicketController.AddEvidencia)
router.post('/ticket/state', TicketController.UpdateState)

export default router
