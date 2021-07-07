class ApplicationController < ActionController::Base
  helper_method :current_user

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in?
    if !logged_in?
      render json: { errors: ['invalid credentials'] }, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
