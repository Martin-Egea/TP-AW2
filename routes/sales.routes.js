import { Router } from "express";
import { newSale, findAll, findById, findByUserId } from "../db/actions/sales.actions.js";

const router = Router()

//Traer a todas las ventas
router.get('/all', async(req,res)=>{
    try {
        const result = await findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//Crear una nueva venta
router.post('/newSale', async(req,res)=>{
    const {usuario, direccion, ciudad, pais, provincia, codPostal, telefono, productos} = req.body
    //console.log({usuario, direccion, ciudad, pais, provincia, codPostal, telefono, productos})

    try {
        const result = await newSale({usuario, direccion, ciudad, pais, provincia, codPostal, telefono, productos})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//traer una venta por id
router.get('/porid/:id', async(req,res)=>{
    const id = req.params.id
    try {
        const result = await findById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//traer una venta por id de usuario
router.get('/poriduser/:id', async(req,res)=>{
    const id = req.params.id
    try {
        const result = await findByUserId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

export default router