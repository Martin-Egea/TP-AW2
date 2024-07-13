import { connectToDatabase } from "../connection.js";
import Sale from "../schemas/sales.schema.js";

export const newSale = async ({usuario, direccion, ciudad, pais, provincia, codPostal, telefono, productos})=>{
    try {
        await connectToDatabase()
        const res = await Sale.create({usuario, direccion, ciudad, pais, provincia, codPostal, telefono, productos})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findAll = async()=>{
    try {
        await connectToDatabase()
        const res = await Sale.find().populate({path:"usuario", select:"nombre apellido email"}).populate({path:"productos"})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findById = async(id)=>{
    try {
        await connectToDatabase()
        const res = await Sale.findById(id).populate({path:"usuario", select:"nombre apellido email"}).populate({path:"productos"})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findByUserId = async(id)=>{
    try {
        await connectToDatabase()
        const res = await Sale.find({usuario:id}).populate({path:"productos"})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}