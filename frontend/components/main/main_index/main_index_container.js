import { connect } from "react-redux"
import { fetchChannels } from "../../../actions/private_channel_actions"
import MainIndex from "./main_index"

const mapStateToProps = store => {
  const checkPhoto = photo => photo ? photo : window.defaultProfilePic;

  const channels = store.entities.privateChannels ? Object.values(store.entities.privateChannels).map(channel => ({
    id: channel.id,
    name: channel.name,
    profileUrl: checkPhoto(channel.profile_url)
  })) : null;

  return {
    channels,
    currentUserId: store.session.currentUserId,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannels: currentUserId => dispatch(fetchChannels(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex);