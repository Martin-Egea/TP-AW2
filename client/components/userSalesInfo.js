
export const userSalesInfoComponent = (nVenta, direccion, ciudad, pais, provincia, codPostal, telefono, productos, createdAt, updatedAt)=>{
    return `
        <div id="infoUserSales">
            <div class="max-w-2xl mx-5 md:mx-auto p-6 bg-white shadow-lg shadow-slate-950 rounded-lg mt-10">
                <h2 class="text-2xl font-bold mb-4">Información de venta Nº: ${nVenta}</h2> 
                <div class="grid grid-cols-1 md:grid-cols-2">
                    
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Dirección</h2><p>${direccion}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Ciudad</h2><p>${ciudad}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">País</h2><p>${pais}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Provincia</h2><p>${provincia}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Código Postal</h2><p>${codPostal}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Teléfono</h2><p>${telefono}</p>
                    </div>
                    <div class="mb-4 md:col-span-2">
                        <h2 class="text-lg font-semibold">Productos</h2>
                        ${
                            productos.map(e=>(
                                `
                                    <div class="flex items-center mb-4">
                                        <img class="w-16 h-16 object-cover mr-4" src="${e.imagen}">
                                        <div>
                                            <h3 class="text-lg font-medium">${e.nombre}</h3>
                                            <p class="text-gray-600">${e.desc}</p>
                                            <p class="text-gray-900">$${e.precio}</p>
                                        </div>
                                    </div>
                                `
                            )).join('')
                        }         
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Fecha de Creación</h2>
                        <p>${createdAt}</p>
                    </div>
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold">Última Actualización</h2>
                        <p>${updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}