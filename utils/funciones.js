export const obtener_usuarios = (obj, nom) =>{
    const res = obj.filter(e => obj.nombre == nom)
    return res
}