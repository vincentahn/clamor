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

og = Server.create!(
  name: "OG",
  founder_id: demo.id
)

ServerMembership.create!(
  user_id: demo.id,
  server_id: og.id
)