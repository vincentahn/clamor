class Api::ServersController < ApplicationController
  before_action :ensure_logged_in?

  def index
    # Eventually will start getting 10 servers sorted by created_at but for now get all
    if current_user.id === params[:currentUserId].to_i
      @servers = Server.all
      render "api/servers/index"
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def show
    if current_user.id === params[:currentUserId].to_i
      servers = Server.all.includes(:members, :text_channels => [:messages])
      @server = servers.find_by(id: params[:id])

      if @server
        render "api/servers/show"
      else
        render json: { errors: ["Could not find server"] }, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def create
    if current_user.id === params[:currentUserId].to_i
      server_params = { 
        name: params[:server][:name],
        founder_id: current_user.id
      }

      if params[:server][:server_photo]
        server_params[:server_photo] = params[:server][:server_photo]
      end

      @server = Server.new(server_params)

      if @server.save
        ser_mem_params = {
          user_id: current_user.id,
          server_id: @server.id
        }

        server_membership = ServerMembership.new(ser_mem_params)

        if server_membership.save
          render "api/servers/post"
        else
          render json: { errors: ["Server created but not added by user"] }, status: 422
        end
      else
        render json: @server.errors.full_messages, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def update
    if current_user.id === params[:currentUserId].to_i
      update_params = { 
        name: params[:server][:name]
      }

      if params[:server][:server_photo]
        update_params[:server_photo] = params[:server][:server_photo]
      end

      @server = Server.find_by(id: params[:id])

      if @server
        if @server.update(update_params)
          render "api/servers/post"
        else
          render json: @server.errors.full_messages, status: 422
        end
      else
        render json: { errors: ["Couldn't find server"] }, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end

  def destroy
    if current_user.id === params[:currentUserId].to_i
      @server = Server.find_by(id: params[:id])

      if @server && @server.founder_id === current_user.id
        if @server.destroy
          render "api/servers/post"
        else
          render json: @server.errors.full_messages, status: 422
        end
      else
        render json: { errors: ["Only founder can delete server"] }, status: 422
      end
    else
      render json: { errors: ["IMPOSTER!"] }, status: 401
    end
  end
end