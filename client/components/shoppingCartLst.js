
export const prodCarrito = (nombre, descripcion, precio, imagen )=>{
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