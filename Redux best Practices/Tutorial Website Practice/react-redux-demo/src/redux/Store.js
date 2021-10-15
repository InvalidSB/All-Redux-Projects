import {createStore} from 'redux'
import bookReducer from "./book/bookReducer"
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store =createStore(bookReducer,applyMiddleware(logger))

export default store