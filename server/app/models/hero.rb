class Hero < ApplicationRecord
  has_many :games
  has_many :villains, through: :games
end
