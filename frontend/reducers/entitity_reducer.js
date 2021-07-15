import { combineReducers } from "redux";
import messageReducer from "./message_reducer";
import serverReducer from "./server_reducer";
import streamReducer from "./stream_reducer";
import textChannelReducer from "./text_channel_reducer";
import userReducer from "./user_reducer";

const entityReducer = combineReducers({
  messages: messageReducer,
  servers: serverReducer,
  textChannels: textChannelReducer,
  users: userReducer,
  stream: streamReducer
})

export default entityReducer;