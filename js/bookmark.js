const bookmarkButton = document.querySelector('[data-js="js-bookmark"');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.remove(
    "question-cards__question-card__bookmark__button"
  );
  bookmarkButton.classList.add(
    "question-cards__question-card__bookmark__button--filled "
  );
});
