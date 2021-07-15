import { connect } from "react-redux"
import TextChannelCreateForm from "./text_channel_create_form";

import { createTextChannel } from "../../../../actions/text_channel_actions";
import { closeModal } from './../../../../actions/modal_actions';

const mapStateToProps = (store, ownProps) => ({
  currentUserId: store.session.currentUserId,
  serverId: ownProps.serverId
})

const mapDispatchToProps = dispatch => ({
  action: (name, serverId, currentUserId) => {
    dispatch(createTextChannel(name, serverId, currentUserId));
    return dispatch(closeModal());
  },
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelCreateForm);