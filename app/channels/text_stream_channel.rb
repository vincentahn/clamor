class TextStreamChannel < ApplicationCable::Channel
  def subscribed
    text_channel = TextChannel.find(params[:id])
    stream_for text_channel
  end

  def sendTextMessage(data)
    text_channel = TextChannel.find(data['id'])
    message = Message.new(data['message'])
    
    if text_channel && message.save
      socket = { 
        id: message.id,
        body: message.body,
        author_id: message.author_id,
        typeable_id: message.typeable_id,
        created_at: message.created_at,
        updated_at: message.updated_at
      }
      TextStreamChannel.broadcast_to(text_channel, socket)
    else
      socket = {
        errors: message.errors.full_messages
      }

      TextStreamChannel.broadcast_to(text_channel, socket)
    end
  end

  def unsubscribed
  end
end