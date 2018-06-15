class Event < ApplicationRecord::Base
  has_many :photos 
  has_and_belongs_to_many :users  

  validates :name, presence: true 

  mount_uploader :cover, CoverUploader
end
