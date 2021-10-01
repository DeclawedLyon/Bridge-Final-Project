Rails.application.routes.draw do
  resources :couriers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data

    # routes to send you to packages controller
    get '/packages', to: 'packages#index'
    get '/getpackagenickname', to: 'packages#get_pkg_by_nickname'
    get '/getpackage', to: 'packages#get_pkg_by_trkNum'
    get '/packages-info', to: 'packages#show'
    post '/packages/add_item', to: 'packages#add_item'
    delete "/removepackage/:id", to: 'packages#destroy'

    # routes to send you to courier controller
    get '/couriers', to: 'couriers#show'
    
    # get '/data', to: 'tests#index'

    resources :users, :packages,  :couriers

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
