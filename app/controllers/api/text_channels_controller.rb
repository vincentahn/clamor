class Api::TextChannelsController < ApplicationController
  def create
    if current_user.id === params[:currentUserId].to_i
      @channel = TextChannel.new(
        name: params[:channelName],
        server_id: params[:serverId].to_i
      )

      if @channel.save
        render "api/text_channels/post"
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def update
  end

  def destroy
  end
end