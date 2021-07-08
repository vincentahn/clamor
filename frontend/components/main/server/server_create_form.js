import { connect } from 'react-redux';
import ServerForm from './server_form';

import { createServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = store => ({
  currentUserId: store.session.currentUserId,
  name: '',
  type: 'Create',
  profileUrl: window.defaultProfilePic
})

const mapDispatchToProps = dispatch => ({
  action: (server, currentUserId) => {
    dispatch(createServer(server, currentUserId));
    return dispatch(closeModal());
  },
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);