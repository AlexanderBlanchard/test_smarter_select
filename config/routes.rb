Rails.application.routes.draw do
  get 'movies/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  get 'genres/obtain_genres', to: 'genres#obtain_genres'
  get 'languages/obtain_languages', to: 'languages#obtain_languages'
  
  # Defines the root path route ("/")
  root 'movies#index'
  get 'movies/obtain_movies', to: 'movies#obtain_movies'
end
