require 'sidekiq/web'

Rails.application.routes.draw do
  root 'tasks#index'

  resources :tasks, only: [:index, :create, :update, :destroy]

  mount Sidekiq::Web => '/sidekiq'
end
