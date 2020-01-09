let userName = document.querySelector('#playerName');
let submit = document.querySelector('.button');
let warningZone = document.querySelector('#playerName');
const nameField = document.querySelector('.nameField');
const button = document.querySelector('.button');
const label = document.querySelector('.textfield-label');

function buildUrl() {
  if (userName.value === '') {
    warningZone.classList.add('errorShake');
    setTimeout(function(){
      warningZone.classList.remove('errorShake');
    }, 500);
    return;

  } else {
    let url = "category.html?name=" + userName.value;
    window.location.href = url;
  }
}

//prevent the screen being refreshed
button.addEventListener('click', function(e) {
  e.preventDefault()
})

//add event handler for enter input
nameField.addEventListener('keyup', function(e) {
  if(e.code === 13) {
    e.preventDefault();

  }
})
