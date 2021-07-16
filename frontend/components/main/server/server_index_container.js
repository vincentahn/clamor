import { connect } from "react-redux";
import ServerIndex from "./server_index";

import { openModal } from "../../../actions/modal_actions";
import { fetchServer, unsubscribeServer} from "../../../actions/server_actions";

const mapStateToProps = store => {
  const checkPhoto = photo => photo ? photo : window.defaultProfilePic;

  const servers = store.session.subscribedServers ? store.session.subscribedServers.map(id => {
    const server = store.entities.servers[id];

    return {
      id: server.id,
      name: server.name,
      profileUrl: checkPhoto(server.profile_url)
    };
  }) : null;
  
  return({
    currentUserPhoto: checkPhoto(store.session.profile_url),
    servers,
    currentUserId: store.session.currentUserId
  })
}

const mapDispatchToProps = dispatch => ({
  fetchServer: (currentUserId, serverId, callback) => dispatch(fetchServer(currentUserId, serverId, callback)),
  openServerCreateForm: () => {
    let modal = {
      component: 'openServerCreateForm'
    };

    return dispatch(openModal(modal));
  },
  openServerEditForm: (id) => {
    let modal = {
      component: 'openServerEditForm',
      data: { id }
    };

    return dispatch(openModal(modal));
  },
  unsubscribeServer: (currentUserId, serverId) => dispatch(unsubscribeServer(currentUserId, serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);