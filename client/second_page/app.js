const form = document.getElementById("movieReviewForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const movieTitle = document.getElementById("movieTitle").value;

  if (movieTitle.trim() === "") {
    alert("Please enter a movie title.");
    return;
  }

  console.log("Form submitted successfully!");
});
