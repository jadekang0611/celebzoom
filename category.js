const parameter = new URLSearchParams(window.location.search);
const name = parameter.get("name");
let playerName = document.querySelector('#name');

playerName.innerHTML = name;

let gameCategory = document.querySelector('#gameCategory');
gameCategory.href = "gamecategory.html?name=" + name;
