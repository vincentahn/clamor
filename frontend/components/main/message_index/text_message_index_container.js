import { connect } from "react-redux";
import MessageIndex from "./message_index";

import { createMessage, deleteMessage, receiveMessage, removeMessage } from "./../../../actions/message_actions";
import { receiveTextChannelStream, removeTextChannelStream } from "../../../actions/stream_actions";
import { receiveServerError } from "../../../actions/error_actions";
import { receiveUser } from "../../../actions/user_actions";

const mapStateToProps = (store, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channel = store.entities.textChannels[channelId];
  const channelIds = channel ? channel.message_ids : null;

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);
  
  return {
    channel,
    channelId,
    currentUserId: store.session.currentUserId,
    users: store.entities.users,
    messages,
    type: 'TextChannel',
    streamType: 'TextStreamChannel',
    currentUser: store.entities.users[store.session.currentUserId],
    stream: store.entities.stream.textChannelStream ? store.entities.stream.textChannelStream : null
  };
};

const mapDispatchToProps = dispatch => ({
  create: (stream, message, channelId) => dispatch(createMessage(stream, message, channelId)),
  delete: (stream, messageId, currentUserId) => dispatch(deleteMessage(stream, messageId, currentUserId)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message)),
  createChannel: stream => dispatch(receiveTextChannelStream(stream)),
  sendErrors: errors => dispatch(receiveServerError(errors)),
  removeChannel: () => dispatch(removeTextChannelStream()),
  setup: props => {},
  receiveUser: user => dispatch(receiveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);