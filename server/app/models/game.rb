class Game < ApplicationRecord
  belongs_to :hero
  belongs_to :villain
end
