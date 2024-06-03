import { API } from "./api.js";

//crea un nuevo producto
export const newProduct = async(newProductData)=>{
    try {
        const res = await fetch(`${API}/product/newProduct`,{
            method: 'POST',
            body: JSON.stringify(newProductData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res

    } catch (error) {
        console.log(error)
    }
}

//trae todos los productos
export const allProduct = async()=>{
    try {
        const res = await fetch(`${API}/product/all`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
       
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

//trae un producto por ID
export const productById = async(idProduct)=>{
    try {
        const res = await fetch(`${API}/product/porid/${idProduct}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if(data){
            return data
        }
        
    } catch (error) {
        console.log(error)
    }
}