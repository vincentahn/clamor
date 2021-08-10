class PrivateStreamChannel < ApplicationCable::Channel
  def subscribed
    private_channel = PrivateChannel.find(params[:id])
    stream_for private_channel
  end

  def sendMessage(data)
    private_channel = PrivateChannel.find(data['channelId'])
    message = Message.new(data['message'])
    
    if private_channel && message.save
      socket = { 
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

      PrivateStreamChannel.broadcast_to(private_channel, socket)
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