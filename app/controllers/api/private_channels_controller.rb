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
    if current_user.id === params[:currentUserId].to_i
      @channel = PrivateChannel.find(params[:id])

      if @channel
        render "api/private_channels/show"
      else
        render json: { errors: ["Private channel could not be found"]}, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def show_by_user
    if current_user.id === params[:currentUserId].to_i
      @channel = PrivateChannel.getPrivateChannelByUser(current_user, params[:user_id])
  
      render "api/private_channels/show"
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end
end