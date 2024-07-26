import { decodeToken } from "../../api/login.api.js";
import { getUserSaleById } from "../../api/ventas.api.js";
import { userSalesInfoComponent } from "../../components/userSalesInfo.js";

let userName = document.getElementById('userName')
let salesContainer = document.getElementById('infoUserSales')

window.addEventListener('load', async()=>{

    const token = sessionStorage.getItem('user') //obtengo el token del usuario
    const user = await decodeToken(token) //decodifico el token
    
    userName.innerHTML = user.nombre + ' ' + user.apellido //muestro el nombre del usuario en el html

    const userSalesData = await getUserSaleById(user._id) //obtengo las ventas del usuario como un array

    //limpio el contenedor de las ventas del usuario y cargo las ventas.
    salesContainer.innerHTML = ''
    let nVenta = 1
    userSalesData.forEach(e => {
        salesContainer.innerHTML += userSalesInfoComponent(nVenta, e.direccion, e.ciudad, e.pais, e.provincia, e.codPostal, e.telefono, e.productos, e.createdAt, e.updatedAt)        
        nVenta++
    });

    //cambiar la barra de navegación activa
    const activePage = document.getElementById('navSalesHistory')
    const activePage2 = document.getElementById('navSalesHistory2')
    activePage.className = 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
    activePage2.className = 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
        
})
