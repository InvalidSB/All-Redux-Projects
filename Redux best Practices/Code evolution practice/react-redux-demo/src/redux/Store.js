import { createStore } from "redux";
import RootReducers from "./RootReducers";
import logger from 'redux-logger'
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

const store = createStore(RootReducers,applyMiddleware(logger,thunk));
export default store;
