const bookmarkButton = document.querySelector('[data-js="js-bookmark"');

bookmarkButton.addEventListener("click", () => {
  if (
    bookmarkButton.classList.contains(
      "question-cards__question-card__bookmark__button"
    )
  ) {
    bookmarkButton.classList.add(
      "question-cards__question-card__bookmark__button--filled"
    );
    bookmarkButton.classList.remove(
      "question-cards__question-card__bookmark__button"
    );
  } else {
    bookmarkButton.classList.remove(
      "question-cards__question-card__bookmark__button--filled"
    );
    bookmarkButton.classList.add(
      "question-cards__question-card__bookmark__button"
    );
  }
});
