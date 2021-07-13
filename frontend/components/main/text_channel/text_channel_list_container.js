import { connect } from "react-redux";
import TextChannelList from "./text_channel_list";

const mapStateToProps = (store, ownProps) => {
  const server = store.entities.servers[ownProps.serverId];
  const textChannels = server.channel_ids.map(id => store.entities.textChannels[id]);

  return({
    server,
    textChannels
  });
};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);