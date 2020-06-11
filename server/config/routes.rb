Rails.application.routes.draw do
  resources :employees
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/posts", to: 'posts#create'
  get "/posts", to: "posts#index"
end
