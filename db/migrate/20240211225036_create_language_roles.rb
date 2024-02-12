class CreateLanguageRoles < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:language_role)

    create_table :language_role do |t|
      t.string :language_role

      t.timestamps
    end
  end
end
