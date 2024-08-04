//const question = document.querySelector(['data-js="question"']);
const questionCardShowButton = document.querySelector(
  '[data-js="js-show-button-1"]'
);
const questionHideButton = document.querySelector(
  '[data-js="js-hide-button-1"]'
);
const showAnswer = document.querySelector('[data-js= "show-answer-1"]');

questionCardShowButton.addEventListener("click", () => {
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
});

questionHideButton.addEventListener("click", () => {
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
});
