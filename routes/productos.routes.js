import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const productFile = await readFile('./data/productos.json', 'utf-8')
const productData = JSON.parse(productFile)

const router = Router()

//Obtener todos los productos
router.get('/all', async (req, res) => {
    try {
        res.status(200).json(productData)
    } catch (error) {
        console.log(error)
        readFile.status(400)
    }
})

//Constultar Productos por ID
router.get('/porid/:id', (req, res)=>{
    const product_id = req.params.id
    const result = productData.find(e => e.id == product_id)

    try{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(300).json('No se encontro el producto!')
        }
    }catch{
        res.send(500).json('Error al buscar el producto!')
    }
    
})
//Modificar Descripción de Productos por ID
router.put('/update/:productID', (req,res)=>{
    const product_id = req.params.productID
    const new_product_desc = req.body.desc

    try{
        const index = productData.findIndex(e => e.id == product_id)
        if(index != -1){
            productData[index].desc = new_product_desc
            writeFile('./data/productos.json', JSON.stringify(productData,null,2))
            res.status(200).json('Producto actualizado!')
        }else{
            res.status(400).json('no se encontro el producto')
        }
    }catch(error){
        res.send(500).json(`Error al actualizar el producto`)
    }
})

//Crear nuevo producto
router.post('/newProduct', (req, res) => {
    const {id,nombre,desc,precio,imagen} = req.body

    try {
        productData.push({id,nombre,desc,precio,imagen})
        writeFile('./data/productos.json', JSON.stringify(productData,null,2))
        res.status(200).json({status:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({status:false})
    }

})

export default router