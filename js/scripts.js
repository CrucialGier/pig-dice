var diceResult;
var total = 0;

var roll = function() {
  diceResult = Math.floor((Math.random() * 6) + 1);
  total = total += diceResult;
}


$(document).ready(function() {
  $("#roll").click(function(){
    roll();
    $("#dice-result").text(diceResult);
    $("#total").text(total);
  });

});
