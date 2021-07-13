import { connect } from "react-redux";
import TextChannelIndex from "./text_channel_index";
import { fetchServer } from "./../../../actions/server_actions";

const mapStateToProps = (store, ownProps) => ({
    server: store.entities.servers[ownProps.match.params.serverId],
    currentUserId: store.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  fetchServer: (currentUserId, serverId, callback) => dispatch(fetchServer(currentUserId, serverId, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelIndex);