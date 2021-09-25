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
Package.create(tracking_number: '770387548725', courier: 1, date_sent: '2021-08-05', date_delivered: '2021-08-17', last_known_status: 'DE', signed_for: 'G Medina.', sent_to: 'Victoria, BC', sent_from: 'Edmonton, AB', description: 'Documents')
Package.create(tracking_number: '770387548724', courier: 1, date_sent: '2021-09-05', date_delivered: '2021-09-12', last_known_status: 'DE', signed_for: 'Geoff W.', sent_to: 'Calgary, AB', sent_from: 'Paris, TX', description: 'Vase')
Package.create(tracking_number: '770387548723', courier: 1, date_sent: '2021-09-10', date_delivered: '2021-10-05', last_known_status: 'EX', signed_for: 'N/A', sent_to: 'Hamilton, ON', sent_from: 'Comox, BC', description: 'Guitar')
Package.create(tracking_number: '770387548722', courier: 1, date_sent: '2021-09-20', date_delivered: '2021-09-24', last_known_status: 'LA', signed_for: 'N/A', sent_to: 'Toronto, ON', sent_from: 'Nanton, AB', description: 'Body Lotion')
Package.create(tracking_number: '1Z12345E02919806', courier: 2, date_sent: '2021-09-12', date_delivered: '2021-09-24', last_known_status: 'LA', signed_for: 'Sarah D.', sent_to: 'Saskatoon, SK', sent_from: 'New Orleans, LA', description: 'Cardigan')
Package.create(tracking_number: '1Z12345E02919807', courier: 2, date_sent: '2021-09-15', date_delivered: '2021-10-05', last_known_status: 'EX', signed_for: 'Chris O.', sent_to: 'Kenora, ON', sent_from: 'LA, CA', description: 'Snake Skin Boots')
Package.create(tracking_number: '1Z12345E02919808', courier: 2, date_sent: '2021-09-14', date_delivered: '2021-09-21', last_known_status: 'DE', signed_for: 'Reception', sent_to: 'Halifax, NS', sent_from: 'Chicago, IL', description: 'Accounting Documents')
Package.create(tracking_number: '1Z12345E02919809', courier: 2, date_sent: '2021-09-11', date_delivered: '2021-09-20', last_known_status: 'DE', signed_for: 'Allan D.', sent_to: 'NY, NY', sent_from: 'Campbell River, BC', description: 'Book')
Courier.create(name: 'FedEx', code: '1', base_url: 'www.fedex.com/tracking')
Courier.create(name: 'UPS', code: '2', base_url: 'www.ups.com/tracking')
Tracking_instance.create(package_id: '1', user_id: '1', courier_id: '1')
Tracking_instance.create(package_id: '2', user_id: '1', courier_id: '1')
Tracking_instance.create(package_id: '3', user_id: '1', courier_id: '1')
Tracking_instance.create(package_id: '4', user_id: '1', courier_id: '1')
Tracking_instance.create(package_id: '5', user_id: '1', courier_id: '2')
Tracking_instance.create(package_id: '6', user_id: '1', courier_id: '2')
Tracking_instance.create(package_id: '7', user_id: '1', courier_id: '2')
Tracking_instance.create(package_id: '8', user_id: '1', courier_id: '2')