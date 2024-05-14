import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const salesFile = await readFile('./data/ventas.json', 'utf-8')
const salesData = JSON.parse(salesFile)

const router = Router()

//Constulta de una venta desde, hasta
router.post('/venta', (req, res)=>{
    const sales_from = req.body.desde
    const sales_to = req.body.hasta

    const result = salesData.filter(e => e.fecha >= sales_from && e.fecha <= sales_to)

    try{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(400).json(`No se encontraron ventas entre ${sales_from} y ${sales_to}`)
        }
    }catch(error){
        res.send(500).json('Error al consultar las ventas')
    }
})

//Borrar una venta
router.delete('/delete/:salesID', (req, res)=>{
    const sales_id = req.params.salesID
    
    try{
        const index = salesData.findIndex(e => e.id == sales_id)

        if(index != -1){
            salesData.splice(index,1)
            writeFile('./data/ventas.json', JSON.stringify(salesData,null,2))
            res.status(200).json(`la venta con el ID: ${sales_id} fue eliminada`)
        }else{
            res.status(400).json(`no se encontro la venta con el id: ${sales_id}`)
        }
    }catch(error){
        res.send(500).json('Error al borrar una venta')
    }
})

export default router