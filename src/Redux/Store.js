import { createStore, combineReducers } from "redux";
import hrReducer from "./hrReducer";

let reducers = combineReducers({
  HR: hrReducer,
});

let store = createStore(reducers);

export default store;