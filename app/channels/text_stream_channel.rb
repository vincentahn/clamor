class TextStreamChannel < ApplicationCable::Channel
  def subscribed
    text_channel = TextChannel.find(params[:id])
    stream_for text_channel
  end

  def sendTextMessage(data)
    text_channel = TextChannel.find(data['channelId'])
    message = Message.new(data['message'])
    
    if text_channel && message.save
      socket = { 
        type: 'receiveMessage',
        message: {  
          id: message.id,
          body: message.body,
          author_id: message.author_id,
          typeable_id: message.typeable_id,
          created_at: message.created_at.strftime("Today at %l:%M%p")
        }
      }

      TextStreamChannel.broadcast_to(text_channel, socket)
    else
      socket = {
        type: 'error',
        errors: message.errors.full_messages
      }

      TextStreamChannel.broadcast_to(text_channel, socket)
    end
  end

  def deleteTextMessage(data)
    message = Message.find(data['messageId'])
    text_channel = TextChannel.find(message.typeable_id)

    if message && message.destroy
      socket = {
        type: 'removeMessage',
        message: {
          id: message.id,
          typeable_id: message.typeable_id
        }
      }

      TextStreamChannel.broadcast_to(text_channel, socket)
    else
      socket = {
        type: 'error',
        errors: message.errors.full_messages
      }

      TextStreamChannel.broadcast_to(text_channel, socket)
    end
  end

  def unsubscribed
  end
end