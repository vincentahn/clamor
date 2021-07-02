import { combineReducers } from "redux";
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer
});

// entities
//   messages
//   privateChannels
//   servers
//   textChannels
//   users
// errors
// session

export default rootReducer;