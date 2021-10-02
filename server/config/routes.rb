Rails.application.routes.draw do
  # resources :couriers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sms_messages, only: [:create]

  namespace :api do # /api/data

    # routes to send you to packages controller
    get '/packages', to: 'packages#index'
    get '/getpackagenickname', to: 'packages#get_pkg_by_nickname'
    get '/getpackage', to: 'packages#get_pkg_by_trkNum'
    get '/packages-info', to: 'packages#show'
    get '/packages/get_priority', to: 'packages#get_priority'
    post '/packages/add_item', to: 'packages#add_item'
    put '/packages/deliver', to: 'packages#deliver'
    put '/packages/clear', to: 'packages#clear'
    put '/packages/remove', to: 'packages#remove'
    put 'packages/make_priority', to: 'packages#make_priority'
    put 'packages/remove_from_priority', to: 'packages#remove_from_priority'

    # routes to send you to courier controller
    get '/couriers', to: 'couriers#show'
    
    # get '/data', to: 'tests#index'

    resources :users, :packages,  :couriers

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
