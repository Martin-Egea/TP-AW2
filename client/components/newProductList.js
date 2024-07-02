

export const newProductList = (numero, nombre, precio, desc, imagen)=>{
    return `  
        <tr>
            <td>${numero}</td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${desc}</td>
            <td><a href="${imagen}" target="_blank">${imagen}</a></td>
        </tr>
    `
}