import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";

const rootReduer = combineReducers({
    counterR: counterReducer,
    // todosR: cartReducer,
  });
const store = createStore(rootReduer)

export default store;