# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_11_225139) do
  create_schema "movies"

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "country", primary_key: "country_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "country_iso_code", limit: 10
    t.string "country_name", limit: 200
  end

  create_table "department", primary_key: "department_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "department_name", limit: 200
  end

  create_table "gender", primary_key: "gender_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "gender", limit: 20
  end

  create_table "genre", primary_key: "genre_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "genre_name", limit: 100
  end

  create_table "keyword", primary_key: "keyword_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "keyword_name", limit: 100
  end

  create_table "language", primary_key: "language_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "language_code", limit: 10
    t.string "language_name", limit: 500
  end

  create_table "language_role", primary_key: "role_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "language_role", limit: 20
  end

  create_table "movie", primary_key: "movie_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "title", limit: 1000
    t.integer "budget"
    t.string "homepage", limit: 1000
    t.string "overview", limit: 1000
    t.decimal "popularity", precision: 12, scale: 6
    t.date "release_date"
    t.bigint "revenue"
    t.integer "runtime"
    t.string "movie_status", limit: 50
    t.string "tagline", limit: 1000
    t.decimal "vote_average", precision: 4, scale: 2
    t.integer "vote_count"
  end

  create_table "movie_cast", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "person_id"
    t.string "character_name", limit: 400
    t.integer "gender_id"
    t.integer "cast_order"
  end

  create_table "movie_company", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "company_id"
  end

  create_table "movie_crew", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "person_id"
    t.integer "department_id"
    t.string "job", limit: 200
  end

  create_table "movie_genres", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "genre_id"
  end

  create_table "movie_keywords", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "keyword_id"
  end

  create_table "movie_languages", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "language_id"
    t.integer "language_role_id"
  end

  create_table "person", primary_key: "person_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "person_name", limit: 500
  end

  create_table "production_company", primary_key: "company_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "company_name", limit: 200
  end

  create_table "production_country", id: false, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "country_id"
  end

  add_foreign_key "movie_cast", "gender", primary_key: "gender_id", name: "fk_mca_gender"
  add_foreign_key "movie_cast", "movie", primary_key: "movie_id", name: "fk_mca_movie"
  add_foreign_key "movie_cast", "person", primary_key: "person_id", name: "fk_mca_per"
  add_foreign_key "movie_company", "movie", primary_key: "movie_id", name: "fk_mc_movie"
  add_foreign_key "movie_company", "production_company", column: "company_id", primary_key: "company_id", name: "fk_mc_comp"
  add_foreign_key "movie_crew", "department", primary_key: "department_id", name: "fk_mcr_dept"
  add_foreign_key "movie_crew", "movie", primary_key: "movie_id", name: "fk_mcr_movie"
  add_foreign_key "movie_crew", "person", primary_key: "person_id", name: "fk_mcr_per"
  add_foreign_key "movie_genres", "genre", primary_key: "genre_id", name: "fk_mg_genre"
  add_foreign_key "movie_genres", "movie", primary_key: "movie_id", name: "fk_mg_movie"
  add_foreign_key "movie_keywords", "keyword", primary_key: "keyword_id", name: "fk_mk_keyword"
  add_foreign_key "movie_keywords", "movie", primary_key: "movie_id", name: "fk_mk_movie"
  add_foreign_key "movie_languages", "language", primary_key: "language_id", name: "fk_ml_language"
  add_foreign_key "movie_languages", "language_role", primary_key: "role_id", name: "fk_ml_language_role"
  add_foreign_key "movie_languages", "movie", primary_key: "movie_id", name: "fk_ml_movie"
  add_foreign_key "production_country", "country", primary_key: "country_id", name: "fk_pc_country"
  add_foreign_key "production_country", "movie", primary_key: "movie_id", name: "fk_pc_movie"
end
