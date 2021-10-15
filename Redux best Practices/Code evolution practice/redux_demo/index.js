const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddeware = redux.applyMiddleware
const reduxlogger = require("redux-logger");

const logger = reduxlogger.createLogger();

const initialStateCake = {
  numOfCakes: 10,
};
const initialStateCream = {
  numOfCreams: 20,
};

function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "first redux action",
  };
}
function buyIceCream() {
  return {
    type: "BUY_CREAM",
    info: "second redux action",
  };
}

const cakeReducers = (state = initialStateCake, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducers = (state = initialStateCream, action) => {
  switch (action.type) {
    case "BUY_CREAM":
      return {
        ...state,
        numOfCreams: state.numOfCreams - 1,
      };
    default:
      return state;
  }
};


const reducers = combineReducer({ C: cakeReducers, I: iceCreamReducers });

// store

const store = createStore(reducers,applyMiddeware(logger));
console.log("initial state", store.getState());
const ubsub = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
ubsub();


// after this we learn about redux thunk and asynchronous action 