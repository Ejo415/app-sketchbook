class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :concept
      t.string :title
      t.string :goals
      t.string :languages
      t.string :notepad
      t.boolean :completed, default: false
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
