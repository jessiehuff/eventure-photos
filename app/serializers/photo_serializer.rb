class PhotoSerializer < ActiveModel::Serializer 
  include Rails.application.routes.url_helpers 

  attributes :id, :photo_url, :event_id

  def photo_url 
   # return object.filenames.url 
    variant = object.filename.variant(resize: "200x200")
    return rails_representation_url(variant, only_path: true) 
  end 

end 