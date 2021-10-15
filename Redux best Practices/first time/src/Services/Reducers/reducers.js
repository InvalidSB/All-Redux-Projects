import {ADD_TO_CART,REMOVE_FROM_CART} from "../Constants"


const initialStates ={
    cardData : []
}

export default function cardItems(state=[],action){
    console.log("herna ko lagi",action.data)
    switch(action.type){
        case ADD_TO_CART:
            // console.log(action)
            return[
                ...state,
                {cardData:action.data}
        ]
            // break;
        case REMOVE_FROM_CART:
            // console.log(action)
            state.pop();
            return[
                ...state,
               
        ]
            // break;
        default:
            return state
    }
}