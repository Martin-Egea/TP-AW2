import { logIn } from "./api/login.api.js";
const formLogIn = document.getElementById("logInForm")
const error = document.getElementById("error")

formLogIn.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value
    const res = await logIn(email, password)

    if(res.status){
        console.log(res)
        sessionStorage.setItem('user', JSON.stringify(res))
        window.location.href = "./pages/home.html"
    }else{
        error.textContent = "Error al loguear el usuario!"
    }
    
})