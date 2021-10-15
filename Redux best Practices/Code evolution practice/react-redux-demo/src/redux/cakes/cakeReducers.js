const initialState= {
    noOfcakes:10
}

const cakeReducers =(state= initialState,action)=>{
    switch (action.type) {
        case "BUY_CAKE":
          return{
              ...state,
              noOfcakes:state.noOfcakes -1
          }
        case "RETURN_CAKE":
          return{
              ...state,
              noOfcakes:state.noOfcakes +1
          }
        default:
            return state
    }
}
export default cakeReducers