class Api::PrivateChannelsController < ApplicationController
  def index
    if current_user.id === params[:currentUserId].to_i
      @private_channels = PrivateChannel
        .joins(:users)
        .where("users.id = ?", params[:currentUserId].to_i)

      render "api/private_channels/index"
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def show

  end
end