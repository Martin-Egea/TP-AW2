import { API } from "./api.js";

export const logIn = async(email, password)=>{
    try {
        const response = await fetch(`${API}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email,password}),
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