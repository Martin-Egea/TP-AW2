import { getDataLS, deleteDataLS } from "../utils/localStorage.controller.js";

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

let contenedorProductos = document.getElementById('prodCartContainer')
let totalProductos = document.getElementById('totalCart')
let subTotalProductos = document.getElementById('subTotalCart')
const productosDeLS = getDataLS('carritoCompras')

function agregarProductosAContenedor(){
    let listaProductos = ''    
    console.log(productosDeLS)
    productosDeLS.forEach(e => {
        listaProductos += prodCarrito(e.nombre, e.desc, e.precio)
    });
    return listaProductos
}

function sumarTotalProductos(){
    let total = 0    
    productosDeLS.forEach(e => {
        total += parseInt(e.precio)
    })
    return total
}

window.addEventListener('load', ()=>{
    contenedorProductos.innerHTML = agregarProductosAContenedor()
    totalProductos.innerText = '$'+sumarTotalProductos()+5
    subTotalProductos.innerText = '$'+sumarTotalProductos()

})