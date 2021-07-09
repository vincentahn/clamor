import { combineReducers } from "redux";
import serverReducer from "./server_reducer";
import userReducer from "./user_reducer";

const entityReducer = combineReducers({
  servers: serverReducer,
  users: userReducer,
})

export default entityReducer;