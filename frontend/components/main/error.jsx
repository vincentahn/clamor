import React from 'react';
import { connect } from 'react-redux';
import { wipeErrors } from '../../actions/error_actions';

const mapStateToProps = store => ({
  errors: store.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(wipeErrors())
});

class ErrorModal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const errors = this.props.errors.map((error, idx) => (
      <div key={`error-message-${idx}`}>
        {error}
      </div>
    ));

    return this.props.errors.length !== 0 ?
      <div className="error-background" onClick={this.props.clearErrors}>
        <div className="error-child" onClick={e => e.stopPropagation()}>
          <div className="server-error-container">
            <div>
              <div className="server-error-heading">
                WELL, THIS IS AWKWARD
              </div>
              <div className="server-error-information">
                {errors}
              </div>
              <div className="close-button">
                <button onClick={this.props.clearErrors}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    : null
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);