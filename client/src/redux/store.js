import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import initState from "./state";

const store = createStore(rootReducer, initState)

export default store
