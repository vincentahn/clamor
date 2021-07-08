import { connect } from 'react-redux';
import ServerForm from './server_form';

import { updateServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (store, ownProps) => {
  const serverId = ownProps.id;
  const server = store.entities.servers[serverId];

  return({
    serverId,
    name: server.name,
    type: 'Update',
    profileUrl: server.profile_url
    ? server.profile_url
    : window.defaultProfilePic,
    currentUserId: store.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  action: (server, currentUserId, serverId) => {
    dispatch(updateServer(server, currentUserId, serverId));
    return dispatch(closeModal());
  },
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);