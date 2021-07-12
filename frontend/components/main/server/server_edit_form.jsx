import React from "react";

class ServerEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileUrl: props.profileUrl,
      name: props.name,
      photoFile: '',
      prevUrl: props.profileUrl,
      prevName: props.name,
      prevFile: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.changed = this.changed.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.name);

    if(this.state.photoFile){
      formData.append('server[server_photo]', this.state.photoFile);
    }

    this.setState({ 
      prevUrl: this.state.profileUrl, 
      prevFile: this.state.photoFile 
    })

    this.props.update(formData, this.props.currentUserId, this.props.serverId);
  }

  handleFileSubmit(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    const prevUrl = this.state.profileUrl;
    const prevFile = this.state.photoFile;

    reader.onloadend = () =>
      this.setState({ profileUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
      this.setState({ prevUrl, prevFile })
    } else {
      this.setState({ profileUrl, photoFile });
    }
  }

  handleReset(e){
    e.preventDefault();

    const prevUrl = this.state.prevUrl;
    const prevFile = this.state.photoFile;
    const prevName = this.state.prevName;

    this.setState({
      profileUrl: prevUrl,
      photoFile: prevFile,
      name: prevName,
      prevUrl,
      prevFile,
      prevName
    })
  }

  handleDelete(e){
    e.preventDefault();
    this.props.delete(this.props.currentUserId, this.props.serverId);
    this.props.closeModal();
  }

  changed(){
    return (this.state.prevUrl !== this.state.profileUrl) || 
    (this.state.prevFile !== this.state.photoFile) ||
    (this.state.prevName !== this.state.name);
  }

  render(){
    return(
      <div className="full-page-form">
        <div className="full-page-form-column-1">
          <div className="full-page-form-options-list">
            <div className="full-page-option-set">
              <div className="full-page-form-options-heading">
                <h1>{this.props.name.toUpperCase()}</h1>
              </div>
              <div className="full-page-form-option option-selected">
                <a>
                  <h1>Overview</h1>
                </a>
              </div>
            </div>

            <div className="full-page-special-option-set">
              <div className="full-page-form-option special-option">
                <a onClick={this.handleDelete}>
                  <h1>Delete Server</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="full-page-form-column-2">
          <div className="server-overview">
            <div className="server-overview-heading">
              <h1>Server Overview</h1>
            </div>

            <div className="edit-server-inputs">
              <div className="image-input">
                <div 
                  className="profile-photo-container"
                  style={{backgroundImage: `url(${this.state.profileUrl})`}}>

                  <input 
                    className="profile-input"
                    type="file" 
                    onChange={this.handleFileSubmit}/>
                </div>
              </div>

              <div className="name-input">
                <div className="label">
                  <h3>SERVER NAME</h3>
                </div>

                <input 
                  type="text" 
                  value={this.state.name}
                  onChange={this.update('name')}/>
              </div>
            </div>

            {this.changed() ? (
              <div className="changed-pop-up">
                <div>
                  <h3>Careful - you have unsaved changes!</h3>
                </div>

                <div className="changed-buttons">
                  <button
                    className="reset-button"
                    onClick={this.handleReset}>
                    Reset
                  </button>

                  <button 
                    className="edit-button"
                    onClick={this.handleSubmit}>
                    Save Changes
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="full-page-form-column-3">
          <a 
            className="current-user-form-close-button"
            onClick={this.props.closeModal}>
            X
          </a>
        </div>
      </div>
    );
  }
}

export default ServerEditForm;