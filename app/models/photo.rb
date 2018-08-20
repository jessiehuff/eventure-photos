class Photo < ActiveRecord::Base
  belongs_to :event 
  belongs_to :user

  validates :filename, presence: true 

  #mount_uploader :filename, PhotoUploader
end
