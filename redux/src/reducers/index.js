import clickReducer from "./clickReducer";
import { combineReducers } from "redux";

const Reducers = combineReducers({
    clickState : clickReducer,
})

export default Reducers