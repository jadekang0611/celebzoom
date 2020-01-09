const parameter = new URLSearchParams(window.location.search);
const name = parameter.get("name");
const country = parameter.get("country")

let musicTrivia = document.querySelector('#music-trivia');
musicTrivia.href = "music-trivia.html?name=" + name + "&country=" + country + "&category=musicians";

let actTrivia = document.querySelector('#act-trivia');
actTrivia.href = "music-trivia.html?name=" + name + "&country=" + country + "&category=actors";

let tennisTrivia = document.querySelector('#tennis-trivia');
tennisTrivia.href = "music-trivia.html?name=" + name + "&country=" + country + "&category=athletes";
