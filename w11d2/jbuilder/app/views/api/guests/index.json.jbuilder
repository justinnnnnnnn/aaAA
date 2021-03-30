json.array! @guests do
  json.name @guests.name
  json.age @guests.age
  json.favorite_color @guests.favorite_color
end

json.partial! 'guest', guest