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
    formData.append('server[name]', this.state.username);

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
    console.log(this.state);

    return (this.state.prevUrl !== this.state.profileUrl) || 
    (this.state.prevFile !== this.state.photoFile) ||
    (this.state.prevName !== this.state.name);
  }

  render(){
    return(
      <div className="current-user-form">
        <div className="current-user-form-column-1">
          <nav className="current-user-form-options">
            <ul>
              <a>
                <li className="current-user-form-link">
                  Overview
                </li>
              </a>
              <a 
                className="logout-link"
                onClick={this.handleDelete}>
                <li className="current-user-form-link">
                  Delete Server
                </li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="current-user-form-column-2">
          <form>
              <h1>Server Overview</h1>

              <div 
                className="profile-photo-container"
                style={{backgroundImage: `url(${this.state.profileUrl})`}}>

                <input 
                  className="profile-input"
                  type="file" 
                  onChange={this.handleFileSubmit}/>
              </div>

              <h3>Name</h3>
              <input 
                type="text" 
                value={this.state.name}
                onChange={this.update('name')}/>

          </form>

          {this.changed() ? (
            <div>
              <button
                onClick={this.handleReset}>
                Reset
              </button>
              <button 
                className="current-user-edit-button"
                onClick={this.handleSubmit}>
                Edit Profile
              </button>
            </div>
          ) : null}
        </div>
        <div>
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