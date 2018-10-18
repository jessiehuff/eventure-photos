class Event < ActiveRecord::Base
  attr_accessor :name, :description
  has_one_attached :cover

  validates :name, presence: true 


end
