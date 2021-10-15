// https://jsonplaceholder.typicode.com/users/

const {redux,createStore,applyMiddleware} = require('redux')

const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')

const initialState ={
    loading:false,
    users:[],
    error:''
}


const USR_REQ ='USR_REQ';

const USR_SUCC ='USR_SUCC'

const USR_ERR="USR_ERR"



const userRequest=()=>{
    return{
        type:USR_REQ
    }
}

const userSuccess=(users)=>{
    return{
        type:USR_SUCC,
        payload:users
    }
}

const userError=(error)=>{
    return{
        type:USR_ERR,
        payload:error
    }
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case USR_REQ:
            return{
                ...state,
                loading:true
            }
        case USR_SUCC:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''

            }
        case USR_ERR:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

const FetchUser=()=>{
    return function (dispatch){
        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/uses/').then((res)=>{
            const users =res.data.map(user=>user.name);

        dispatch(userSuccess(users))
        }).catch((error)=> {
            dispatch(userError(error.message))
        })
    }
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware));

store.subscribe(()=>console.log(store.getState()))
// yaha unsubscribe ma store garera rakhda hunxa tara call gariyo vane first dispatch matra hunxa

store.dispatch(FetchUser())