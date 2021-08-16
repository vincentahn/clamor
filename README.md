# CLAMOR

[Clamor](https://vincent-ahn-clamor.herokuapp.com/) is a clone of [Discord](https://discord.com/), the popular Instant Messaging platform. Clamor was built using React with Ruby on Rails incorporating Ruby on Rails' Active Record and Action Cable to allow users to save images and allow for real time message communication rexpectively.

## Table of Contents
* [Features](#features)
* [Future Features](#future-features)

## Features

### User Authentication

Users are able to login and signup with proper user authentication in the backend and responsive error messaging. A demo user option was also implemented to allow users to quickly test out the application before deciding to signup.

![Image could not be rendered](https://cdn.discordapp.com/attachments/863876583714455553/865584755143082054/unknown.png "User Authentication Image")

### Servers

Users can create, access, edit, and delete servers (delete server functionality is solely reserved for the creator of a server).

![Image could not be rendered](https://cdn.discordapp.com/attachments/863876583714455553/865587302654803979/unknown.png "Server Create Functionality")

Servers can be accessed from the server index where users can subscribe to servers they haven't yet subscribed to.

![Image could not be rendered](https://cdn.discordapp.com/attachments/863876583714455553/865586916065542194/unknown.png "Server Subscribe Functionality")

### Text Channels with Real Time Messaging

Text channels provide access to messaging functionality allowing users to talk with friends and/or fellow server members. Users can read and delete messages (only the original author can delete their own message) in real time!

![Image could not be rendered](https://cdn.discordapp.com/attachments/863876583714455553/865587715503816734/unknown.png "Server Subscribe Functionality")

## Notable Code

### Realtime Messaging with ActionCable

Since I wanted to be able to use a single component to display messages (for both text channels and private channels), I needed to make my ActionCable stream/channel subscription more dynamic. The below modular method of retrieving the necessary information from props of two different containers and appropriately subscribing in different ways was the end result.

```
/frontend/components/main/message_index/message_index.jsx

const actionProps = actions => ({
  received: data => {
    switch(data.type){
      case 'receiveNewOnlineUser':
        actions.receiveUser(data.user);
        break;

      case 'receiveMessage':
        actions.receiveMessage(data.message);
        break;

      case 'removeMessage':
        actions.removeMessage(data.message);
        break;
      
      case 'error':
        actions.sendErrors(data.errors);
        break;

      default:
        break;
    }
  },
  sendMessage: function(data){
    return this.perform("sendMessage", data)
  },
  deleteMessage: function(data){
    return this.perform("deleteMessage", data)
  }
});

class MessageIndex extends React.Component{
  componentDidMount(){
    this.props.setup(this.props);

    const stream = App.cable.subscriptions.create(
      subscribeProps(this.props.channelId, this.props.streamType, this.props.currentUser), 
      actionProps({
        receiveMessage: this.props.receiveMessage,
        removeMessage: this.props.removeMessage,
        sendErrors: this.props.sendErrors,
        receiveUser: this.props.receiveUser
      })
    );

    this.props.createChannel(stream);

    this.listRef = document.getElementById('scroll-id');
    if(this.listRef){
      this.listRef.scrollIntoView(false);
    }
  }
}
```

### Loading Associated Records

Many of my views required information that wasn't related to just one table in the PostgreSQL database. Retrieving a single server meant retrieving its members and their images, text channels and their messages, and also the images associated with the server. Luckily, Rails makes that somewhat easy to do with its includes method.

```
/app/controllers/api/servers_controller.rb

def show
  if current_user.id === params[:currentUserId].to_i
    servers = Server.all.includes(
      :members => [profile_photo_attachment: :blob], 
      :text_channels => [:messages], 
      server_photo_attachment: :blob
    )
    @server = servers.find_by(id: params[:id])

    if @server
      render "api/servers/show"
    else
      render json: { 
        errors: ["Could not find server"],
        server_does_not_exist: true  
      }, status: 422
    end
  else
    render json: { errors: ["IMPOSTER!"] }, status: 401
  end
end
```

## Future Features

* Voice Channels

Voice channels would allow users to converse with speech in real time allowing for a more social experience.
