class Photo < ActiveRecord::Base
  belongs_to :event, optional: true
  has_many_attached :filenames 

  #validates :filename, presence: true 
  
end
