class Event < ActiveRecord::Base
  has_many_attached :photos 
  has_one_attached :cover

  validates :name, presence: true 

  #has_many_attached :photos

end
