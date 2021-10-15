const initialState={
    noofCreams:12
}

const creamReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "BUY_CREAM":
            return{
                ...state,
                noofCreams:state.noofCreams-action.payload
            }
    
        default:
            return state
    }
}
export default creamReducer