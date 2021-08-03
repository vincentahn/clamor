import { connect } from "react-redux";
import MessageIndex from "./message_index";

import { createMessage, deleteMessage, receiveMessage, removeMessage } from "./../../../actions/message_actions";
import { receiveTextChannelStream, removeTextChannelStream } from "../../../actions/stream_actions";
import { receiveServerError } from "../../../actions/error_actions";

const mapStateToProps = (store, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channel = store.entities.textChannels[channelId];
  const channelIds = channel ? channel.message_ids : null;

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);
  
  return({
    channel,
    channelId,
    currentUserId: store.session.currentUserId,
    users: store.entities.users,
    messages,
    type: 'TextChannel'
  });
};

const mapDispatchToProps = dispatch => ({
  create: (message, channelId) => dispatch(createMessage(message, channelId)),
  delete: (messageId, currentUserId) => dispatch(deleteMessage(messageId, currentUserId)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message)),
  createChannel: stream => dispatch(receiveTextChannelStream(stream)),
  sendErrors: errors => dispatch(receiveServerError(errors)),
  removeChannel: () => dispatch(removeTextChannelStream())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);