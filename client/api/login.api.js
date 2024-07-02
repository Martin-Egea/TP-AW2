import { API } from "./api.js";

export const logIn = async(email, pass)=>{
    try {
        const response = await fetch(`${API}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email,pass}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        
        return data

    }catch(error){
        console.log(error)
        return {status:false}
    }
}

export const decodeToken = async(token)=>{
    try {
        const response = await fetch(`${API}/user/decodeToken`, {
            method: 'POST',
            body: JSON.stringify({token}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        
        return data

    }catch(error){
        console.log(error)
        return {status:false}
    }
}

export const newUser = async(nombre, apellido, email, password)=>{
    try {
        const res = await fetch(`${API}/user/newUser`,{
            method: 'POST',
            body: JSON.stringify({nombre, apellido, email, password}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res

    } catch (error) {
        console.log(error)
    }
}