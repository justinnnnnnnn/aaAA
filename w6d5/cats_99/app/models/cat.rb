# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Cat < ApplicationRecord
  #add inclusion validation for allowed colors
  #add sex options m/f
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :sex, length: { is: 1 }, inclusion: {in: %w(m f)}
  validates :color, inclusion: {in: %w(red blue)}
  
  def age
    birthday = birth_date.to_s.to_i
    2021 - birthday
  end

end
