import express from 'express'

import userRouter from './routes/usuarios.routes.js'
import productRouter from './routes/productos.routes.js'
import salesRouter from './routes/ventas.routes.js'

const app = express()
const port = 3001

app.listen(port, ()=>{
    console.log(`Servidor levantado en el puerto: ${port}`)
})

app.use(express.json())
app.use(express.static('./client'))
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/sales', salesRouter)

