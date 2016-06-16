var currentPlayer = 1;
var players = 1;

var p1;
var p2;

var switchPlayer = function() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
    $("#turn").text(p2.name);
  } else {
    currentPlayer = 1;
    $("#turn").text(p1.name);
  }
}

var compTurn = function() {
  p2.roll();
  $("#dice-result").text(p2.diceResult);
  $("#total").text(p2.total);
  if (currentPlayer === 2) {
    p2.roll();
    $("#dice-result").text(p2.diceResult);
    $("#total").text(p2.total);
    if (currentPlayer === 2) {
      p2.hold();
      $("#score2").text(p2.score);
    }
  }
}

function Player(name) {
  this.name = name;
  this.diceResult = 0;
  this.total = 0;
  this.score = 0;
  this.hold = function() {
    this.score = this.score += this.total;
    if (this.score >= 100) {
      alert(this.name + " Wins!!");
    }
    this.total = 0;
    switchPlayer();
  };
  this.roll = function() {
    this.diceResult = Math.floor((Math.random() * 6) + 1);
    if (this.diceResult === 1) {
      this.total = 0;
      switchPlayer();
      if (players === 1) {
        compTurn();
      }
    } else {
      this.total = this.total += this.diceResult;
    }
  };
};


$(document).ready(function() {
  $("#1p").click(function() {
    $(".playerBtn").hide();
    $("#nameInput1").show();
  });
  $("#2p").click(function() {
    $(".playerBtn").hide();
    $("#nameInput2, #nameInput1").show();
    players = 2;
  });
  $("#startGame").click(function(event) {
    event.preventDefault();
    p1 = new Player($("#nameValue1").val());
    if (players === 1) {
      p2 = new Player("Computer");
    } else {
      p2 = new Player($("#nameValue2").val())
    }
    $("#game").show();
    $("#nameInput2, #nameInput1").hide();
    $("#turn").text(p1.name);
  });
  $("#roll").click(function() {
    if (currentPlayer === 1) {
      p1.roll();
      $("#dice-result").text(p1.diceResult);
      $("#total").text(p1.total);
    } else {
      p2.roll();
      $("#dice-result").text(p2.diceResult);
      $("#total").text(p2.total);
    }
  });

  // $("#hold").click(function() {
  //   if (currentPlayer === 1) {
  //     p1.hold();
  //     $("#score1").text(p1.score);
  //   } else {
  //     p2.hold();
  //     $("#score2").text(p2.score);
  //   }
  // });

  $("#hold").click(function() {
    debugger;
    if (currentPlayer === 1) {
      p1.hold();
      $("#score1").text(p1.score);
      if (players === 1) {
        compTurn();
      }
    } else {
      p2.hold();
      $("#score2").text(p2.score);
    }
  });
});


// Infinite Player Project.... do not run =P

// $(document).ready(function() {
//   $("#newPlayer").click(function() {
//     $("#players").append('<div class="col-md-3">',
//                           '<h3>Player 1 Score</h3>',
//                           '<div class="box">',
//                             '<p id="score1">0</p>',
//                           '</div>',
//                         '</div>')
//   });
// });



// var diceResult;
// var total = 0;
// var score1 = 0;
// var score2 = 0;
// var currentPlayer = 1;
//
// alert("Ready Player 1");
//
// var roll = function() {
//   diceResult = Math.floor((Math.random() * 6) + 1);
//   if (diceResult === 1) {
//     total = 0;
//     alert("Rolled a 1 =P");
//     playerSwitch();
//   } else {
//     total = total += diceResult;
//   }
// }
//
// var playerSwitch = function() {
//   if (currentPlayer === 1) {
//     currentPlayer = 2;
//     alert("Ready Player 2");
//   } else {
//     currentPlayer = 1;
//     alert("Ready Player 1");
//   }
// }
//
// var hold = function() {
//   if (currentPlayer === 1) {
//     score1 = score1 += total;
//   } else {
//     score2 = score2 += total;
//   }
//   if (score1 >= 100 || score2 >= 100) {
//     youWin();
//   }
//   total = 0;
// }
//
// var youWin = function() {
//   if (currentPlayer === 1) {
//     alert("PLAYER 1 WINS!!");
//   } else {
//     alert("PLAYER 2 WINS!!");
//   }
// }


// $(document).ready(function() {
//   $("#roll").click(function() {
//     roll();
//     $("#dice-result").text(diceResult);
//     $("#total").text(total);
//   });
//   $("#hold").click(function() {
//     $("#total").text(total);
//     hold();
//     if (currentPlayer === 1) {
//       $("#score1").text(score1);
//     } else {
//       $("#score2").text(score2);
//     }
//     playerSwitch();
//   });
// });
