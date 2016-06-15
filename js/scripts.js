var diceResult;
var total = 0;
var score = 0;

var roll = function() {
  diceResult = Math.floor((Math.random() * 6) + 1);
  if (diceResult === 1) {
    total = 0;
  } else {
    total = total += diceResult;
  }
}

var hold = function() {
  score = score += total;
  if (score >= 100) {
    youWin();
  }
  total = 0;
}

var youWin = function() {
  alert("YOU WIN!!"); 
}


$(document).ready(function() {
  $("#roll").click(function() {
    roll();
    $("#dice-result").text(diceResult);
    $("#total").text(total);
  });
  $("#hold").click(function() {
    hold();
    $("#total").text(total);
    $("#score").text(score);
  });
});
