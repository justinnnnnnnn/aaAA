class UsersController < ApplicationController

  before_action :required_logged_in, only: [:index, :show, :edit, :update, :destroy]

  def index
    @users = User.all 
    render :index 
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def new
    @user = User.new
    render :new     
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.id == current_user.id
      if @user.update(user_params)
        redirect_to users_url 
      else
        flash.now[:errors] = @user.errors.full_messages
        render :edit
      end
    else
      flash[:errors] = ['Invalid']
      redirect_to users_url 
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user && @user.id == current_user.id 
      @user.delete
      logout!
    else
      flash[:errors] = ['Invalid']
      redirect_to users_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
