import {BUY_CREAM} from './creamType'

export const buyCream=(value)=>{
    return{
        type:BUY_CREAM,
        payload:value,
        info:"this is second action "
    }
}