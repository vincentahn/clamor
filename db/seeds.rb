# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(
  username: 'demo',
  password: 'gooddemoman',
  email: 'totallylegit@kappa.com',
  birthday: '2021-07-02'
)

founder = User.create!(
  username: 'founder',
  password: 'legendoflegend',
  email: 'waitforit@dary.com',
  birthday: '2021-07-13'
)

og = Server.create!(
  name: "OG",
  founder_id: demo.id
)

ServerMembership.create!(
  user_id: demo.id,
  server_id: og.id
)

ServerMembership.create!(
  user_id: founder.id,
  server_id: og.id
)

TextChannel.create!(
  name: 'memes',
  server_id: og.id
)

TextChannel.create!(
  name: 'announcements',
  server_id: og.id
)

Message.create!(
  body: "Getting copyright striked...", 
  author_id: 1, 
  typeable_id: 1, 
  typeable_type: "TextChannel"
)