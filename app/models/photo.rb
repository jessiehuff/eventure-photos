class Photo < ActiveRecord::Base
  belongs_to :event 
  belongs_to :user

  validates :filename, presence: true 

  has_attached_file :filename 

  mount_uploader :filename, PhotoUploader
end
