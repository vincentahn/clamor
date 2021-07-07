import { combineReducers } from "redux";
import serverReducer from "./server_reducer";

const entityReducer = combineReducers({
  servers: serverReducer
})

export default entityReducer;