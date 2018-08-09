class Event < ActiveRecord::Base
  has_many :photos 
  belongs_to :users  

  validates :name, presence: true 

 # mount_uploader :cover, CoverUploader

end
