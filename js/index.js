let userName = document.querySelector('#playerName');
let submit = document.querySelector('.button');
let warningZone = document.querySelector('#playerName');

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

//add callback function

// document.querySelector('#playerName').onkeydown = function(evt){
//    if(evt.keyCode == 13){
//      // submit
//    }
// };
