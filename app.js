// Select all question/answer cards
const qaCards = document.querySelectorAll(".qa-card");

// Iterate through each card
qaCards.forEach((cardItem) => {
  // Select button within each card
  const btn = cardItem.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    // When clicked, toggle show-answer class on each card
    cardItem.classList.toggle("show-answer");
    // When clicked, check each card again in order to compare
    qaCards.forEach((cardItem2) => {
      // If cardItem2 does not match clicked cardItem, hide it by removing show-answer class
      if (cardItem2 !== cardItem) {
        cardItem2.classList.remove("show-answer");
      }
    });
  });
});
