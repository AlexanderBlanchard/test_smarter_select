class CreatePerson < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:person)

    create_table :person do |t|
      t.string :person_name

      t.timestamps
    end
  end
end
