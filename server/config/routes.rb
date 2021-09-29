Rails.application.routes.draw do
  resources :couriers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/packages", to: 'packages#index'
  delete "/packages/:id", to: 'packages#destroy'
  
  resource :packages, only: [:show] do 
    post  :add_item
    post  :remove_item
  end
  namespace :api do # /api/data
    
    get '/data', to: 'tests#index'
    get '/couriers', to: 'couriers#show'
    get '/getpackage', to: 'packages#get_pkg_by_trkNum'
    get '/packages-info', to: 'packages#show'
    

    resources :users, :packages,  :couriers

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
