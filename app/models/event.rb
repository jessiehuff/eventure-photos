class Event < ActiveRecord::Base
  has_many :photos 

  validates :name, presence: true 

  has_one_attached :cover
  has_many_attached :photos

end
