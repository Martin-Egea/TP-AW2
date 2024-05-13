import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const fileUsers = await readFile('./data/usuarios.json','utf-8')
const userData = JSON.parse(fileUsers)

const router = Router()

//Login de usuarios
router.post('/login', (req, res)=>{
    const userEmail = req.body.email
    const pass = req.body.password

    const result = userData.find(e => e.email === userEmail && e.password ===pass)

    if(result){
        res.status(200).json(`Bienvenido: ${result.nombre}`)
    }else{
        res.status(400).json(`${userEmail} no se encuentra`)
    }
})

router.get('/byId/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const result = userData.find(e => e.id === id)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`Usuario con el id: ${id} no se encuentra`)
    }
})

export default router