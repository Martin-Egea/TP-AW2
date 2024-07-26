import { API } from "./api.js"

export const updateUserById = async(id, {nombre, apellido, email})=>{
    try {
        const res = await fetch(`${API}/user/updateUser/${id}`,{
            method: 'PATCH', 
            body: JSON.stringify({nombre, apellido, email}),
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