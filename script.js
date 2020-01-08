let score = 0;
let number = 1;
let answer = "";
let final = document.querySelector('#final');
let guess = document.querySelector('#answer');
let imageBox = document.querySelector("#celebImg");
let scoreboard = document.querySelector('#total');
let numberboard = document.querySelector('#number');
let playerName = "";
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
    console.log("Game is over");
  }

}


//create a timer when body loads
// let timer = setInterval(startTimer, 1000);
//
// //add an event handler
// timer.addEventListener("onload", startTimer);
// //add a callback function
// function startTimer() {
//   let time = 0;
//   document.querySelector('#timer').innerHTML = time
// }
