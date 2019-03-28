Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :heros
  resources :villains

  # post '/new_wave', to: 'heros#new_wave'
  # get '/get_score/:hero_id', to: 'heros#get_score'
end
