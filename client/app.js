// console.log("Image Gallery");
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("image-container");
const movieWrapper = document.getElementById("movieWrapper");
const scoreElement = document.getElementById("score"); //added for score color change
const sortbyRating = document.getElementById("sortbyRating");
const resetOrder = document.getElementById("resetOrder");

//inital images added to test thumbnails
const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/en/f/f5/Damsel_2024_poster2.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/37/Road_House_2024_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_(2024)_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_(2024)_poster.jpg",
    alt: "",
  },
];

async function getMovie() {
  const response = await fetch("http://localhost:8080/movies");
  const movies = await response.json();
  console.log(movies);
  createThumbnail(movies);

  if (movies.length > 0) {
    createMainImage(movies[0]);
  }
}

getMovie();

//get the movies in order of the rott
async function getMovieRating() {
  const response = await fetch("http://localhost:8080/moviesbyrating");
  const movies = await response.json();
  console.log(movies);
  createThumbnail(movies);

  if (movies.length > 0) {
    createMainImage(movies[0]);
  }
}

function preloadImage(url) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  link.as = "image";
  document.head.appendChild(link);
}

//Creates Thumbnail
function createThumbnail(movies) {
  thumbContainer.textContent = "";
  movies.forEach(function (movie) {
    const img = document.createElement("img");
    const deleteBtn = document.createElement("button");
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("innerContainer");
    thumbContainer.appendChild(innerContainer);
    img.src = movie.imageurl;
    img.alt = `Poster for the movie ${movie.name}`;
    img.ariaLabel = `Thumbnail of the movie poster for ${movie.name}. Click to bring up review below`;
    img.dataset.movieId = movie.id;
    img.tabIndex = 0; // Add tabindex for accessibility
    innerContainer.appendChild(img);
    img.addEventListener("click", function () {
      createMainImage(movie);
      img.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      }); //scrolls the thumbnail to the centre
    });
    // added for accessibility for the enter key
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Check if the pressed key is the return key
        createMainImage(movie);
      }
    });
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteMovie(movie.id));
    innerContainer.appendChild(deleteBtn);
    preloadImage(movie.name);
  });
}

//Creates main image and adds to the front screen
function createMainImage(movie) {
  displayImage.innerHTML = "";
  const mainImg = document.createElement("img");
  mainImg.src = movie.imageurl;
  mainImg.alt = `Poster for the movie ${movie.name}`;
  mainImg.ariaLabel = `Poster for the movie ${movie.name}`;
  displayImage.appendChild(mainImg);

  const movieTitle = document.getElementById("movie-title");
  const genre = document.getElementById("genre");
  const score = document.getElementById("score");
  const summary = document.getElementById("summary");
  //added for platform e.g NETFLIX
  const platform = document.getElementById("platform");

  movieTitle.textContent = movie.name;
  genre.textContent = movie.genre;
  score.textContent = movie.rating;
  summary.textContent = movie.summary;
  // changes the colour of the score
  platform.textContent = movie.platform;

  setColor();
}

async function deleteMovie(movieId) {
  const response = await fetch(`http://localhost:8080/moviedelete/${movieId}`, {
    method: "DELETE",
  });

  getMovie();
  console.log("deleted");
}
//sets to first image in the array

// Function to set colour of the rating score on the main image based on value of the rotten tomotes rating

function setColor() {
  const score = scoreElement.innerHTML;
  const scoreNum = parseFloat(score.slice(0, -1));

  let color;

  if (scoreNum <= 25) {
    color = "red";
  } else if (scoreNum <= 50) {
    color = "orange";
  } else if (scoreNum <= 75) {
    color = "yellow";
  } else {
    color = "green";
  }

  scoreElement.style.color = color;
}

// orders the images based on the rotten tomotes score when the button is clicked
sortbyRating.addEventListener("click", function () {
  getMovieRating();
});
// Order based on the standard database insert when the button is clicked
resetOrder.addEventListener("click", function () {
  getMovie();
});
