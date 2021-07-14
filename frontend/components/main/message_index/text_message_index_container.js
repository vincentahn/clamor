import { connect } from "react-redux";
import MessageIndex from "./message_index";

import { createMessage, deleteMessage, receiveMessage } from "./../../../actions/message_actions";

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
  })
};

const mapDispatchToProps = dispatch => ({
  create: (message, currentUserId) => dispatch(createMessage(message, currentUserId)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  delete: (messageId, currentUserId) => dispatch(deleteMessage(messageId, currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);