const form = document.getElementById("movieReviewForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const movieTitle = document.getElementById("movieTitle").value;
  const rating = document.getElementById("rating").value;

  if (movieTitle.trim() === "") {
    alert("Please enter a movie title.");
    return;
  }

  rating = Math.round((rating / 100) * 100);

  console.log("Movie Title:", movieTitle);
  console.log("Rating:", rating);

  console.log("Form submitted successfully!");
});
