class TextStreamChannel < ApplicationCable::Channel
  def subscribed
    text_channel = TextChannel.find(params[:id])
    stream_for text_channel
  end

  def sendTextMessage(data)
    text_channel = TextChannel.find(data['id'])
    puts data['message']

    message = Message.new(data['message'])
    puts "-------------sendTextMessage--------------"
    puts message
    
    if text_channel && message.save
      socket = { 
        message: message.body 
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