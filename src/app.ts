import express, {Express} from 'express'
import cors from 'cors'
import Ticket from './Routes/ticket.route'


const app: Express = express()

app.use(cors())
app.use(express.json())
app.use('/api', Ticket)

export default app