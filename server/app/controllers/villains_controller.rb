class VillainsController < ApplicationController
  def index
    @villains = Villain.all
  end

  def show
    @villain = Villain.find_by(id: params[:id])
    render json: @villain
  end



end
