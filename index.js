import express from 'express'
import 'dotenv/config'

//Nuevas Rutas para MongoDB
import productRouter from './routes/product.routes.js';
import salesRouter from './routes/sales.routes.js';
import userRouter from './routes/user.routes.js';

const app = express()
app.use(express.json())
const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Servidor levantado en el puerto: ${port}`)
})


app.use(express.static('./client'))
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/sales', salesRouter)

