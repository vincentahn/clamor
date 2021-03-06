Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :server_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :update, :destroy]
    resources :text_channels, only: [:create, :update, :destroy]
    resources :private_channels, only: [:index, :show]
  end

  get 'api/private_channels/user/:user_id', :to => 'api/private_channels#show_by_user', defaults: {format: :json}

  mount ActionCable.server => '/cable'
end
