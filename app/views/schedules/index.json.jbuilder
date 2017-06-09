json.array! @schedules do |schedule|
  date_format = schedule.all_day_schedule? ? '%Y-%m-%d' : '%Y-%m-%dT%H:%M:%S'
  json.id schedule.id
  json.title schedule.title
  json.start schedule.start
  json.end schedule.end
  json.update_url schedule_path(schedule, method: :patch)
  json.edit_url edit_schedule_path(schedule)
end