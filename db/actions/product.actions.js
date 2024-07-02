import { connectToDatabase } from "../connection.js"
import Product from "../schemas/product.schema.js"

export const newProduct = async({nombre, desc, precio, imagen}) =>{

    try {
        await connectToDatabase()
        const res = await Product.create({nombre, desc, precio, imagen})  
        console.log(res)      
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findAll = async()=>{
    try {
        await connectToDatabase()
        const res = await Product.find()
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}

export const findById = async(id)=>{
    try {
        await connectToDatabase()
        const res = await Product.findById(id)
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}
