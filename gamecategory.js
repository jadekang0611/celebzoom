const parameter = new URLSearchParams(window.location.search);
const name = parameter.get("name");

let musicTrivia = document.querySelector('#music-trivia');
musicTrivia.href = "music-trivia.html?name=" + name;
