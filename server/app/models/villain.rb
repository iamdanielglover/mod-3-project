class Villain < ApplicationRecord


  def self.random
    offset = rand(Villain.count)
    Villain.offset(offset).first
  end
end
