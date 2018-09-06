class EventSerializer < ActiveModel::Serializer
 
  attributes :name, :description


  has_many :users 
  has_many :photos 
end 