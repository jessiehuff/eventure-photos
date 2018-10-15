class Photo < ActiveRecord::Base
  belongs_to :event
  has_one_attached :filename

  #validates :filename, presence: true 
  
end
