Task.create!([
  { name: 'Mow the lawn', current_rate: '2000', start: DateTime.now - 1.day, stop: DateTime.now + 1.hour - 1.day },
  { name: 'Taught students', current_rate: '5000', start: DateTime.now - 1.day, stop: DateTime.now + 3.hours - 1.day },
  { name: 'Washed the Tibby', current_rate: '0', start: DateTime.now, stop: DateTime.now + 20.minutes }
])
