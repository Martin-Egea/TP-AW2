

export const productCard = (id,nombre,desc,precio,imagen)=>{
    return `
    <div class="bg-gray-700 max-w-sm rounded overflow-hidden shadow-lg my-3 mx-2">
        <div class="p-5 flex flex-col">
            <div class="rounded-xl overflow-hidden">
                <img src="https://previews.123rf.com/images/sabuhinovruzov/sabuhinovruzov1705/sabuhinovruzov170501748/78783119-icono-de-vector-de-carrito-de-compras-blanco-y-negro-agregar-producto-a-la-ilustraci%C3%B3n-del-carrito.jpg" alt="">
            </div>
            <h5 class="text-2xl md:text-3xl font-medium mt-3">${nombre}</h5>
            <p class="text-slate-200 text-lg mt-3">${desc}</p>
            <span class="text-3xl font-bold text-gray-950 dark:text-white">$${precio}</span>
            <button id="${id}" class="addToCartButton text-center bg-blue-400 text-blue-900 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 active:scale-95 transition-all duration-200 ease-out"> Agregar a la lista</button>
        </div>
    </div>
    `
}