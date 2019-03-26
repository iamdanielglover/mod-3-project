class VillainsController < ApplicationController
  def index
    @villains = Villain.all
    render json: @villains
  end

  def show
    @villain = Villain.find_by(id: params[:id])
    render json: @villain
  end



end
