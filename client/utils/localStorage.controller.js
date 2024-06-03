export const getDataLS = (key) => {
    const res = JSON.parse(localStorage.getItem(key))
    return res ? res : []
}

export const setDataLS = (key,arr) =>{
    try {
        localStorage.setItem(key, JSON.stringify(arr))        
    } catch (error) {
        console.log(error)
    }
}

export const deleteDataLS = (key)=>{
    localStorage.removeItem(key)
}