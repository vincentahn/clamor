class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    user = User.new(user_params)

    if user.save
      login!(user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # render json: ["Cannot update demo login"], status: 401 if params[:id].to_i === 1

    if current_user && current_user.id === params[:id].to_i && current_user.is_password?(params[:user][:currentPassword])
      update_params = {
        username: params[:user][:username],
        email: params[:user][:email]
      }

      unless params[:user][:newPassword].empty?
        update_params[:password] = params[:user][:newPassword]
      end

      if current_user.update(update_params)
        render "api/users/show"
      else
        render json: current_user.errors.full_messages, status: 422
      end
    else
      render json: ["IMPOSTER!"], status: 401
    end
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(
      :username, 
      :email, 
      :password,
      :birthday)
  end
end