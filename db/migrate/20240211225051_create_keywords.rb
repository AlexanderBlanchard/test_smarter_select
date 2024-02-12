class CreateKeywords < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:keyword)

    create_table :keyword do |t|
      t.string :keyword_name

      t.timestamps
    end
  end
end
