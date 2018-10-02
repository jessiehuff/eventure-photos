class EventSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
 
  attributes :id, :name, :description, :cover_url 

  def cover_url 
   variant = object.cover.variant(resize: "100x100") 
   return rails_representation_url(variant, only_path: true)
  end 

  #url_for(object.cover) if object.cover.attachment 

  #has_many :users 
  #has_many :photos 
end 