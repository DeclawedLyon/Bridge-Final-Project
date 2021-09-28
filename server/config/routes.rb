Rails.application.routes.draw do
  resources :couriers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data
    
    get '/data', to: 'tests#index'
    get '/couriers', to: 'couriers#show'
    # get '/packages', to: 'packages#show'
    
    resources :packages 

    resources :users, :couriers

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
