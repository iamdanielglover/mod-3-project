class VillainsController < ApplicationController
  def index
    @villains = Villain.all
  end

  
end
