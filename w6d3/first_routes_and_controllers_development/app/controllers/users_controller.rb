class UsersController < ApplicationController
  #sup
  def index
    users = User.all 

    render json: users
  end
  
  def create
    render json: params
  end

  def show
    render json: params
  end
end
