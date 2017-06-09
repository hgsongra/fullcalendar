var initialize_calendar;
initialize_calendar = function() {
  $('.calendar').each(function(){
    var calendar = $(this);
    calendar.fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: '/schedules.json',

      select: function(start, end) {
        $.getScript('/schedules/new', function() {
          $('#schedule_date_range').val(moment(start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm"))
          // date_range_picker();
          $('#schedule_start').val(moment(start).format('YYYY-MM-DD HH:mm'));
          $('#schedule_end').val(moment(end).format('YYYY-MM-DD HH:mm'));
        });

        calendar.fullCalendar('unselect');
      },

      eventDrop: function(schedule, delta, revertFunc) {
        schedule_data = { 
          schedule: {
            id: schedule.id,
            start: schedule.start.format(),
            end: schedule.end.format()
          }
        };
        $.ajax({
            url: schedule.update_url,
            data: schedule_data,
            type: 'PATCH'
        });
      },
      
      eventClick: function(schedule, jsEvent, view) {
        $.getScript(schedule.edit_url, function() {
          $('#event_date_range').val(moment(schedule.start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(schedule.end).format("MM/DD/YYYY HH:mm"))
          date_range_picker();
          $('.start_hidden').val(moment(schedule.start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(schedule.end).format('YYYY-MM-DD HH:mm'));
        });
      }
    });
  })
};

$(document).on('turbolinks:load', initialize_calendar);