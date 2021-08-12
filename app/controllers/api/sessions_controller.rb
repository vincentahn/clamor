class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: { errors: ["Login or password is invalid"] }, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
    else
      render json: { errors: ["Nobody signed in"] }, status: 404
    end
  end
end