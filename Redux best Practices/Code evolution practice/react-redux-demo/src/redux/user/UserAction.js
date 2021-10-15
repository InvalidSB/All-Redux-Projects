import { FETCH_REQ, FETCH_SUCC, FETCH_FAIL } from "./UserTypes";
import axios from "axios";
export const reqUsr = () => {
  return {
    type: FETCH_REQ,
  };
};
export const sucUsr = (users) => {
  return {
    type: FETCH_SUCC,
    payload: users,
  };
};
export const failUsr = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(reqUsr());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data
        dispatch(sucUsr(users));
      })
      .catch((error) => {
        dispatch(failUsr(error.message));
      });
  };
};

export default fetchUsers