Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      devise_for :users
        resources :events
          resources :photos
    end 
  end 
end
