import { combineReducers } from "redux";
import setCurrentValueReducer from "./currentValueReducer";



const rootReducer = combineReducers({
  currentValue: setCurrentValueReducer,
})

export default rootReducer
