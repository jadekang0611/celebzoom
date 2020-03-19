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
let celebrities = [];
const parameter = new URLSearchParams(window.location.search);
const country = parameter.get("country");
const category = parameter.get("category");
const name = parameter.get('name');
const answerField = document.querySelector('#answer');
let timer = document.querySelector('#realTime');
let flag = false;
let interval;

//prevent the screen being refreshed
submitButton.addEventListener('click', function(e) {
  e.preventDefault()
})

//add event handler for enter input
answerField.addEventListener('keyup', function(e) {
  if(e.code === 13) {
    e.preventDefault();

  }
})

//create celebrity class
class Celebrity {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }
}

//To generate randomIndexNumber and limit my data query to 10 per game

let shuffled = [];
let limitedQuery = [];



//How can I retrieve my data in firebase https://firebase.google.com/docs/firestore/query-data/get-data
var docRef = db.collection(country).doc(category);
docRef.get().then(function(doc) {
  if (doc.exists) {
    const data = doc.data().records;
    data.forEach(el => {
      let celeb = new Celebrity(el.name, el.src);
      celebrities.push(celeb);

    });

    // create array of numbers for shuffling
    for (let i = 0; i < celebrities.length; i++) {
      shuffled.push(i);
    }

    // shuffle the array based on Fisher-Yates shuffle
    for (let i = 0; i < celebrities.length; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    // populate limited array
    for (let i = 0; i < 10; i++) {
      let index = shuffled[i];
      limitedQuery.push(celebrities[index]);
    }


    imageBox.src = limitedQuery[number - 1].src;
    final.innerText = limitedQuery.length;

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");

  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

const celeZumResponse = ['Correct! How did you know?', 'Incorrect! The answer is ']
function showOrigin() {

  imageBox.style.transform = "scale(1)";
}

const messageList = [
  'I guess this is your weakness.',
  'I can see you tried your best!',
  'This is your strength. You rock!'
]


function statement() {
  console.log("statement");
  let noOfRightAnswer = score / 10;
  if ((noOfRightAnswer / limitedQuery.length) * 100 < 50) {
    return messageList[0];

  } else if ((noOfRightAnswer / limitedQuery.length) * 100 >= 50 && (noOfRightAnswer / limitedQuery.length) * 100 < 80) {
    return messageList[1];
  } else {
    return messageList[2];
  }
}

//create timer
function setTimer(){
  let count = 11;
  interval = setInterval(function(){
    timer.innerHTML=count - 1;
    count--;
    // timer has run out
    if (count === 0){

      clearInterval(interval);
      messageboard.innerText = celeZumResponse[1] + limitedQuery[number - 1].name;
      showOrigin();
      guess.value = "";
      if (number !== limitedQuery.length) {
        flag = false;
        setTimeout(() => {
          number++;
          numberboard.innerText = number;
          imageBox.src = limitedQuery[number - 1].src;
          messageboard.innerText = "Who is this?";
          submitButton.disabled = false;
          imageBox.style.transform = "scale(3.5)";
          setTimer();
        }, 3000);

      } else {
        setTimeout(() => {
          gameResult.innerText = score / 10;
          modal.style.display = "block";
          lastMessage.innerText = statement();
          imageBox.style.transform = "scale(3.5)";

        }, 3000)

      }
    }
  }, 1000);
}

setTimer();

function checkAnswer() {

  submitButton.disabled = true;
  if (guess.value.toUpperCase() === limitedQuery[number - 1].name.toUpperCase()) {
    clearInterval(interval);

    count = 0;
    timer.innerHTML=count;

    score += 10;
    scoreboard.innerText = score;
    messageboard.innerText = celeZumResponse[0];
    showOrigin();
  } else {
    clearInterval(interval);
    count = 0;
    timer.innerHTML=count;
    messageboard.innerText = celeZumResponse[1] + limitedQuery[number - 1].name;
    showOrigin();
  }
  guess.value = "";
  if (number !== limitedQuery.length) {
    setTimeout(() => {
      number++;
      numberboard.innerText = number;
      imageBox.src = limitedQuery[number - 1].src;
      messageboard.innerText = "Who is this?";
      submitButton.disabled = false;
      imageBox.style.transform = "scale(3.5)";
      setTimer();
    }, 3000);

  } else {
    setTimeout(() => {

      gameResult.innerText = score / 10;
      modal.style.display = "block";
      lastMessage.innerText = statement();
      imageBox.style.transform = "scale(3.5)";
      setTimer();
    }, 3000);

  }

}



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
