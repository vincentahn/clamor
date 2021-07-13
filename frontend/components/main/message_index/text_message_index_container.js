import { connect } from "react-redux";
import MessageIndex from "./message_index";

import { createMessage, deleteMessage } from "./../../../actions/message_actions";

const mapStateToProps = (store, ownProps) => {
  const channelId = ownProps.match.params.channelId
  const channelIds = store.entities.textChannels[channelId].message_ids

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);

  // debugger;

  return({
    channelId,
    currentUserId: store.session.currentUserId,
    messages
  })
};

const mapDispatchToProps = dispatch => ({
  create: (message, currentUserId) => {
    message.typeable_type = 'TextChannel';

    return dispatch(createMessage(message, currentUserId));
  },
  delete: (messageId, currentUserId) => dispatch(deleteMessage(messageId, currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);