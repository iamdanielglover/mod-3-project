class Villain < ApplicationRecord
  has_many :games
  has_many :heros, through: :villains

  def self.random
    offset = rand(Villain.count)
    Villain.offset(offset).first
  end
end
