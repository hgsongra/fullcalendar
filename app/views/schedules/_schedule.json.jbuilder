date_format = schedule.all_day_schedule? ? '%Y-%m-%d' : '%Y-%m-%dT%H:%M:%S'

json.id schedule.id
json.title schedule.title
json.start schedule.start.strftime(date_format)
json.end schedule.end.strftime(date_format)

json.allDay schedule.all_day_schedule? ? true : false

json.update_url schedule_path(schedule, method: :patch)
json.edit_url edit_schedule_path(schedule)