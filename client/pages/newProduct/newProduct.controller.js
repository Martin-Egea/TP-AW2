import { newProduct } from "../../api/product.api.js";
import { newProductList } from "../../components/newProductList.js";
import { decodeToken } from "../../api/login.api.js";

const BtnCargar = document.getElementById('btnCargar')
let listaDeNuevosProductos = document.getElementById('prodTableID')
const tableContainer = document.getElementById('tableContainer')

window.addEventListener('load', ()=>{
    listaDeNuevosProductos.innerHTML = ''
    let numero = 1;
    

    BtnCargar.addEventListener('click', async(e)=>{
        e.preventDefault()

        const token = sessionStorage.getItem('user')
        const usuario = await decodeToken(token)

        //valores para carga de un nuevo producto
        let nombre = document.getElementById('name').value
        let desc = document.getElementById('productDesc').value
        let precio = document.getElementById('precio').value
        let imagen = document.getElementById('productImg').value

        //verificar si es admin: roll=1
        if(usuario.roll == 1){
            //verifica si los campos no estan vacios
            if(nombre != '' && desc != '' && precio != '' && imagen != ''){
                newProduct(nombre, desc, precio, imagen)
                limpiarCampos()            
                let ultimoProducto = newProductList(numero, nombre, desc, precio, imagen)            
                listaDeNuevosProductos.innerHTML += ultimoProducto
                numero++                 
                
                Toastify({
                    text: "¡Nuevo producto agregado!",
                    duration: 3000,
                    destination: "",
                    newWindow: false,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #088402, #448FFC)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();      
            }
            else{
                Toastify({
                    text: "¡Todos los campos son obligatorios!",
                    duration: 3000,
                    destination: "",
                    newWindow: false,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #FF0000, #910303)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            }

        }else{
            Toastify({
                text: "¡Solo los administradores pueden agregar nuevos productos!",
                duration: 3000,
                destination: "",
                newWindow: false,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #FF0000, #910303)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
                
        
    })

    tableContainer.className += " animate-fade-left"
    //cambiar la barra de navegación activa
    const activePage = document.getElementById('navNewProduct')
    const activePage2 = document.getElementById('navNewProduct2')
    activePage.className = 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
    activePage2.className = 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
})

function limpiarCampos(){
    document.getElementById('name').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('productImg').value = '';
}