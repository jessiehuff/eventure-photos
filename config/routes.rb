Rails.application.routes.draw do

  resources :covers
  namespace :api do 
    namespace :v1 do 
      devise_for :users
        resources :events do
          resources :photos
        end
    end 
  end 
end


