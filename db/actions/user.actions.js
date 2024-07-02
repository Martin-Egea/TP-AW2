import { connectToDatabase } from "../connection.js";
import User from "../schemas/user.schema.js";

export const newUser = async({nombre, apellido, email, password, roll}) =>{

    try {
        await connectToDatabase()
        const res = await User.create({nombre, apellido, email, password, roll})   
        //console.log(res)     
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findAll = async()=>{
    try {
        await connectToDatabase()
        const res = await User.find()
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = async(email)=>{
    try {
        await connectToDatabase()
        const res = await User.findOne({ email })
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}