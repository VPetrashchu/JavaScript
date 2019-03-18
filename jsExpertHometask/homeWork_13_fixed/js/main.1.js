(function () { 
let btn = document.getElementById("play");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let result = document.getElementById("result");
let pc1 = document.getElementById("player1_picture");
let pc2 = document.getElementById("player2_picture");

function getPlayerResult() {    
    return Math.floor((Math.random() * 3) + 1);
}
imgForPlayer1 = getPicture(resultPlayer1);
imgForPlayer2 = getPicture(resultPlayer2);

function runGame() {
    let resultPlayer1 = getPlayerResult();
    let resultPlayer2 = getPlayerResult();
    let winner = isWinner(resultPlayer1, resultPlayer2);

    player1.innerHTML = getName(resultPlayer1);
    player2.innerHTML = getName(resultPlayer2);
    pc1.innerHTML ="<img src='" + imgForPlayer1 + "'>";
    pc2.innerHTML ="<img src='" + imgForPlayer2 + "'>";
    printResult(winner);
}
 function isWinner(player1, player2) {
     if(player1 === player2) {
         return 0;
     } else if (
         (player1 === 1 && player2 === 2) ||
         (player1 === 2 && player2 === 3) ||
         (player1 === 3 && player2 === 1)
     ) {
         return 1;
     } else {
         return 2;
     }
 }
function getName(a) {
    switch(a) {
        case 1:
        return "rock";
         case 2:
         return "scissors";
         case 3:
         return "paper";
    }
}
function getPicture(a) {
    switch(a){
        case 1:
        return "img/rock.jpg";
        case 2:
        return "img/scissors.jpg";
        case 3:
        return "img/paper.jpg"
    }
}
function printResult(winner) {
    switch (winner) {
        case 1:
        result.innerHTML = "The first is a winner";
        break;
        case 2:
        result.innerHTML = "The second is a winner";
        break;
        case 3:
        result.innerHTML = "Nobody";
        break;
    }
}

btn.addEventListener("click", runGame);
});