import express, {Express} from 'express'
import cors from 'cors'
import Producto from './Routes/producto.route'
import dotenv from 'dotenv'

const app: Express = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/api', Producto)


export default app