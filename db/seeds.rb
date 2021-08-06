# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

Server.delete_all
Server.connection.execute('ALTER SEQUENCE servers_id_seq RESTART WITH 1')

ServerMembership.delete_all
ServerMembership.connection.execute('ALTER SEQUENCE server_memberships_id_seq RESTART WITH 1')

TextChannel.delete_all
TextChannel.connection.execute('ALTER SEQUENCE text_channels_id_seq RESTART WITH 1')

PrivateChannel.delete_all
PrivateChannel.connection.execute('ALTER SEQUENCE private_channels_id_seq RESTART WITH 1')

PrivateMembership.delete_all
PrivateMembership.connection.execute('ALTER SEQUENCE private_memberships_id_seq RESTART WITH 1')

Message.delete_all
Message.connection.execute('ALTER SEQUENCE messages_id_seq RESTART WITH 1')

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

Server.create!(
  name: "Valorant",
  founder_id: founder.id
)

Server.create!(
  name: "Anime",
  founder_id: founder.id
)

Server.create!(
  name: "AppAcademy",
  founder_id: founder.id
)

Server.create!(
  name: "Software Engineers",
  founder_id: founder.id
)

sc = PrivateChannel.create!(
  name: 'Secret Chat'
)

PrivateMembership.create!(
  user_id: demo.id,
  channel_id: sc.id
)

PrivateMembership.create!(
  user_id: founder.id,
  channel_id: sc.id
)

Message.create!(
  body: "WE MADE IT!!!!!", 
  author_id: 1, 
  typeable_id: 1, 
  typeable_type: "PrivateChannel"
)