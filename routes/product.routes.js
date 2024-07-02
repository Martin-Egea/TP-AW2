import { Router } from "express";
import { newProduct, findAll, findById } from "../db/actions/product.actions.js";

const router = Router()

//Traer todos los productos
router.get('/all', async(req,res)=>{
    try {
        const result = await findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//Crear nuevo producto
router.post('/newProduct', async(req,res)=>{
    const {nombre, desc, precio, imagen} = req.body
    
    try {
        const result = await newProduct({nombre, desc, precio, imagen})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//Buscar producto por ID
router.get('/porid/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const result = await findById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

export default router