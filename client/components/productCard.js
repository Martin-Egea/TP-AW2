

export const productCard = (id,nombre,desc,precio,imagen)=>{
    return `
    <div class="bg-gray-700 max-w-sm rounded overflow-hidden shadow-xl shadow-slate-950 my-3 mx-2 animate-fade-up">
        <div class="p-5 flex flex-col h-full">
            <div class="rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <img src="${imagen}" class="rounded-xl max-w-sm max-h-80 min-w-64 min-h-80 object-contain" alt="">
            </div>
            <h5 class="text-sky-200 text-2xl md:text-3xl font-medium mt-3">${nombre}</h5>
            <p class="text-slate-200 text-lg mt-3">${desc}</p>
            <div class="flex-grow"></div>
            <span class="text-3xl text-right font-bold text-gray-950 dark:text-white">$${precio}</span>            
            <button id="${id}" class="addToCartButton text-center bg-blue-400 text-blue-900 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 active:scale-95 transition-all duration-200 ease-out"> Agregar a la lista</button>
        </div>
    </div>
    `
}