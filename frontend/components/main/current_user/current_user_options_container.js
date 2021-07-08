import { connect } from "react-redux";
import CurrentUserOptions from "./current_user_options";

import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = store => ({
  username: store.session.username,
  profileUrl: store.session.profile_url 
    ? store.session.profile_url 
    : window.defaultProfilePic
});

const mapDispatchToProps = dispatch => ({
  openUserForm: () => {
    let modal = {
      component: 'openUserForm'
    }

    return dispatch(openModal(modal));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserOptions);