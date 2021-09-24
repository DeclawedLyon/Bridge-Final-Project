Rails.application.routes.draw do
  resources :tracking_instances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'
    
    resources :users, :packages, :tracking_instances

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
