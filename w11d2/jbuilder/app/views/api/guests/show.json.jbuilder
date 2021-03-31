json.extract! @guest, :name, :age, :favorite_color


# # json.partial! 'guest' g
# @guest.gifts.each do |gift|
#   # json.set! @guest.id do
#     json.partial! 'gifts', gifts: gift
#   # end
# end

json.gifts do
  json.array! @guest.gifts, :title, :description
end