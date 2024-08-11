document
  .querySelector('[data-js="js-show-button-1"]')
  .addEventListener("click", () => {
    showAnswerFunc();
  });

document
  .querySelector('[data-js="js-hide-button-1"]')
  .addEventListener("click", () => {
    hideAnswerFunc();
  });

function showAnswerFunc() {
  let showAnswer = document.querySelector('[data-js= "show-answer-1"]');
  let questionCardShowButton = document.querySelector(
    '[data-js="js-show-button-1"]'
  );
  let questionHideButton = document.querySelector(
    '[data-js="js-hide-button-1"]'
  );

  showAnswer.classList.add("question-cards__question-card__answer");
  showAnswer.classList.remove("question-cards__question-card__answer--hidden");

  questionCardShowButton.classList.add(
    "question-cards__question-card__button--hidden"
  );
  questionCardShowButton.classList.remove(
    "question-cards__question-card__button"
  );

  questionHideButton.classList.add("question-cards__question-card__button");
  questionHideButton.classList.remove(
    "question-cards__question-card__button--hidden"
  );
}

function hideAnswerFunc() {
  let showAnswer = document.querySelector('[data-js= "show-answer-1"]');
  let questionHideButton = document.querySelector(
    '[data-js="js-hide-button-1"]'
  );
  let questionCardShowButton = document.querySelector(
    '[data-js="js-show-button-1"]'
  );

  showAnswer.classList.remove("question-cards__question-card__answer");
  showAnswer.classList.add("question-cards__question-card__answer--hidden");
  questionHideButton.classList.add(
    "question-cards__question-card__button--hidden"
  );
  questionHideButton.classList.remove("question-cards__question-card__button");

  questionCardShowButton.classList.add("question-cards__question-card__button");
  questionCardShowButton.classList.remove(
    "question-cards__question-card__button--hidden"
  );
}
