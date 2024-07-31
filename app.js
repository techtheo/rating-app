// Select all list items under the element with the class 'rating'
let ratingCards = document.querySelectorAll(".rating li");

// Select the submit button by its ID 'submitBtn'
let submitBtn = document.getElementById("submitBtn");

// Select the element with the ID 'rate', where the selected rating will be displayed
let ratePoint = document.getElementById("rate");

// Select the section containing the rating cards, identified by the class 'rating-section'
let ratingSection = document.querySelector(".rating-section");

// Select the section that displays the thank you message, identified by the class 'thanks-container'
let thankSection = document.querySelector(".thanks-container");

// Initialize a variable to store the selected rating
let rate = null;

// Add a click event listener to each rating card
ratingCards.forEach((ratingPoint) => {
  ratingPoint.addEventListener("click", (e) => {
    // Find the currently active rating card
    let active = document.querySelector(".is-active");

    // If there is an active card, remove its 'is-active' class
    if (active) {
      active.classList.remove("is-active");
    }

    // Get the clicked card element
    const card = e.target;

    // Add the 'is-active' class to the clicked card to indicate selection
    card.classList.add("is-active");

    // Store the rating value from the clicked card's inner text
    rate = e.target.innerText;
    console.log(rate);
  });
});

// Add a click event listener to the submit button
submitBtn.addEventListener("click", () => {
  // Check if a rating has been selected
  if (rate) {
    // Set the inner text of the element with the ID 'rate' to the selected rating
    ratePoint.innerText = rate;

    // Hide the rating section by adding the 'hidden' class
    ratingSection.classList.add("hidden");

    // Show the thank you section by removing the 'hidden' class
    thankSection.classList.remove("hidden");
  }
});
