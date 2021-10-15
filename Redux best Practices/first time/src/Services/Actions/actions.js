import {ADD_TO_CART} from "../Constants"
import {REMOVE_FROM_CART} from "../Constants"
export const addTOCart = (data)=>{
    console.log(data)
    return{
          type:ADD_TO_CART,
        data:data
    }
}
export const removeFROMCart = (data)=>{
    return{
          type:REMOVE_FROM_CART,
        data:data
    }
}