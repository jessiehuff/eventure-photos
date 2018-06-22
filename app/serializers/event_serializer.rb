class EventSerializer < ActiveModel::Serializer 
  attributes :name, :description, :cover

  has_many :users 
  has_many :photos 
end 