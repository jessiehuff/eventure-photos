class CreateCovers < ActiveRecord::Migration[5.2]
  def change
    create_table :covers do |t|
      t.integer :lastModified
      t.string :lastModifiedDate
      t.string :date
      t.string :name
      t.integer :size
      t.string :type

      t.timestamps
    end
  end
end
