class UsersController < ApplicationController
  #sup
  def index
    users = User.all 

    render json: users
  end
  
  def create
    user = User.new(params.require(:user).permit(:name, :email))
     if user.save
      render json: user
     else
      render json: user.errors.full_messages, status: :unprocessable_entity
     end
  end

  def show
    render json: params
  end

  def update
    user = User.find_by(id: params[:id])
    if user.update(params.require(:user).permit(:name, :email))
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user.destroy
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end
end
