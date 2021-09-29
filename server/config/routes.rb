Rails.application.routes.draw do
  resources :couriers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
  get '/packages', to:'packages#index'

=======
  
  get "/packages", to: 'packages#index'
  delete "/packages/:id", to: 'packages#destroy'
  
>>>>>>> 1380a50bdc5f1da3592dc8c9cf8843548ed5f658
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
