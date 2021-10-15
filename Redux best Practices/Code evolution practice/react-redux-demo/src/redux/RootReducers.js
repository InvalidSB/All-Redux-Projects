import { combineReducers } from "redux";
import cakeReducers from "./cakes/cakeReducers";
import creamReducer from "./icecream/creamReducer";
import userReducer from "./user/UserReducer";

const RootReducers = combineReducers({
  Cake: cakeReducers,
  IceCream: creamReducer,
  User:userReducer
});
export default RootReducers