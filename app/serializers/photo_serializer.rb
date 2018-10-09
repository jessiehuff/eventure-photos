class PhotoSerializer < ActiveModel::Serializer 
  include Rails.application.routes.url_helpers 

  attributes :id, :photo_url

  def photo_url 
    variant = object.photo.variant(resize: "300x300")
    return rails_representation_url(variant, only_path: true) 
  end 
  
  belongs_to :event 
end 