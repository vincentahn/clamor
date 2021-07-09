@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username

    if user.profile_photo.attached?
      json.profile_url url_for(user.profile_photo)
    end
  end
end