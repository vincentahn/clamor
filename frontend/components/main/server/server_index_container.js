import { connect } from "react-redux";
import ServerIndex from "./server_index";

import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = store => ({
  servers: Object.values(store.entities.servers).map(server => {
    return {
      name,
      profile_url: server.profile_url
        ? server.profile_url
        : window.defaultProfilePic
    }
  })
})

const mapDispatchToProps = dispatch => ({
  // Add this when you've added serverForm to modal.jsx
  // openUserForm: () => dispatch(openModal('serverForm'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);