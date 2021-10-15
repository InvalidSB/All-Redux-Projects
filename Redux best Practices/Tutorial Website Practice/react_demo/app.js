const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
// const {redux,createStore,combineReducer}= require('redux')

const initialStateBook = {
  numberOfBooks: 50,
};
const initialStatePen = {
  numberOfPens: 70,
  name: "najus",
};

// action creator:wrapping action in the single function
function buyBook() {
  return {
    type: "BUY_BOOK",
    payload: "my first action of project",
  };
}
function buyPen() {
  return {
    type: "BUY_PEN",
    payload: "my second action  of project",
  };
}

const bookReducer = (state = initialStateBook, action) => {
  switch (action.type) {
    case "BUY_BOOK":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 10,
      };

    default:
      return state;
  }
};
const penReducer = (state = initialStatePen, action) => {
  switch (action.type) {
    case "BUY_PEN":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 10,
      }; 
    default:
      return state;
  }
};

const reducer = combineReducer({ book: bookReducer, pen: penReducer });

const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log("middle ware log", result);
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("initial state value", store.getState());
const ubsub = store.subscribe(() =>
  console.log("updated value", store.getState())
);

store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());

ubsub();
