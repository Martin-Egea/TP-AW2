import { API } from "./api.js";

//generar orden de venta!
export const newSale = async(newSaleData)=>{
    try {
        const res = await fetch(`${API}/sales/newSale`, {
            method: 'POST',
            body: JSON.stringify(newSaleData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res

    } catch (error) {
        console.log(error)
    }
}

//Obtener ultima venta
export const getLastSale = async()=>{
    try {
        const res = await fetch(`${API}/sales/lastSaleID`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

//Obtener la venta por id
export const getSaleById = async(id)=>{
    try {
        const res = await fetch(`${API}/sales/porid/${id}`,{
            method: 'GET',
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

//Obtener las ventas del usuario por id
export const getUserSaleById = async(id)=>{
    try {
        const res = await fetch(`${API}/sales/poriduser/${id}`,{
            method: 'GET',
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