import { connect } from 'react-redux';
import ServerEditForm from './server_edit_form';

import { updateServer, deleteServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (store, ownProps) => {
  const serverId = ownProps.id;
  const server = store.entities.servers[serverId];

  return({
    serverId,
    name: server.name,
    profileUrl: server.profile_url
    ? server.profile_url
    : window.defaultProfilePic,
    currentUserId: store.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  update: (server, currentUserId, serverId) => {
    dispatch(updateServer(server, currentUserId, serverId));
    return dispatch(closeModal());
  },
  delete: (currentUserId, serverId) => dispatch(deleteServer(currentUserId, serverId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerEditForm);