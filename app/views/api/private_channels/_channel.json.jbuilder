json.extract! channel, :id, :name

if channel.channel_photo.attached?
  json.profile_url url_for(channel.channel_photo)
end