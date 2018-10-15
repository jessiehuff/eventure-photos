class Photo < ActiveRecord::Base
  belongs_to :event, optional: true
  has_one_attached :filename

  #validates :filename, presence: true 
  
end
