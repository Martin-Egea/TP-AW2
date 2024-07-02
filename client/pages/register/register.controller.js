import { newUser } from "../../api/login.api.js";

const registerForm = document.getElementById('registerForm')

const error = document.getElementById("error")

registerForm.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value

    const res = await newUser(nombre, apellido, email, password)

    if(res){        
        window.location.href = "http://localhost:3001"
    }else{
        error.textContent = "Error al registrar el usuario!"
    }
    
})