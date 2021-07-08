class Api::ServerMembershipsController < ApplicationController
  before_action :ensure_logged_in?

  def create
  end

  def destroy
    if current_user.id == params[:currentUserId].to_i
      server_membership = ServerMembership.find_by(
        user_id: current_user.id,
        server_id: params[:id]
      )

      if server_membership
        if server_membership.destroy
          @server = server_membership.server

          render "api/servers/post"
        else
          render json: server_membership.errors.full_messages, status: 422
        end
      else
        render json: { errors: ["Unable to find server membership"] }, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end
end