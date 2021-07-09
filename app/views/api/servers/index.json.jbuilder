@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name

    if server.server_photo.attached?
      json.profile_url url_for(server.server_photo)
    end
  end
end