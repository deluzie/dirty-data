Rails.application.routes.draw do
  get 'about', to: 'pages#about'
  get 'one', to: 'pages#one'
  root to: 'pages#about'
  # Generic syntax:
  # verb 'path', to: 'controller#action'
end