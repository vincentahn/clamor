import { connect } from "react-redux"
import { fetchChannels } from "../../../actions/private_channel_actions"
import MainIndex from "./main_index"

const mapStateToProps = store => {

  return {
    channels: Object.values(store.entities.privateChannels),
    currentUserId: store.session.currentUserId,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannels: currentUserId => dispatch(fetchChannels(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex);