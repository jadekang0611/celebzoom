const parameter = new URLSearchParams(window.location.search);
const name = parameter.get("name");

let musicTrivia = document.querySelector('#music-trivia');
musicTrivia.href = "music-trivia.html?name=" + name;

let actTrivia = document.querySelector('#act-trivia');
actTrivia.href = "music-trivia.html?name=" + name;

let tennisTrivia = document.querySelector('#tennis-trivia');
tennisTrivia.href = "music-trivia.html?name=" + name;
