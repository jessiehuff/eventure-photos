class Photo < ApplicationRecord::Base
  belongs_to :event 
  belongs_to :user

  validates :filename, presence: true 

  has_attached_file :filename 
end
