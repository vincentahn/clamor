json.channel do
  json.partial! '/api/private_channels/channel', channel: @channel

  json.message_ids do
    json.array! @channel.messages.pluck(:id)
  end
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end

json.users do
  json.partial! '/api/users/users', users: @channel.users
end