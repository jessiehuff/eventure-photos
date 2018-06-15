class Photo < ApplicationRecord::Base
  belongs_to :event 
  belongs_to :user

  validates :filename, presence: true 
end
