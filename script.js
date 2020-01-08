let score = 0;
let number = 1;
let answer = "";
let final = document.querySelector('#final');
let guess = document.querySelector('#answer');
let imageBox = document.querySelector('#celebImg');
let scoreboard = document.querySelector('#total');
let numberboard = document.querySelector('#number');
let playerName = "";
let gameResult = document.querySelector('#gameResult');
let message = document.querySelector('#lastMessage');
let messageboard = document.querySelector('#qandA');
let submitButton = document.querySelector('#submit');

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

const celeZumResponse = ['Correct! How did you know?', 'Incorrect! The answer is ']

function showOrigin() {
  imageBox.style.transform = "scale(1)";
}

function checkAnswer() {
  submitButton.disabled = true;
  if (guess.value.toUpperCase() === celebrities[number - 1].name.toUpperCase()) {
    score += 10;
    scoreboard.innerText = score;
    messageboard.innerText = celeZumResponse[0];
    showOrigin();
  } else {
    messageboard.innerText = celeZumResponse[1] + celebrities[number - 1].name;
    showOrigin();
  }
  guess.value = "";
  if (number !== celebrities.length) {
    setTimeout(() => {
      imageBox.style.transform = "scale(3.5)";
      number++;
      numberboard.innerText = number;
      imageBox.src = celebrities[number - 1].src;
      messageboard.innerText = "Who is this?";
      submitButton.disabled = false;
    }, 5000);

  } else {
    setTimeout(() => {
      imageBox.style.transform = "scale(3.5)";
      gameResult.innerText = score / 10;
      modal.style.display = "block";
      lastMessage.innerText = statement();
    }, 3000)

  }

}



const messageList = [
  'I guess this is your weakness.',
  'I can see you tried your best!',
  'This is your strength. You rock!'
]




function statement() {
  let noOfRightAnswer = score / 10;
  if ((noOfRightAnswer / celebrities.length) * 100 < 50) {
    return messageList[0];

  } else if ((noOfRightAnswer / celebrities.length) * 100 >= 50 && (noOfRightAnswer / celebrities.length) * 100 < 80) {
    return messageList[1];
  } else {
    return messageList[2];
  }
}

const parameter = new URLSearchParams(window.location.search);
const name = parameter.get('name');
console.log(name);
let playerNameMusic = document.querySelector('#name');
playerNameMusic.innerHTML = name;

// Get the modal
let modal = document.querySelector('#resultModal');
let modalButton = document.querySelector('.modalButton');


// When the user clicks on Restart Game, close the modal and go back to the welcome page
modalButton.onclick = function() {
  modal.style.display = "none";
  window.location.href = 'index.html';
}
