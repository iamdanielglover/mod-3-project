class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :fast_attack, :heavy_attack, :speed, :strength, :hit_points, :img_url, :score
end
