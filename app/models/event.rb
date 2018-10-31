class Event < ActiveRecord::Base
  #attr_accessor :name, :description  #maybe this was creating the issue??
  has_one_attached :cover

  validates :name, presence: true 

end
