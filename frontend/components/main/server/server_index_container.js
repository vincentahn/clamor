import { connect } from "react-redux";
import ServerIndex from "./server_index";

import { openModal } from "../../../actions/modal_actions";
import { fetchServer, unsubscribeServer} from "../../../actions/server_actions";
import { withRouter } from "react-router";
import { createStream } from "../../../streams/users/user_stream_channel";
import { obtainPrivateChannelNotification } from "../../../actions/private_channel_actions";

const mapStateToProps = (store, ownProps) => {
  const checkPhoto = photo => photo ? photo : window.defaultProfilePic;

  const privateChannelNotifications = Object.values(store.entities.privateChannels).reduce((filtered, privateChannel) => {
    if(privateChannel.notificationCount){
      filtered.push({
        id: privateChannel.id,
        count: privateChannel.notificationCount,
        name: privateChannel.name.length > 15 ? `${privateChannel.name.slice(0, 15)}...` : privateChannel.name,
        profileUrl: checkPhoto(privateChannel.profile_url)
      });
    }

    return filtered;
  }, []);

  const servers = store.session.subscribedServers ? store.session.subscribedServers.map(id => {
    const server = store.entities.servers[id];

    return {
      id: server.id,
      name: server.name,
      profileUrl: checkPhoto(server.profile_url),
    };
  }) : null;
  
  return({
    currentUserId: store.session.currentUserId,
    currentUserPhoto: checkPhoto(store.session.profile_url),
    history: ownProps.history,
    privateChannelNotifications,
    servers
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
  openServerEditForm: (id, history) => {
    let modal = {
      component: 'openServerEditForm',
      data: { 
        id,
        history 
      }
    };

    return dispatch(openModal(modal));
  },
  unsubscribeServer: (currentUserId, serverId) => dispatch(unsubscribeServer(currentUserId, serverId)),
  createChannel: (currentUserId, props) => createStream(currentUserId, props),
  obtainPrivateChannelNotification: privateChannel => dispatch(obtainPrivateChannelNotification(privateChannel))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ServerIndex));