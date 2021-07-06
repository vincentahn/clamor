import React from 'react';
import { connect } from 'react-redux';

import CurrentUserFormContainer from './main/current_user/current_user_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal){
    case 'openUserForm':
      component = <CurrentUserFormContainer />
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