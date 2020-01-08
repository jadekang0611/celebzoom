function buildUrl(){
  let userName = document.querySelector("#playerName").value;
  let url = "category.html?name=" + userName;
  window.location.href = url;
}

// document.querySelector('#playerName').onkeydown = function(evt){
//    if(evt.keyCode == 13){
//      // submit
//    }
// };
