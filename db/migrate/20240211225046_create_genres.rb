class CreateGenres < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:genre)

    create_table :genre do |t|
      t.string :genre_name

      t.timestamps
    end
  end
end
