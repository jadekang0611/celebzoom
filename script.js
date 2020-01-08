let score = 0;
let number = 1;
let answer = "";
let final = document.querySelector('#final');
let guess = document.querySelector('#answer');
let imageBox = document.querySelector("#celebImg");
let scoreboard = document.querySelector('#total');
let numberboard = document.querySelector('#number');
let playerName = "";
let gameResult = document.querySelector('#gameResult');
let message = document.querySelector('#lastMessage');
//create celebrity class

class Celebrity {
  constructor(src, name) {
    this.src = src;
    this.name = name;
  }
}

let celebrities = [new Celebrity('img/johnny_depp.jpg', "Johnny Depp"), new Celebrity('https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg', "Al Pacino")];
console.log("Celebrities: " + celebrities);
console.log("First Src: " + celebrities[number - 1].src);
imageBox.src = celebrities[number - 1].src;
final.innerText = celebrities.length;

function checkAnswer(){
  if (guess.value.toUpperCase() === celebrities[number - 1].name.toUpperCase()) {
    console.log("you got it");
    score+= 10;
    scoreboard.innerText = score;
  } else {
    console.log("wrong");
  }
  guess.value = "";
  if (number !== celebrities.length) {
    number++;
    numberboard.innerText = number;
    imageBox.src = celebrities[number - 1].src;
  }
  else {
    gameResult.innerText = score/10;
    modal.style.display = "block";
    lastMessage.innerText = statement();
  }

}



const messageList = [
  'You suck',
  'You mediocre',
  'You rock!'
]




function statement() {
  let noOfRightAnswer = score/10;
  console.log(noOfRightAnswer);
  console.log(celebrities.length);
  console.log((noOfRightAnswer / celebrities.length)*100);
  if ((noOfRightAnswer / celebrities.length)*100 < 50) {
    return messageList[0];

  } else if ((noOfRightAnswer / celebrities.length)*100 >= 50 && (noOfRightAnswer / celebrities.length)*100 < 80) {
    return messageList[1];
  } else {
    return messageList[2];
  }
}


// Get the modal
let modal = document.querySelector("#resultModal");

// When the user clicks on Restart Game, close the modal and go back to the welcome page
span.onclick = function() {
  modal.style.display = "none";
}

//when restart button is clicked, redirect player to the very first screen
function newGame() {
  window.location.href = 'index.html';
}
