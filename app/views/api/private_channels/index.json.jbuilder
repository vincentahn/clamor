@private_channels.each do |channel|
  json.set! channel.id do
    json.partial! '/api/private_channels/channel', channel: channel
  end
end