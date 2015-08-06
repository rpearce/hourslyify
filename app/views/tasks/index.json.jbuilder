json.array! @tasks.each do |task|
  json.id task.id
  json.name task.name
  json.current_rate task.current_rate
  json.start task.start.try(:strftime, '%D %r')
  json.stop task.stop.try(:strftime, '%D %r')
end
