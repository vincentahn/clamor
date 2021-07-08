import React from 'react';
import { connect } from 'react-redux';

import CurrentUserFormContainer from './main/current_user/current_user_form_container';
import ServerCreateForm from './main/server/server_create_form';
import ServerEditForm from './main/server/server_edit_form';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal.component){
    case 'openUserForm':
      component = <CurrentUserFormContainer />
      break;
    
    case 'openServerCreateForm':
      component = <ServerCreateForm />
      break;

    case 'openServerEditForm':
      component = <ServerEditForm id={modal.data.id} />
      break;

    default:
      return null;
  }

  return(
    <div>
      <div>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);