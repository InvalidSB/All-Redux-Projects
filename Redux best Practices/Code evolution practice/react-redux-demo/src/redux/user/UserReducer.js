const initialState={
    loading:false,
    users:[],
    error:''
}


const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_REQ':
            return{
                ...state,
                loading:true
            }
        case 'FETCH_SUCC':
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''

            }
        case 'FETCH_FAIL':
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return state
    }
}

export default userReducer