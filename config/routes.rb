Rails.application.routes.draw do
  root to: 'pages#about'
  get 'about', to: 'pages#about'
  get 'first', to: 'pages#first'
  get 'second', to: 'pages#second'
  # Generic syntax:
  # verb 'path', to: 'controller#action'
end