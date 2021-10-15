import { BUY_CAKE } from "./cakeTypes"
import { RETURN_CAKE } from "./cakeTypes"

export const buyCake=()=>{
    return {
        type:BUY_CAKE,
        info:"this is my first action"
    }
}
export const returnCake =()=>{
    return {
        type:RETURN_CAKE,
        info:"2nd type of first action "
    }
}