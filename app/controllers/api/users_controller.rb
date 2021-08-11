class Api::UsersController < ApplicationController
  before_action :ensure_logged_in?, only: [:update]

  def index
    # Eventually will start getting 10 users sorted alphabetically but for now get all
    if current_user.id === params[:currentUserId].to_i
      @users = User.where.not(id: params[:currentUserId].to_i)
      render "api/users/index"
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end

  end

  def create
    user = User.new(user_params)

    if user.save
      login!(user)
      render "api/users/show"
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def update
    # render json: ["Cannot update demo login"], status: 401 if params[:id].to_i === 1

    if current_user.id === params[:id].to_i
      if current_user.is_password?(params[:user][:currentPassword])
        update_params = {
          username: params[:user][:username],
          email: params[:user][:email]
        }
  
        unless params[:user][:newPassword].empty?
          update_params[:password] = params[:user][:newPassword]
        end
  
        if params[:user][:photo]
          update_params[:profile_photo] = params[:user][:photo]
        end
  
        if current_user.update(update_params)
          render "api/users/show"
        else
          render json: current_user.errors.full_messages, status: 422
        end
      else
        render json: { errors: ["You must input correct current password to update fields"] }, status: 401
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
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