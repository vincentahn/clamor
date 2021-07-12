json.text_channels do
  @server.text_channels.each do |text_channel|
    json.set! text_channel.id do
      json.extract! text_channel, :id, :name
    end
  end
end

json.server do
  json.partial! '/api/servers/server', server: @server

  json.channel_ids do
    json.array! @server.text_channels.pluck(:id)
  end

  json.user_ids do
    json.array! @server.members.pluck(:id)
  end
end

json.users do
  json.partial! '/api/users/users', users: @server.members
end
  