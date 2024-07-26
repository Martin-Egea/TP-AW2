import { allProduct, productById } from "../../api/product.api.js";
import { productCard } from "../../components/productCard.js";
import { setDataLS, getDataLS } from "../../utils/localStorage.controller.js";

const priceButton = document.getElementById('priceSearchBtn')
window.addEventListener('load', async ()=>{    
    
    //Cargar API de productos
    const productGrid = document.getElementById('productGrid')
    const productData = await allProduct()
    
    /* 
    Toastify({
        text: "Bienvenido al sistema!",
        duration: 3000,
        destination: "",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #8044C1, #0054D6)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    */

    //cargar todos los cards de productos!!
    let acuProductCards = ''
    productData.forEach(e => {
        acuProductCards += productCard(e._id, e.nombre, e.desc, e.precio, e.imagen)
    });
    productGrid.innerHTML = acuProductCards

    //Filtro cards de productos por precio!!
    priceButton.addEventListener('click', ()=>{
        let inputSearch = parseFloat(document.getElementById('productSearch').value)        
        let auxCardsConFiltro = ''
        //filtro por precio menor que!
        productData.forEach(e => {
            if(e.precio <= inputSearch && inputSearch != ''){
                auxCardsConFiltro += productCard(e._id, e.nombre, e.desc, e.precio, e.imagen)                
            }              
        });        
        //si no encuentra nada se iguala a la lista de productos completa!
        if(auxCardsConFiltro == ''){
            Toastify({
                text: "¡No se encontraron productos!",
                duration: 3000,
                destination: "",
                newWindow: false,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #A24FFF, #7E4DB4)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            auxCardsConFiltro = acuProductCards
        }
        productGrid.innerHTML = auxCardsConFiltro
        
    })

    let addTuCartButtons = document.querySelectorAll('.addToCartButton')

    //Cargar producto al LocalStorage para luego usarlo en el carrito!!
    let itemsLS = getDataLS('carritoCompras')

    addTuCartButtons.forEach(button =>{
        button.addEventListener('click', async (e)=>{
            const ButtonID = e.currentTarget.id
            
            //hago la petición del producto por ID y la agrego al carrito de compras
            const producto = await productById(ButtonID)  
            
            itemsLS.push(producto)
            setDataLS('carritoCompras', itemsLS)

            //Notificación de API de agregado al carrito
            Toastify({
                text: "¡Producto agregado al carrito!",
                duration: 3000,
                destination: "../shoppingCart/shoppingCart.html",
                newWindow: false,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #3D2194, #448FFC)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        })
    })

    //cambiar la barra de navegación activa
    const activePage = document.getElementById('navProductList')
    const activePage2 = document.getElementById('navProductList2')
    activePage.className = 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
    activePage2.className = 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
})