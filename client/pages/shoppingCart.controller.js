import { getDataLS, deleteDataLS } from "../utils/localStorage.controller.js";
import { getLastSale, newSale } from "../api/ventas.api.js";

const prodCarrito = (nombre, descripcion, precio, imagen )=>{
    return `
    <div class="flex items-center mb-4">
    <img class="w-16 h-16 object-cover mr-4" src="https://via.placeholder.com/64">
    <div>
        <h3 class="text-lg font-medium line-clamp-2">${nombre}</h3>
        <p class="text-gray-600 line-clamp-3">${descripcion}</p>
        <p class="text-gray-900 text-right">$${precio}</p>
    </div>
</div> 
    `
}

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
        let id = await getLastSale()
        let id_usuario = JSON.parse(sessionStorage.getItem('user')).id
        let fecha = `${año}-${mes}-${día}`
        let total = (sumarTotalProductos()+5).toFixed(2)
        let direccion = document.getElementById('destination').value
        let productos = []
        
        productosDeLS.forEach(e => {
            productos.push(e.id)
        })
        if(id != '' && id_usuario != '' && total != '' && direccion != '' && productos != ''){
            
            newSale({id,id_usuario,fecha,total,direccion,productos})
            deleteDataLS('carritoCompras')
            limpiarCampos()         
            //Notificación de API Toastify
            Toastify({
                text: "Orden de compra Realizada!",
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
    })
 

})

//Funcion para limpiar campos del formulario de orden de compra!
function limpiarCampos(){
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('destination').value = '';
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
    document.getElementById('state').value = '';
    document.getElementById('postalCode').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    document.getElementById('totalCart').innerHTML = '$0.00';
    document.getElementById('subTotalCart').innerHTML = '$0.00';

    document.getElementById('prodCartContainer').innerHTML = '';
}