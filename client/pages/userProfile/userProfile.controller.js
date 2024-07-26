import { decodeToken } from "../../api/login.api.js";
import { updateUserById } from "../../api/user.api.js";


const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const roll = document.getElementById('roll')

window.addEventListener('load', async()=>{
    const token = sessionStorage.getItem('user')
    const usuario = await decodeToken(token)
    
    nombre.value = usuario.nombre
    apellido.value = usuario.apellido
    email.value = usuario.email
    roll.value = (usuario.roll ==1) ? 'Administrador' : 'Cliente'
})

window.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const token = sessionStorage.getItem('user')
    const usuario = await decodeToken(token)
    const id = usuario._id
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const res = await updateUserById(id, {nombre, apellido, email})
    console.log(res)

    if(res){
        Toastify({
            text: "¡Perfil de usuario actualizado, vuelva a iniciar sesión para ver los cambios!",
            duration: 3000,
            destination: "",
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #088402, #448FFC)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        
        setTimeout(function() {        
        window.location.href = "http://localhost:3001";
        sessionStorage.clear();
        }, 5000);
    }
})

