class UserSerializer < ActiveModel::Serializer 
  attributes :id, :email 

#has_many :events 
# has_many :photos
end