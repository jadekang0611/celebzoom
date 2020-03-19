const parameter = new URLSearchParams(window.location.search);
const name = parameter.get("name");
let playerName = document.querySelector('#name');

playerName.innerHTML = name;

let gameCategoryKr = document.querySelector('#gameCategory-kr');
gameCategoryKr.href = "gamecategory.html?name=" + name + "&country=kr";

let gameCategoryUs = document.querySelector('#gameCategory-us');
gameCategoryUs.href = "gamecategory.html?name=" + name + "&country=us";
