class PhotoSerializer < ActiveModel::Serializer 
  include Rails.application.routes.url_helpers 

  attributes :id, :filenames

  #def photo_url 
   # return object.filenames.url 
    #variant = object.filenames.variant(resize: "300x300")
    #return rails_representation_url(variant, only_path: true) 
  #end 

end 