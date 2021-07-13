class Api::MessagesController < ApplicationController
  before_action :ensure_logged_in?

  def create
    if current_user.id === params[:currentUserId].to_i
      @message = Message.new(message_params)

      if @message.save
        render "api/messages/post"
      else
        render json: @message.errors.full_messages, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def update
  end

  def destroy
    if current_user.id === params[:currentUserId].to_i
      @message = Message.find(params[:id])

      if @message.destroy
        render "api/messages/post"
      else
        render json: @message.errors.full_messages, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :typeable_type, :typeable_id)
  end
end