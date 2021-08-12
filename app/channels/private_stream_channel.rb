class PrivateStreamChannel < ApplicationCable::Channel
  def subscribed
    private_channel = PrivateChannel.find(params[:id])
    stream_for private_channel
  end

  def sendMessage(data)
    private_channel = PrivateChannel.find(data['channelId'])
    message = Message.new(data['message'])
    
    if private_channel && message.save
      privateStreamSocket = { 
        type: 'receiveMessage',
        message: {  
          id: message.id,
          body: message.body,
          author_id: message.author_id,
          typeable_id: message.typeable_id,
          typeable_type: message.typeable_type,
          created_at: message.created_at
        }
      }

      users = User.joins(:private_channels).where("users.id != ? AND private_channels.id = ?", message.author_id, private_channel.id);

      userSocket = {
        type: 'receivePrivateChannelNotification',
        private_channel: private_channel
      }

      users.each do |user|
        UserStreamChannel.broadcast_to(user, userSocket)
      end

      PrivateStreamChannel.broadcast_to(private_channel, privateStreamSocket)
    else
      socket = {
        type: 'error',
        errors: message.errors.full_messages
      }

      PrivateStreamChannel.broadcast_to(private_channel, socket)
    end
  end

  def deleteMessage(data)
    message = Message.find(data['messageId'])
    private_channel = PrivateChannel.find(message.typeable_id)

    if message && message.destroy
      socket = {
        type: 'removeMessage',
        message: {
          id: message.id,
          typeable_id: message.typeable_id,
          typeable_type: message.typeable_type
        }
      }

      PrivateStreamChannel.broadcast_to(private_channel, socket)
    else
      socket = {
        type: 'error',
        errors: message.errors.full_messages
      }

      PrivateStreamChannel.broadcast_to(private_channel, socket)
    end
  end
end