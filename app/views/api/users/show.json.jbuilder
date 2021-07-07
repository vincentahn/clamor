json.session do
  json.currentUserId current_user.id

  json.extract! current_user, :username, :email, :birthday

  if current_user.profile_photo.attached?
    json.profile_url url_for(current_user.profile_photo)
  end
end

json.servers do
  current_user.servers.each do |server|
    json.set! server.id do
      json.partial! '/api/servers/server', server: server
    end
  end
end


