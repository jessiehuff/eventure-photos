class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :filename
      t.string :content_type
      t.integer :file_size
      t.datetime :created_at
      t.integer :user_id

      t.timestamps
    end
  end
end
