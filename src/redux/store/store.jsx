import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import todosReducer from "../reducers/todosReducer";
import thunk from "redux-thunk";

const rootReduer = combineReducers({
    counterR: counterReducer,
     todosR: todosReducer,
  });
const store = createStore(rootReduer,applyMiddleware(thunk))

export default store;