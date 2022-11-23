var message = document.querySelector(".message");
var question = document.querySelector("input");
var button = document.querySelector("button");

const answersArray = [
  " I am Ok",
  " Thank you",
  " Not bad",
  " great",
  " I dont Know",
  " why do you ask me",
  " Fine thank you",
  " Please Google it",
  " Nice to meet you",
  " yes ofcourse",
];

button.addEventListener("click", answers);

function answers() {
  //var answer = Math.floor(Math.random() * 10);
  var answer = Math.floor(Math.random() * answersArray.length);
  console.log(Math.random() * answersArray.length);
  if (question.value != "") {
    message.innerHTML =
      "Your Question : " +
      question.value +
      "<br/> Computer Answer : " +
      answersArray[answer];
    question.value = "";
    message.style.color = "black";
  } else {
    message.innerHTML = "Please ask your question";
    message.style.color = "red";
  }
}
