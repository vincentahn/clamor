import { connect } from "react-redux";
import ServerIndex from "./server_index";

import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = store => ({
  currentUserPhoto: store.session.profile_url 
    ? store.session.profile_url 
    : window.defaultProfilePic,
  servers: Object.values(store.entities.servers).map((server, idx) => {
    return {
      id: server.id,
      name: server.name,
      profileUrl: server.profile_url
        ? server.profile_url
        : window.defaultProfilePic
    }
  })
})

const mapDispatchToProps = dispatch => ({
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);