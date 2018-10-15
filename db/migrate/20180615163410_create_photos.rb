class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :filename
      t.belongs_to :event, index: true 

      t.timestamps
    end
  end
end
