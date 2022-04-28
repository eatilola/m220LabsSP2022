let state = document.getElementsByClassName("state");
let dvAnswer = document.getElementById("dvAnswers");

for (i = 0; i < state.length; i++) {
  state[i].addEventListener("click", showAnswer);
}

function showAnswer(event) {
  let answer = event.target.getAttribute("data-answer");
  dvAnswer.innerHTML = answer;
}