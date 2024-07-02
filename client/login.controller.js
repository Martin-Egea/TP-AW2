import { logIn } from "./api/login.api.js";
const formLogIn = document.getElementById("logInForm")
const error = document.getElementById("error")

formLogIn.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    const res = await logIn(email, pass)

    if(res.status != false){        
        sessionStorage.setItem('user', JSON.stringify(res))
        window.location.href = "./pages/home/home.html"
        console.log(res)
    }else{
        error.textContent = "Error al loguear el usuario!"
    }
    
})