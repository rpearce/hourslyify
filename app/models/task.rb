class Task < ActiveRecord::Base
  validates :name, presence: true
  validates :current_rate, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true
end
