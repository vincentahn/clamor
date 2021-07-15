import { connect } from "react-redux";
import TextChannelList from "./text_channel_list";

import { openModal } from './../../../actions/modal_actions';

const mapStateToProps = (store, ownProps) => {
  const server = store.entities.servers[ownProps.serverId];
  const textChannels = server.channel_ids ? server.channel_ids.map(id => store.entities.textChannels[id]) : null;

  return({
    history: ownProps.history,
    server,
    textChannels
  });
};

const mapDispatchToProps = dispatch => ({
  openChannelCreate: serverId => {
    let modal = {
      component: 'openTextChannelCreateForm',
      data: { serverId }
    };

    return dispatch(openModal(modal));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextChannelList);