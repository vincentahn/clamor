import { connect } from "react-redux";
import ServerMainIndex from "./server_main_index";

import { fetchServers } from './../../../actions/server_actions'

const mapStateToProps = store => ({
  currentUserId: store.session.currentUserId,
  servers: Object.values(store.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  fetchServers: currentUserId => dispatch(fetchServers(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerMainIndex);