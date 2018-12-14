class Event < ActiveRecord::Base
  has_one_attached :cover

  validates :name, presence: true 
end
