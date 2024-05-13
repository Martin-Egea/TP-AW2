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

//obtener usuario por ID
router.get('/byId/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const result = userData.find(e => e.id === id)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`Usuario con el id: ${id} no se encuentra`)
    }
})

//modificar contraseña de usuario por ID
router.put('/update/:userID', (req,res)=>{
    const user_id = req.params.userID
    const new_user_pass = req.body.password

    try{
        const index = userData.findIndex(e => e.id == user_id)
        if(index != -1){
            userData[index].password = new_user_pass
            writeFile('./data/usuarios.json', JSON.stringify(userData,null,2))
            res.status(200).json('Contraseña actualizada!')
        }else{
            res.status(400).json('no se encontro el usuario')
        }
    }catch(error){
        res.send(500).json(`Error al actualizar la contraseña`)
    }
})

//Eliminar usuario por ID
router.delete('/delete/:userID', (req, res)=>{
    const user_id = req.params.userID
    
    try{
        const index = userData.findIndex(e => e.id == user_id)

        if(index != -1){
            userData.splice(index,1)
            writeFile('./data/usuarios.json', JSON.stringify(userData,null,2))
            res.status(200).json('usuario eliminado')
        }else{
            res.status(400).json('no se encontro el usuario')
        }
    }catch(error){
        res.send(500).json('Error al intentar eliminar un usuario')
    }
})

export default router