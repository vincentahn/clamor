import { connect } from "react-redux";
import { receiveServerError } from "../../../actions/error_actions";
import { createMessage, deleteMessage, receiveMessage, removeMessage } from "../../../actions/message_actions";
import { fetchChannelById } from "../../../actions/private_channel_actions";
import { receivePrivateChannelStream, removePrivateChannelStream } from "../../../actions/stream_actions";
import MessageIndex from "./message_index";

const mapStateToProps = (store, ownProps) => {
  debugger;
  const channelId = ownProps.match.params.channelId;
  const channel = store.entities.privateChannels[channelId];
  const channelIds = channel ? channel.message_ids : null;

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);

  return {
    channel,
    channelId,
    currentUserId: store.session.currentUserId,
    users: store.entities.users,
    messages,
    type: 'PrivateChannel',
    streamType: 'PrivateStreamChannel'
  };
};

const mapDispatchToProps = dispatch => {
  const setup = props => {
    dispatch(fetchChannelById(props.currentUserId, props.channelId));
  }

  return {
    create: (message, channelId) => dispatch(createMessage(message, channelId)),
    delete: (messageId, currentUserId) => dispatch(deleteMessage(messageId, currentUserId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    removeMessage: message => dispatch(removeMessage(message)),
    createChannel: stream => dispatch(receivePrivateChannelStream(stream)),
    sendErrors: errors => dispatch(receiveServerError(errors)),
    removeChannel: () => dispatch(removePrivateChannelStream()),
    setup
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);