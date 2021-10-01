# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_01_183732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "couriers", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.string "base_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "packages", force: :cascade do |t|
    t.string "tracking_number"
    t.string "username"
    t.string "courier"
    t.datetime "date_sent"
    t.datetime "date_delivered"
    t.string "last_known_status"
    t.string "signed_for"
    t.string "sent_to"
    t.string "sent_from"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "estimated_delivery"
    t.string "from_st"
    t.string "from_city_province"
    t.string "from_post"
    t.string "to_st"
    t.string "to_city_province"
    t.string "to_post"
    t.string "nickname"
    t.boolean "active"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
