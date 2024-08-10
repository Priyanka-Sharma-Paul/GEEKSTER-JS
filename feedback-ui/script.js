const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const done = document.getElementById("done");
const giveFeedback = document.getElementById("give-feedback");
const feedback = document.getElementById("feedback");
const overlay = document.getElementById("overlay");

const containerEl = document.getElementById("container");
const feedbackText = document.getElementById("selectedFeedback");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    overlay.style.display = "flex";
    setTimeout(function () {
      feedbackText.innerText = selectedRating;
      giveFeedback.style.display = "none";
      feedback.style.display = "block";
      overlay.style.display = "none";
    }, 2000);
  }
});

done.addEventListener("click", () => {
    removeActive();
  feedbackText.innerText = "";
  giveFeedback.style.display = "block";
  feedback.style.display = "none";
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
