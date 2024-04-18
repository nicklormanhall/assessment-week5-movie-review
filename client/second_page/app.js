const form = document.getElementById("movieReviewForm");

console.log("hello!");
async function handleSubmit(event) {
  event.preventDefault();

  const movieTitle = document.getElementById("movieTitle").value;
  const genre = document.getElementById("genre").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const summary = document.getElementById("summary").value;
  const rating = document.getElementById("rating").value;

  if (movieTitle.trim() === "") {
    alert("Please enter a movie title.");
    return;
  }

  const formValues = {
    name: movieTitle,
    genre: genre,
    imageUrl: imageUrl,
    summary: summary,
    rating: rating,
  };

  const addmovie = await fetch("http://localhost:8080/movieadd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log("Form submitted successfully!");
  form.reset();
}

form.addEventListener("submit", handleSubmit);
