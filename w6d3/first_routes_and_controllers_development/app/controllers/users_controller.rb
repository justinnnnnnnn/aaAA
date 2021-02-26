class UsersController < ApplicationController
  #sup
  def index
    users = User.all 

    render json: users
  end
  
  def create
    user = User.new(user_params)
     if user.save
      render json: user
     else
      render json: user.errors.full_messages, status: :unprocessable_entity
     end
  end

  def show
    user = User.find_by(id: params[:id])
    if user.exists?
      render json: user
    else 
      render json: user.errors.full_messages
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
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



  private

    def user_params
      user_param = params.require(:user).permit(:name, :email)
    end

















end

