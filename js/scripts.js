var total = 0;

var roll = function() {
 total = total += Math.floor((Math.random() * 6) + 1);
}


$(document).ready(function() {
  $("#roll").click(function(){
    roll();
    $("#total").text(total);
  });

});
