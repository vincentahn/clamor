import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from './../../actions/modal_actions';

import CurrentUserFormContainer from './current_user/current_user_form_container';
import ServerCreateForm from './server/server_create_form';
import ServerEditFormContainer from './server/server_edit_form_container';
import TextChannelCreateContainer from './text_channel/create/text_channel_create_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal.component){
    case 'openUserForm':
      return( <CurrentUserFormContainer /> );
    
    case 'openServerCreateForm':
      component = <ServerCreateForm />
      break;

    case 'openServerEditForm':
      return(<ServerEditFormContainer id={modal.data.id} history={modal.data.history} />);

    case 'openTextChannelCreateForm':
      component = <TextChannelCreateContainer serverId={modal.data.serverId} />
      break;
      
    default:
      return null;
  }

  return(
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);