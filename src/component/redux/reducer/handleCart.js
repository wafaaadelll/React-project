const cart = [];
const handleCart = (state = cart , action)=>{
const product = action.payload
switch(action.type){
    case "ADDPRO":
        const add = state.find((item)=>item.id === product.id)
        if(add){
            return state.map((item)=>
                item.id === product.id ? {...item, qty: item.qty +1}:item
            );
        }
        else{
            const product = action.payload;
            return[...state,{...product,qty:1}]
        }
        break;
        case "DELPRO":
            const delet = state.find((item)=> item.id === product.id)
            if(delet.qty === 1){
                return state.filter((item)=>item.id !== delet.id)
            }
            else{
                return state.map((item)=>
                    item.id === product.id ? {...item , qty:item.qty-1}:item
                )
            }
            break;
        default:
            return state;
            break;
}
}
export default handleCart;