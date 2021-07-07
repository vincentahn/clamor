import { combineReducers } from "redux";
import sessionReducer from './session_reducer';
import errorReducer from "./error_reducer";
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  ui: uiReducer
});

// entities
//   messages
//   privateChannels
//   servers
//   textChannels
//   users
// errors
// session
// ui
//   modal

export default rootReducer;