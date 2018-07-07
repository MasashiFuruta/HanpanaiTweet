Rails.application.routes.draw do
  root to: 'pages#root'

  get '/auth/twitter/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
end
