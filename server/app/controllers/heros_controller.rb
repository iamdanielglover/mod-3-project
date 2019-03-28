class HerosController < ApplicationController
  def index
    @heros = Hero.sortByScore
    render json: @heros
  end

  def show
    @hero = Hero.find_by(id: params[:id])

    if @hero
      render json: @hero
    else
      render json: { errors: "Hero could not be found." }, status: 404
    end
  end


  def create
    @hero = Hero.new(hero_params)
    if @hero.save
      render json: @hero
    else
      render json: { errors: @hero.errors.full_messages }, status: 404
    end
  end


#   fetch('http://localhost:3000/new_wave', {
# method: 'POST',
# headers: {'Content-Type': 'application/json'},
# body: JSON.stringify({hero_id: 1})
# }).then(resp => resp.json())

  def update
    @hero.update(hero_params)
    if @hero.save
      render json: @hero
    else
      render json: { errors: @hero.errors.full_messages }, status: 404
    end
  end

  # def new_wave
  #   @game = Game.new(hero_id: params[:hero_id], villain: Villain.random)
  #   if @game.save
  #     render json: @game.villain
  #   else
  #     render json: { errors: @game.errors.full_messages }, status: 404
  #   end
  # end
  #
  # def get_score
  #   @hero = Hero.find_by(id: params[:hero_id])
  #   render json: { score: @hero.games.length }
  # end

private

  def hero_params
    params.require(:hero).permit(:name, :fast_attack, :heavy_attack, :speed, :strength, :hit_points, :img_url, :score)
  end
end
