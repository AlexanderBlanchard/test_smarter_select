class CreateDepartments < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:department)

    create_table :department do |t|
      t.string :department_name

      t.timestamps
    end
  end
end
