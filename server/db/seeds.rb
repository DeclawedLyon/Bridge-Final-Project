# This file should contain all the record creation needed to seed the database with 
# its default values.
# The data can then be loaded with the rails db:seed 
# command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'George', username: 'Geo789', password: '1234567')
Package.create(
  tracking_number: '770387548725',
  username: 'Geo789',
  courier: '1',
  date_sent: '2021-08-05',
  date_delivered: 'N/A',
  last_known_status: 'DE',
  signed_for: 'G Medina.',
  sent_to: 'Jack Sermine',
  sent_from: 'Kerry Greenburn',
  description: 'Documents',
  estimated_delivery: '2021-08-17',
  from_st: '1121 Mason Ave',
  from_city_province: 'Edmonton, AB',
  from_post: 'T8J 9C9',
  to_st: '55 Lindin St',
  to_city_province: 'Victoria, BC',
  to_post: 'V9F 8P8',
  nickname: 'Docs re: Lease',
  active: true)
Package.create(
  tracking_number: '770387548724',
  username: 'Geo789',
  courier: '1',
  date_sent: '2021-09-05',
  date_delivered: 'N/A',
  last_known_status: 'OF',
  signed_for: 'Geoff W.',
  sent_to: 'Geoff Walsh',
  sent_from: 'Daniel C',
  description: 'Vase',
  estimated_delivery: '2021-10-12',
  from_st: '45 Front Ave',
  from_city_province: 'Paris, TX',
  from_post: '68261',
  to_st: '162 17th Ave, SW',
  to_city_province: 'Calgary, AB',
  to_post: 'T2S 2C9',
  nickname: 'N/A',
  active: true)
Package.create(
  tracking_number: '770387548723',
  username: 'Geo789',
  courier: '1',
  date_sent: '2021-09-10',
  date_delivered: 'N/A',
  last_known_status: 'EX',
  signed_for: 'N/A',
  sent_to: 'Sam Devlin',
  sent_from: 'Mike Clarke',
  description: 'Guitar',
  estimated_delivery: '2021-10-05',
  from_st: '23 Auburn Cres',
  from_city_province: 'Comox, BC',
  from_post: 'J2D 2B6',
  to_st: '84 Point St',
  to_city_province: 'Hamilton, ON',
  to_post: 'Y6F F4S',
  nickname: 'Fender',
  active: true)
Package.create(
  tracking_number: '770387548722',
  username: 'Geo789',
  courier: '1',
  date_sent: '2021-09-20',
  date_delivered: 'N/A',
  last_known_status: 'OF',
  signed_for: 'N/A',
  sent_to: 'Matt Berard',
  sent_from: 'Dru Rudichuk',
  description: 'Body Lotion',
  estimated_delivery: '2021-10-06',
  from_st: '452 Rider Ave',
  from_city_province: 'Nanton, AB',
  from_post: 'T2T 1V7',
  to_st: '2300 Younge',
  to_city_province: 'Toronto, ON',
  to_post: 'Y3N N2I',
  nickname: "Gift For Matt",
  active: true)
Package.create(
  tracking_number: '1Z12345E02919806',
  username: 'Geo789',
  courier: '2',
  date_sent: '2021-09-12',
  date_delivered: 'N/A',
  last_known_status: 'OF',
  signed_for: 'N/A',
  sent_to: 'Zoe Khan',
  sent_from: 'Jill Wanklin',
  description: 'Cardigan',
  estimated_delivery: '2021-09-24',
  from_st: '89 Driddle St',
  from_city_province: 'New Orleans, LA',
  from_post: '17526',
  to_st: '9980 Hillside Ave',
  to_city_province: 'Saskatoon, SK',
  to_post: 'Y5B 2C8',
  nickname: 'N/A',
  active: true)
Package.create(
  tracking_number: '1Z12345E02919807',
  username: 'Geo789',
  courier: '2',
  date_sent: '2021-09-15',
  date_delivered: '2021-10-05',
  last_known_status: 'EX',
  signed_for: 'Chris O.',
  sent_to: 'Brian Felding',
  sent_from: 'James Stricter',
  description: 'Snake Skin Boots',
  estimated_delivery: '2021-09-26',
  from_st: '2330 Pico Blvd',
  from_city_province: 'LA, CA',
  from_post: '99812',
  to_st: '213 Sunny Lane',
  to_city_province: 'Kenora, ON',
  to_post: 'O7C 2B8',
  nickname: 'N/A',
  active: true)
Package.create(
  tracking_number: '1Z12345E02919808',
  username: 'Geo789',
  courier: '2',
  date_sent: '2021-09-14',
  date_delivered: '2021-09-21',
  last_known_status: 'DE',
  signed_for: 'Reception',
  sent_to: 'Spark Financial',
  sent_from: 'Michael Carn',
  description: 'Accounting Documents',
  estimated_delivery: '2021-09-21',
  from_st: '52 Garumini Rd.',
  from_city_province: 'Chicago, IL',
  from_post: '82932',
  to_st: 'Markum Ave',
  to_city_province: 'Halifax, NS',
  to_post: "J1C 7C8",
  nickname: "Spark Docs",
  active: true)
Package.create(
  tracking_number: '1Z12345E02919809',
  username: 'Geo789',
  courier: '2',
  date_sent: '2021-09-11',
  date_delivered: '2021-09-20',
  last_known_status: 'DE',
  signed_for: 'Allan D.',
  sent_to: 'Joel K',
  sent_from: 'Ian Kerr',
  description: 'Book',
  estimated_delivery: '2021-09-20',
  from_st: '1616 Maple St',
  from_city_province: 'Campbell River, BC',
  from_post: 'V6K 3E7',
  to_st: '2371 5th Ave',
  to_city_province: 'NY, NY',
  to_post: '90001',
  nickname: 'N/A',
  active: true)
Courier.create(name: 'FedEx', code: '1', base_url: 'www.fedex.com/tracking')
Courier.create(name: 'UPS', code: '2', base_url: 'www.ups.com/tracking')


