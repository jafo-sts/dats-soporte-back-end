import express, {Express} from 'express'
import cors from 'cors'
import Producto from './Routes/producto.route'


const app: Express = express()

app.use(cors())
app.use(express.json())
app.use('/api', Producto)

export default app