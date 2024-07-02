import { getDataLS, deleteDataLS } from "../../utils/localStorage.controller.js";
import { newSale } from "../../api/ventas.api.js";
import { prodCarrito } from "../../components/shoppingCartLst.js";
import { decodeToken } from "../../api/login.api.js";

const fechaActual = new Date();
let año = fechaActual.getFullYear();
let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son de 0-11, por eso se suma 1
let día = fechaActual.getDate().toString().padStart(2, '0'); // Y padStart para asegurar que siempre tenga 2 dígitos

let contenedorProductos = document.getElementById('prodCartContainer')
let totalProductos = document.getElementById('totalCart')
let subTotalProductos = document.getElementById('subTotalCart')
const productosDeLS = getDataLS('carritoCompras')

const BotonConfirmarCompra = document.getElementById('confirmButton')

function agregarProductosAContenedor(){
    let listaProductos = ''
    productosDeLS.forEach(e => {
        listaProductos += prodCarrito(e.nombre, e.desc, e.precio)
    });
    return listaProductos
}

function sumarTotalProductos(){
    let total = 0    
    productosDeLS.forEach(e => {
        total += parseFloat(e.precio)
    })
    return total
}

window.addEventListener('load', ()=>{
    contenedorProductos.innerHTML = agregarProductosAContenedor()
    totalProductos.innerText = '$'+(sumarTotalProductos()+5).toFixed(2)
    subTotalProductos.innerText = '$'+sumarTotalProductos().toFixed(2)

    //Confirmación de la orden de compra y envío al back-end
    BotonConfirmarCompra.addEventListener('click', async ()=>{
        //variables del body para la carga de una orden de compra
        
        const token = sessionStorage.getItem('user')
        const usuario = await decodeToken(token)
        
        const direccion = document.getElementById('destination').value
        const ciudad = document.getElementById('city').value
        const pais = document.getElementById('country').value
        const provincia = document.getElementById('state').value
        const codPostal = parseInt(document.getElementById('postalCode').value)
        const telefono = document.getElementById('phone').value
        let productos = []

        productosDeLS.forEach(e => {
            productos.push(e._id)
        })
        if(usuario != '' && direccion != '' && ciudad != '' && pais != '' && provincia != '' && codPostal != ''&& telefono != '' && productos != []){
            
            newSale({usuario: usuario._id, direccion, ciudad, pais, provincia, codPostal, telefono, productos})
            deleteDataLS('carritoCompras')
                    
            //Notificación de API Toastify
            Toastify({
                text: "¡Orden de compra Realizada!",
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
              limpiarCampos() 
              
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
    })
 

})

//Funcion para limpiar campos del formulario de orden de compra!
function limpiarCampos(){
    
    document.getElementById('destination').value = '';
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
    document.getElementById('state').value = '';
    document.getElementById('postalCode').value = '';
    document.getElementById('phone').value = '';

    document.getElementById('totalCart').innerHTML = '$0.00';
    document.getElementById('subTotalCart').innerHTML = '$0.00';

    document.getElementById('prodCartContainer').innerHTML = '';
}