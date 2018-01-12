const Board = require('firmata');

Board.requestPort(function(err, port) {

  if(err) {
    console.log(error);
    return;
  }

  var board = new Board(port.comName);

  // start to blink when the arduino is ready
  board.on("ready", function() {
    //console.log("connected: " + modem);
    var ledOn = true;

    board.pinMode(13, board.MODES.OUTPUT);
    
    // blink the led
    setInterval(function() {

      if(ledOn) {
        console.log('ON');
        board.digitalWrite(13, board.HIGH);
      } else {
        console.log('OFF');
        board.digitalWrite(13, board.LOW);
      }

      ledOn = !ledOn;
    }, 1000);

  });

})
