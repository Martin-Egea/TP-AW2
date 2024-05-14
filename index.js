import express from 'express'
import { readFile } from 'fs/promises'
import { obtener_usuarios } from './utils/funciones.js'

import userRouter from './routes/usuarios.routes.js'
import productRouter from './routes/productos.routes.js'
import salesRouter from './routes/ventas.routes.js'

const app = express()
const port = 3001

app.listen(port, ()=>{
    console.log(`Servidor levantado en el puerto: ${port}`)
})

app.use(express.json())
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/sales', salesRouter)

//const productos = JSON.parse(await readFile('./data.productos.json'))
//const usuarios = JSON.parse(await readFile('./data/usuarios.json')) 
//const ventas = JSON.parse(await readFile('./data.ventas.json')) 

//const usuarioPorNombre = obtener_usuarios(usuarios, "")

//console.log(usuarios)
//console.log(usuarioPorNombre)

