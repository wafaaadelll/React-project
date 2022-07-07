export const addToCart = (product)=>{
    return{
        type:"ADDPRO",
        payload:product
    }
}
export const delet = (product)=>{
    return{
        type:"DELPRO",
        payload:product
    }
}