import { Router } from "express";
import { newProduct, findAll } from "../db/actions/product.actions.js";

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

export default router