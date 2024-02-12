class CreateLanguages < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:language)

    create_table :language do |t|
      t.string :language_code
      t.string :language_name

      t.timestamps
    end
  end
end
