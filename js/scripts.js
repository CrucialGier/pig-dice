var currentPlayer = 1;

var switchPlayer = function() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

function Player() {
  this.name = prompt("Enter Player Name");
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
    $("#turn").text(this.name);
  };
  this.roll = function() {
    this.diceResult = Math.floor((Math.random() * 6) + 1);
    if (this.diceResult === 1) {
      this.total = 0;
      switchPlayer();
      $("#turn").text(this.name);
    } else {
      this.total = this.total += this.diceResult;
    }
  };
};

var p1 = new Player();
var p2 = new Player();

$(document).ready(function() {
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
  $("#hold").click(function() {
    if (currentPlayer === 1) {
      p1.hold();
      $("#score1").text(p1.score);
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
