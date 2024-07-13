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
    userSalesData.forEach(e => {
        salesContainer.innerHTML += userSalesInfoComponent(e.direccion, e.ciudad, e.pais, e.provincia, e.codPostal, e.telefono, e.productos, e.createdAt, e.updatedAt)        
    });

        
})
