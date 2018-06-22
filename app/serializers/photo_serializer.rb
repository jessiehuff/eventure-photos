class PhotoSerializer < ActiveModel::Serializer 
  attributes :filename, :content_type, :file_size, :created_at 

  belongs_to :user 
  belongs_to :event 
end 