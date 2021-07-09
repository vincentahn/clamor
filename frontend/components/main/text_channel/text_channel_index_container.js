import { connect } from "react-redux";
import TextChannelIndex from "./text_channel_index";

const mapStateToProps = (store, ownProps) => ({
  server: store.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelIndex);