class CreateGenders < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:gender)

    create_table :gender do |t|
      t.string :gender

      t.timestamps
    end
  end
end
