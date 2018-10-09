class Photo < ActiveRecord::Base
  belongs_to :event 
  belongs_to :user
  has_many_attached :filenames 

  validates :filename, presence: true 
  
end
