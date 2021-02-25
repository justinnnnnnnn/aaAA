class UsersController < ApplicationController
  #sup
  def index
    render plain:'Sup this is a rendered page'
  end
  
  def create
    render json: params
  end

  def show
    render json: params
  end
end
