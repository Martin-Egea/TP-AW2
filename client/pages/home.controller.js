import { allProduct, productById } from "../api/product.api.js";
import { productCard } from "../components/productCard.js";
import { setDataLS, getDataLS } from "../utils/localStorage.controller.js";


window.addEventListener('load', async ()=>{
    const productGrid = document.getElementById('productGrid')
    const productData = await allProduct()

    let acuProductCards = ''
    productData.forEach(e => {
        acuProductCards += productCard(e.id, e.nombre, e.desc, e.precio, e.imagen)
    });
    productGrid.innerHTML = acuProductCards

    const addTuCartButtons = document.querySelectorAll('.addToCartButton')

    //Cargar producto al LocalStorage para luego usarlo en el carrito!!
    let itemsLS = getDataLS('carritoCompras')

    addTuCartButtons.forEach(button =>{
        button.addEventListener('click', async (e)=>{
            const ButtonID = e.currentTarget.id

            //hago la petición del producto por ID y la agrego al carrito de compras
            const producto = await productById(ButtonID)  
            
            itemsLS.push(producto)
            setDataLS('carritoCompras', itemsLS)
        })
    })

})