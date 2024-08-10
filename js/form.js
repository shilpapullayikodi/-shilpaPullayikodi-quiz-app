const submitButton = document.querySelector("[data-js='submit-button']");
const form = document.querySelector('[data-js="form"]');
const questionContainer = document.querySelector('[data-js="question-cards"]');
let textAreaQuestion = document.getElementById("your_question");
let textAreaAnswer = document.getElementById("your_answer");
let yourQuestion;
let yourAnswer;
let tag;
console.log(form);

form.addEventListener("submit", (event) => {
  console.log("hi");
  event.preventDefault();

  const formData = new FormData(event.target);
  const objectData = Object.fromEntries(formData);

  createQuestionCard(objectData);
});

function createQuestionCard(data) {
  const questionCard = document.createElement("section");
  questionCard.classList.add("question-cards__question-card");

  // Bookmark
  const bookmarkSection = document.createElement("section");
  bookmarkSection.classList.add("question-cards__question-card__bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add(
    "question-cards__question-card__bookmark__button"
  );

  bookmarkSection.append(bookmarkButton);
  questionCard.append(bookmarkSection);
  // ---------------------------------- //

  // Question
  questionSection = document.createElement("section");
  questionSection.classList.add("question-cards__question-card__question");

  questionCardQuestion = document.createElement("p");
  questionCardQuestion.textContent = data.your_question;

  questionSection.append(questionCardQuestion);
  questionCard.append(questionSection);
  // ---------------------------------- //

  answerButton = document.createElement("button");
  answerButton.classList.add("question-cards__question-card__button");
  answerButton.textContent = "Hide Answer";
  questionCard.append(answerButton);

  // Answer
  answerSection = document.createElement("section");
  answerSection.classList.add("question-cards__question-card__answer");

  answer = document.createElement("p");
  answer.textContent = data.your_answer; //fetch answer from data object with key yourAnswer

  answerSection.append(answer);
  questionCard.append(answerSection);

  // ---------------------------------- //
  questionCard.append(addTag(data));

  questionContainer.append(questionCard); // Add newly created question card into question_cards
}

function addTag(data) {
  formTagSection = document.createElement("section");
  formTagSection.classList.add("question-cards__question-card__tags");

  formTag = document.createElement("a");
  formTag.setAttribute("href", data.tag);

  formTag.textContent = "# " + data.tag;
  formTagSection.append(formTag);

  return formTagSection;
}
function textareaQuestionLengthCheck() {
  var charactersLeft = 150 - textAreaQuestion.value.length;
  var count = document.getElementById("characters-left");
  count.textContent = "Characters left: " + charactersLeft;
}
textAreaQuestion.addEventListener("keyup", () => {
  textareaQuestionLengthCheck();
});

//-----------------Answer----------------------//
function textareaAnswerLengthCheck() {
  var charactersLeft = 150 - textAreaAnswer.value.length;
  var count = document.getElementById("characters-left-answer");
  count.textContent = "Characters left: " + charactersLeft;
}
textAreaAnswer.addEventListener("keyup", () => {
  textareaAnswerLengthCheck();
});
