import { BUY_BOOK } from "./BookType"
import { RETURN_BOOK } from "./BookType"

const initialState ={
    noofBooks :100
}

const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK:
            return{
                ...state,
                noofBooks:state.noofBooks-action.payload
            }
        case RETURN_BOOK:
            return{
                ...state,
                noofBooks:state.noofBooks+1
            }
        default:
            return state
    }
}



export default bookReducer