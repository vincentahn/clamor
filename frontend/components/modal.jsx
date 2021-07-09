import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from './../actions/modal_actions';

import CurrentUserFormContainer from './main/current_user/current_user_form_container';
import ServerCreateForm from './main/server/server_create_form';
import ServerEditFormContainer from './main/server/server_edit_form_container';

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
      return(<ServerEditFormContainer id={modal.data.id} />);
      
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