class Hero < ApplicationRecord

  def self.sortByScore
    Hero.order(:score).reverse()
  end

end
