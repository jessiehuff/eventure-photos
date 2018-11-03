class EventSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
 
  attributes :id, :name, :description, :likes, :cover_url 

  def cover_url 
    variant = object.cover.variant(resize: "100x100") 
    return rails_representation_url(variant, only_path: true)
  end 

end 