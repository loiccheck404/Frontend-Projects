const flashcards = [
  { question: "What is the capital of Cameroon?", answer: "Yaounde" },
  { question: "What continent is Dubai in?", answer: "Asia" },
  { question: "What is the square root of 144?", answer: "12" },
  { question: "Who wrote Hamlet?", answer: "Willaim Shakespeare" },
  { question: "Who is my favourite artist?", answer: "Asake" },
];

let currentCardIndex = 0;
let answerVisible = false;

const cardContent = document.getElementById("card-content");
const progressBar = document.getElementById("progress-bar");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");

function displayCard() {
  cardContent.textContent = answerVisible
    ? flashcards[currentCardIndex].answer
    : flashcards[currentCardIndex].question;
}

function flipCard() {
  answerVisible = !answerVisible;
  displayCard();
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  answerVisible = false;
  displayCard();
  updateProgressBar();
}

function updateProgressBar() {
  const progress = (currentCardIndex + 1) / flashcards.length;
  progressBar.style.width = `${progress * 100}%`;
}

flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);

displayCard();
updateProgressBar();
