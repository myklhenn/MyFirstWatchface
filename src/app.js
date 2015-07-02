
var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Window({
  fullscreen: true
});

var main_time = new UI.TimeText({
  text: '%I:%M',
  position: new Vector2(0, 45),
  size: new Vector2(144, 42),
  font: 'bitham-42-light',
  textAlign: 'center'
});

var main_date = new UI.TimeText({
  text: '%a %d %B',
  position: new Vector2(0, 90),
  size: new Vector2(144, 18),
  font: 'gothic-18',
  textAlign: 'center'
});

main.add(main_time);
main.add(main_date);

main.show();
