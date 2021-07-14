import { connect } from "react-redux";
import ServerMainIndex from "./server_main_index";

import { fetchServers, subscribeServer } from './../../../actions/server_actions'

const mapStateToProps = store => ({
  currentUserId: store.session.currentUserId,
  servers: Object.values(store.entities.servers),
  subscribedServers: store.session.subscribedServers
});

const mapDispatchToProps = dispatch => ({
  fetchServers: currentUserId => dispatch(fetchServers(currentUserId)),
  addServer: (currentUserId, serverId) => dispatch(subscribeServer(currentUserId, serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerMainIndex);