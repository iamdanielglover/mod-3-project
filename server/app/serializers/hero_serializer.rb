class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :fast_attack, :heavy_attack, :speed, :strength, :hit_points, :img_url, :games

  def games
    self.object.games.map do |game|
      {villain_id: game.villain_id}
     end
  end
end
