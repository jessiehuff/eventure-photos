class Event < ActiveRecord::Base
  has_many :photos 

  validates :name, presence: true 

 # mount_uploader :cover, CoverUploader

end
