import { connect } from "react-redux";
import MessageIndex from "./message_index";

import { createMessage, deleteMessage, receiveMessage, removeMessage } from "./../../../actions/message_actions";
import { receiveTextChannelStream } from "../../../actions/stream_actions";

const mapStateToProps = (store, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channelIds = store.entities.textChannels[channelId] ? store.entities.textChannels[channelId].message_ids : null;

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);
  
  return({
    channelId,
    currentUserId: store.session.currentUserId,
    messages,
    type: 'TextChannel'
  });
};

const mapDispatchToProps = dispatch => ({
  create: (message, channelId) => dispatch(createMessage(message, channelId)),
  delete: (messageId, currentUserId) => dispatch(deleteMessage(messageId, currentUserId)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message)),
  createChannel: stream => dispatch(receiveTextChannelStream(stream))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);