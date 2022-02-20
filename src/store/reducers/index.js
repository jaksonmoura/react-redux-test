import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import wordCounterReducer from "./wordCounterReducer";

const reducers = combineReducers({
    counter: counterReducer,
    wordCounter: wordCounterReducer
})

export default reducers