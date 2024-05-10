import { readFile } from 'fs/promises'
import { obtener_usuarios } from './utils/funciones.js'

//const productos = JSON.parse(await readFile('./data.productos.json'))
const usuarios = JSON.parse(await readFile('./data/usuarios.json')) 
//const ventas = JSON.parse(await readFile('./data.ventas.json')) 

const usuarioPorNombre = obtener_usuarios(usuarios, "")

console.log(usuarios)
//console.log(usuarioPorNombre)
