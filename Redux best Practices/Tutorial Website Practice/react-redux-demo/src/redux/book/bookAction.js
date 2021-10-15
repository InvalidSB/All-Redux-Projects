import { BUY_BOOK } from "./BookType";
import { RETURN_BOOK } from "./BookType";


export const buyBook=(value=1)=>{
    return {
        type:BUY_BOOK,
        payload:value

    }
}
export const returnBook=()=>{
    return {
        type:RETURN_BOOK,
    }
}