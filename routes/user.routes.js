import { Router } from "express";
import { newUser, findAll, userLogin } from "../db/actions/user.actions.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = Router()

//Traer a todos los usuarios
router.get('/all', async(req,res)=>{
    try {
        const result = await findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

//Crear nuevo usuario
router.post('/newUser', async(req,res)=>{
    const {nombre, apellido, email, password} = req.body    

    try {
        const hashedPass = bcrypt.hashSync(password, 8)

        const result = await newUser({nombre, apellido, email, password:hashedPass})        
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json()
    }
})

router.post('/login', async(req,res)=>{
    const email = req.body.email
    const pass = req.body.pass

    try {        
        const result = await userLogin(email)
        //Controlo si encuentra un usuario
        if(!result){
            return res.status(404).send({status:false})
        }
        const controlPass = bcrypt.compareSync(pass, result.password)
        //controlo si la pass corresponde
        if(!controlPass){
            return res.status(401).send({status:false})
        }

        const token = jwt.sign({...result}, process.env.SECRET, {expiresIn: 86400} )

        res.status(200).json(token)
    } catch (error) {
        res.status(400).json()
    }
})

export default router