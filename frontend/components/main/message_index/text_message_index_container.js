import { connect } from "react-redux";
import MessageIndex from "./message_index";

const mapStateToProps = (store, ownProps) => {
  const channelIds = store.entities.textChannels[ownProps.match.params.channelId].message_ids

  let messages = [];
  if(channelIds) messages = channelIds.map(id => store.entities.messages[id]);
  
  return({
    messages
  })
};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);